import { LightningElement } from 'lwc';

export default class ParentCToP extends LightningElement {

    counter = 0;

    handleAddition() {
        this.counter = this.counter + 1;
    }

    handleSubtraction() {
        this.counter = this.counter - 1;
    }
}