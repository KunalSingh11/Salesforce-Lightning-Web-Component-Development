import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountDataController.getAccounts';

const columns = [
    {
        label: 'Name',
        fieldName: 'accLink',
        type: 'url',
        typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }
    }, {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'Phone',
    }, {
        label: 'AccountNumber',
        fieldName: 'AccountNumber',
        type: 'text'
    }
];

export default class LinkLWCDatatable extends LightningElement {
    data = [];
    columns = columns;

    @wire(getAccounts)
    wireAccounts({ error, data }) {
        if (data) {
            data = JSON.parse(JSON.stringify(data));

            data.forEach(res => {
                res.accLink = '/' + res.Id;
            });

            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
        }
    }
}