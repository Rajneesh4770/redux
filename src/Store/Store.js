import { createStore} from "redux"
import rootReducer from "../Services/Reducers/Index"

const Store = createStore(rootReducer);
console.log("storeData", Store);
export default Store;