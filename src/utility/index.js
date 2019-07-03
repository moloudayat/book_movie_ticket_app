export const formatStringObject = (string, object) => Object.keys(object).reduce((final, item) => final.replace(new RegExp(`{${item}}`, 'g'), object[item]), string);
