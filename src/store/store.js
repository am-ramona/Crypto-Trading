import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import mySaga from './saga';

// configure saga
const sagaMiddleware = createSagaMiddleware();

// add middlewares
const middleware = [
    ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
    sagaMiddleware,
];

export default function configureAppStore() {

    const store = configureStore({
        reducer: rootReducer,
        middleware: middleware,
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    sagaMiddleware.run(mySaga);

    return store
}
