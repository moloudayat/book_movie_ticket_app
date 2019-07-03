import createAction from './createAction';

const actionBinder = (actions) => {
    const boundActions = {}

    for (let i = 0; i < actions.length; i += 1) {
        const actionCC = actions[i].toLowerCase().replace(/_([a-z])/g, g => g[1].toUpperCase());
        boundActions[actionCC] = createAction.bind(this, actions[i])
    }

    return boundActions;
}

export default actionBinder;