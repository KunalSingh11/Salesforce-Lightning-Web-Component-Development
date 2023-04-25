import { LightningElement } from 'lwc';

export default class ConditionalRenderingDemo extends LightningElement {

    show = false;
    Name = '';
    Age = 0;

    inputHandler(event) {
        const variableName = event.target.name;
        if (variableName == 'Name') {
            this.Name = event.target.value;
        }
        else if (variableName == 'Age') {
            this.Age = event.target.value;
        }
    }

    saveHandler() {
        this.show = true;
    }

}