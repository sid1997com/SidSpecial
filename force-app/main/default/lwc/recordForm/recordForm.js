import { LightningElement,track } from 'lwc';

export default class RecordForm extends LightningElement {
    @track recordId;

    handlesuccess(event){
        this.recordId = event.detail.id;
    }
}