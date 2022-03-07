import { LightningElement } from 'lwc';

export default class ShowTemplate extends LightningElement {
    activeSectionMessage = '';
    isDVisible = false;

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleToggleSectionD() {
        this.isVisible = !this.isVisible;
    }

    get isMessageVisible() {
        return this.activeSectionMessage.length > 0;
    }
}