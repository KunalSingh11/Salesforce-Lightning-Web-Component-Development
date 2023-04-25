import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    variable = false;

    variableSwitcher() {
        if (this.variable == false) {
            this.variable = true;
        }
        else if (this.variable == true) {
            this.variable = false;
        }
    }
}