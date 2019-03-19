import { User, Contact, VoiceCall, VoiceCallType, SMS, SMSType, Identity, Profile, UserType } from "./models";
import * as moment from 'moment';

export function getUsers() : User[]  {
  let contact1: Contact;
  contact1 = {
    name: "John",
    number: "123456789"
  };

  let contact2: Contact;
  contact2 = {
    name: "Bill",
    number: "987654321"
  };

  let contact3: Contact;
  contact3 = {
    name: "Mike",
    number: "17428539"
  };

  let voiceCall1: VoiceCall;
  voiceCall1 = {
    callContact: contact1,
    callType: VoiceCallType.IncomingCall,
    time: Date.now()
  };
  
  let voiceCall2: VoiceCall;
  voiceCall2 = {
    callContact: contact2,
    callType: VoiceCallType.OutgoingCall,
    time: Date.now() - 100000
  };

  let voiceCall3: VoiceCall;
  voiceCall3 = {
    callContact: contact3,
    callType: VoiceCallType.MissedCall,
    time: Date.now() - 350000
  };

  let sms1 : SMS;
  sms1 = {
    smsContact: contact1,
    smsType: SMSType.IncomingSMS,
    text: "Hi!",
    time: Date.now()
  };

  let sms2 : SMS;
  sms2 = {
    smsContact: contact2,
    smsType: SMSType.OutgoingSMS,
    text: "Hello world",
    time: Date.now() - 1000000
  };

  let sms3 : SMS;
  sms3 = {
    smsContact: contact3,
    smsType: SMSType.UnreadSMS,
    text: "Hello city",
    time: Date.now() - 700000
  };

  let identity1: Identity;
  identity1 = {
    contactsList: [contact1, contact2],
    name: "First identity",
    smsList : [sms1, sms2],
    voiceCallsList: [voiceCall1, voiceCall2]
  };

  let identity2: Identity;
  identity2 = {
    contactsList: [contact3],
    name: "Second identity",
    smsList : [sms3],
    voiceCallsList: [voiceCall3]
  };

  let profile1: Profile;
  profile1 = {
    identitiesList: [identity1, identity2],
    name: "Profile 1"
  };

  let profile2: Profile;
  profile2 = {
    identitiesList: [],
    name: "Profile 2"
  };

  let user1: User;
  user1 = {
    name: "User 1",
    passward: "1234",
    profileList: [profile1, profile2],
    userType: UserType.standart
  }

  let user2: User;
  user2 = {
    name: "User 2",
    passward: "5555",
    profileList: [profile1],
    userType: UserType.standart
  }

  return [user1, user2];
}