import {action, computed, configure, observable} from "mobx";
configure({enforceActions: true});

export interface NewIndexModel{
    currentText:string;
    items:string[];
}
class new_index implements NewIndexModel {
    //もでる
    @observable currentText:string;
    @observable items: string[];

    //こんとろーら
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

    @action.bound
    deleteItemwithIndex(index:number){
        this.items.splice(index, 1);
    }
}

export default new_index;