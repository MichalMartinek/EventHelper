import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { routerMiddleware } from 'react-router-redux';



const initStore = (history = {}) => {
    const routerMdw = routerMiddleware(history);

    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(routerMdw),
        // other store enhancers if any
    );

    const store = createStore(reducer, enhancer);

    return store;
}



export default initStore;
