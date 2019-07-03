import Axios from "axios";
import qs from "qs";
import { formatString } from "./";

class AjaxCaller {
  constructor(config = {}, headers) {
    this.authorization = { type: "cookie", ...config.authorization }
    this.errors = { default: "موفقیت آمیز نبود", ...config.errors }
    this.headers = { "content-type": "application/x-www-form-urlencoded", ...headers };
  }

  processData(options, url, data, method) {
    let dataString = '';
    if (typeof data === 'string') {
      dataString = data;
    } else if (typeof data === 'object') {
      dataString = qs.stringify(data)
    }

    if (method === "GET" || method === "DELETE") {
      url += "?" + dataString;
    } else {
      options.data = dataString;
    }
    
    options.url = url;
  }

  processAuthorization(options, authorization) {
    if (authorization.type === "token") {
      options.headers.authorization = `Bearer ${authorization.token}`;
    } else if (authorization.type === "cookie") {
      options.withCredentials = true;
    }
  }

  handleResponse(result, successParser) {
    if (result.status === 200) {
      return successParser ? successParser(result.data) : { data: result.data, state: result.state }
    }

    const err = new Error();
    err.response = result;
    return Promise.reject(err);
  }

  handleErrorMessage(error, errors, errorParser) {
    if (errorParser) return errorParser(error);

    const message =
      error.response && errors[error.response.status]
        ? errors[error.response.status]
        : errors.default;

    const code =
        error.response && error.response.status
          ? error.response.status
          : -1;

    return {
      data: null,
      state: {
        success: false,
        code,
        message
      }
    };
  }

  parseUrl(path) {
    return typeof path === 'string' ? path : formatString(path.url, path.args) ;
  }

  sendAjaxRequest(path, params, config = {}, headers, successParser, errorParser) {
    const url = this.parseUrl(path);

    const authorization = { ...this.authorization, ...config.authorization }

    const errors = { ...this.errors, ...config.errors }

    const _headers = { ...this.headers, ...headers };

    const options = {
      headers: _headers,
      method: config.method
    };

    this.processAuthorization(options, authorization);
    this.processData(options, url, params, config.method);
    return Axios(options)
      .then(result => this.handleResponse(result, successParser))
      .catch(error => this.handleErrorMessage(error, errors, errorParser));
  }

  call(args, method) {
    const _config = args.config || {};
    _config.method = method;
    let successParser = args.successParser;
    const parseConfig = successParser;
    if (parseConfig) {
      if (typeof parseConfig === 'object') {
        const _successParser = (response) => {
          for (let targetKey of Object.keys(parseConfig)) {
            const sourceKey = parseConfig[targetKey];
            response.data[targetKey] = response.data[sourceKey];
            delete response.data[sourceKey];
          }

          return response;
        }

        successParser = _successParser;
      }
    }
    return this.sendAjaxRequest(args.path, args.params, _config, args.headers, successParser, args.errorParser);
  }

  get(args) {
    return this.call(args, 'GET');
  }

  post(args) {
    return this.call(args, 'POST');
  }

  delete(args) {
    return this.call(args, 'DELETE');
  }

  put(args) {
    return this.call(args, 'PUT');
  }
}

export default AjaxCaller;
