import { LightningElement } from 'lwc';

export default class ChildLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log("constructor() called on Child");
    }

    connectedCallback(){
        console.log("connectedCallback() called on Child");
    }

    renderedCallback(){
        console.log("renderedCallback() called on Child");
    }

    disconnectedCallback(){
        console.log("disconnectedCallback() called on Child");
    }
}