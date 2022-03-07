import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/Accounttest22.getAccountList';
  
export default class AccountTest2 extends LightningElement {
    @wire(getAccountList) accounts;
}