import { LightningElement } from 'lwc';

export default class ComboboxRequired extends LightningElement {
    From = '';
    To = '';
    CC = '';
 EmailTemplate = '';

     selectedAccount;
 
     handleAccountSelection(event){
         this.selectedAccount = event.target.value;
         alert("The selected Accout id is"+this.selectedAccount);
         
     }





    value = 'inProgress';

    get options() {
        return [
            { label: 'Test', value: 'test' },
            { label: 'Test1', value: 'test1' },
            { label: 'Test2', value: 'test2' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}