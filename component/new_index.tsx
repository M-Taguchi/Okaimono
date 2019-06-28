import {action, computed, configure, observable} from "mobx";
configure({enforceActions: true});

class new_index{
    @observable currentText:string;
    @observable items: string[];

    @computed get isAddable():boolean{
        return this.currentText != "";
}

    constructor(currentText: string = "", items: string[] = []) {
        this.currentText = currentText;
        this.items = items;
    }

    @action.bound
    change_current_text(text:string){
        this.currentText = text;
    }

    @action.bound
    add_item(){
        this.items.push(this.currentText);
        console.log(JSON.stringify(this.items))
        this.currentText = "";
    }
}

export default new_index;