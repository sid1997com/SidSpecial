import { LightningElement } from 'lwc';

export default class OutPut extends LightningElement {
    Form = '';
    To = '';

    handleChange(event) {
        const field = event.target.name;
        if (field === 'From') {
            this.firstName = event.target.value;
        } else if (field === 'To') {
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }
}
