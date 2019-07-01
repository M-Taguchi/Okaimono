import {action, computed, configure, observable} from "mobx";
import {create, persist} from "mobx-persist"

configure({enforceActions: true});

export interface NewIndexModel {
    currentText: string;
    items: string[];
}

class new_index implements NewIndexModel {
    //もでる
    @observable currentText: string;
    @persist('list') @observable items: string[];

    //こんとろーら
    @computed get isAddable(): boolean {
        return this.currentText != "";
    }

    constructor(currentText: string = "", items: string[] = []) {
        this.currentText = currentText;
        this.items = items;
    }

    @action.bound
    async hydrate(hydrator: any){
        await hydrator('okaimono', this)
    }
    initialize() {
        const hydrator = create({
            storage: localStorage,
        });
        this.hydrate(hydrator)
    }

    @action.bound
    change_current_text(text: string) {
        this.currentText = text;
        console.log(JSON.stringify(this.currentText))
    }

    @action.bound
    add_item() {
        this.items.push(this.currentText);
        console.log(JSON.stringify(this.items))
        this.currentText = "";
    }

    @action.bound
    deleteItemwithIdex(index: number) {
        this.items.splice(index, 1);
    }
}

export default new_index;