import { LightningElement } from 'lwc';

export default class ParentLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log("constructor() called on Parent");
    }

    connectedCallback(){
        console.log("connectedCallback() called on Parent");
    }

    renderedCallback(){
        console.log("renderedCallback() called on Parent");
    }

    disconnectedCallback(){
        console.log("disconnectedCallback() called on Parent");
    }
}