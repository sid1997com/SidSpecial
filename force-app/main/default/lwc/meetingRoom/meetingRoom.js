import { LightningElement,api , wire, track } from 'lwc';
import {fireEvent} from 'c/pubSub';
import{currentPageReference } from'lightning/navigation' ; 

export default class MeetingRoom extends LightningElement {
@api meetingRoomInfo ={roomName:'A-01',roomCapacity :'12'}
@api showRoomInfo ="false" ;
//@wire (currentPageReference) pageReference ;

tileClickHandler() {
 const tileClicked= new CustomEvent ('tileclick',{detail : this.meetingRoomInfo  });

  this.dispatchEvent(tileClicked);
  fireEvent (this.pageReference,'pubsubtileClick',this.meetingroomInfo);
 

}
} 