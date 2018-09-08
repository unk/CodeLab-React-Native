import { observable } from "mobx";

class Store {
	@observable authInfo = null;
}

export default new Store();