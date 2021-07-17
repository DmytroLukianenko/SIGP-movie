import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Redux/reducers/reducer'
import thunk from 'redux-thunk'
// import { persistStore } from 'redux-persist'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export default store
// export const persistor = persistStore(store)
