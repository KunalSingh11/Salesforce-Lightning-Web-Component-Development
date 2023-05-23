import { LightningElement } from 'lwc';

export default class ChildCToP extends LightningElement {

    handleAdd() {
        this.dispatchEvent(new CustomEvent('addevent'));
    }

    handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtractevent'));
    }

}