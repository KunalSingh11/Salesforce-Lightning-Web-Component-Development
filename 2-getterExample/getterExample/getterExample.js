import { LightningElement } from 'lwc';

export default class GetterExample extends LightningElement {

    firstName = '';
    lastName = '';

    nameHandler(event) {
        const fieldName = event.target.name;
        if (fieldName == 'firstName') {
            this.firstName = event.target.value;
        }
        else if (fieldName == "lastName") {
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

}