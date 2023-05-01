import {
    LightningElement,
    wire
} from 'lwc';
import getAccountRecords from "@salesforce/apex/getAccountData.getAccountRecords";

export default class CustomAccountTab extends LightningElement {

    comboBoxOptions=[{
                label:"10",
                value:10
            },
            {
                label:"20",
                value:20
            },
            {
                label:"30",
                value:30
            },
            {
                label:"100",
                value:100
            }];

    dataTableData;
    dataTableColumns = [{
            label: "Account Name",
            fieldName: "Name",
            /*type: "url",
            typeAttributes: {
                label: {
                    fieldName: "Name"
                },
                target: "_blank"
            }*/
        },
        {
            label: "Account Number",
            fieldName: "AccountNumber"
        },
        {
            label: "Type",
            fieldName: "Type"
        },
        {
            label: "Billing Address",
            fieldName: "BillingAddress"
        },
        {
            label: "Owner Id",
            fieldName: "OwnerId"
        }
    ];

    searchHandler(event) {
        this.searchKey = event.target.value;

    }

    resultData;
    searchKey = '';

    @wire(getAccountRecords, {
        searchTerm: '$searchKey'
    })
    showAccountData({
        error,
        data
    }) {
        if (data) {
            this.resultData = data;
            console.log(data);
        } else if (error) {
            console.log(error);
        }
    }
}