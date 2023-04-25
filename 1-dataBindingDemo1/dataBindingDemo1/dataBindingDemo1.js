import { LightningElement, track } from 'lwc';

export default class DataBindingDemo1 extends LightningElement {

    @track name;

    nameHandler(event) {
        this.name = event.target.value;
    }

}