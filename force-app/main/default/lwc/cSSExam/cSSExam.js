import { LightningElement,track } from 'lwc';

export default class CSSExam extends LightningElement {
    @track greeting = 'welcome To omnicloud Salesforce Developer/consultant';
    onChangeHandler(event){
        this.greeting = event.target.value;
    }
}