import { User, Contact, VoiceCall, VoiceCallType, SMS, SMSType, Identity, Profile, UserType } from "./models";

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
    text: "Hi! Im looking for you, how are you today? are you feel ok? can you be here today? what do you you want to do tommoraw\r\nBay! have sdkfhbHi! Im looking for you, how are you today? are you feel ok? can you be here today? what do you you want to do tommoraw\r\nBay! have sdkfhb",
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
    name: "Profile 1",
    lastName: "Last Name 1"
  };

  let profile2: Profile;
  profile2 = {
    identitiesList: [],
    name: "Profile 2",
    lastName: "Last Name 2"
  };

  
  let contact4: Contact;
  contact4 = {
    name: "Dohn",
    number: "14578456789"
  };

  let contact5: Contact;
  contact5 = {
    name: "Billy Bu",
    number: "098554321"
  };

  let contact6: Contact;
  contact6 = {
    name: "Hike & Mike",
    number: "85471256254954"
  };
  let contact7: Contact;
  contact7 = {
    name: "7Billy Bu",
    number: "098554321"
  };

  let contact8: Contact;
  contact8 = {
    name: "8Hike & Mike",
    number: "85471256254954"
  };
  let contact9: Contact;
  contact5 = {
    name: "9Billy Bu",
    number: "098554321"
  };

  let contact10: Contact;
  contact10 = {
    name: "10Hike & Mike",
    number: "85471256254954"
  };

  let voiceCall4: VoiceCall;
  voiceCall4 = {
    callContact: contact4,
    callType: VoiceCallType.IncomingCall,
    time: Date.now() - 1800
  };
  
  let voiceCall5: VoiceCall;
  voiceCall5 = {
    callContact: contact5,
    callType: VoiceCallType.MissedCall,
    time: Date.now() - 107700
  };

  let voiceCall6: VoiceCall;
  voiceCall6 = {
    callContact: contact6,
    callType: VoiceCallType.IncomingCall,
    time: Date.now() - 30000
  };

  let voiceCall7: VoiceCall;
  voiceCall7 = {
    callContact: contact7,
    callType: VoiceCallType.MissedCall,
    time: Date.now() - 1000
  };

  let voiceCall8: VoiceCall;
  voiceCall8 = {
    callContact: contact8,
    callType: VoiceCallType.IncomingCall,
    time: Date.now() - 300000
  };

  let voiceCall9: VoiceCall;
  voiceCall9 = {
    callContact: contact9,
    callType: VoiceCallType.MissedCall,
    time: Date.now() - 1085700
  };

  let voiceCall10: VoiceCall;
  voiceCall10 = {
    callContact: contact10,
    callType: VoiceCallType.IncomingCall,
    time: Date.now() - 1500
  };

  let sms4 : SMS;
  sms4 = {
    smsContact: contact5,
    smsType: SMSType.IncomingSMS,
    text: "Hi, How are you?",
    time: Date.now() - 80085
  };

  let sms5 : SMS;
  sms5 = {
    smsContact: contact4,
    smsType: SMSType.IncomingSMS,
    text: "Hello world!\r\nNext line test",
    time: Date.now() - 189000
  };

  let sms7 : SMS;
  sms7 = {
    smsContact: contact6,
    smsType: SMSType.OutgoingSMS,
    text: "!Hello city",
    time: Date.now() - 3910000
  };

  let sms8 : SMS;
  sms8 = {
    smsContact: contact4,
    smsType: SMSType.IncomingSMS,
    text: "Hello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line test",
    time: Date.now() - 189000
  };

  let sms6 : SMS;
  sms6 = {
    smsContact: contact6,
    smsType: SMSType.OutgoingSMS,
    text: "!Hello city",
    time: Date.now() - 3910000
  };

  let identity3: Identity;
  identity3 = {
    contactsList: [contact4, contact5, contact6, contact7, contact8, contact9, contact10],
    name: "Thired identity",
    smsList : [sms4, sms5, sms6, sms7, sms8],
    voiceCallsList: [voiceCall4, voiceCall5, voiceCall6, voiceCall7, voiceCall8, voiceCall9, voiceCall10]
  };

  let identity4: Identity;
  identity4 = {
    contactsList: [contact6, contact4],
    name: "Fourth identity",
    smsList : [],
    voiceCallsList: [voiceCall6]
  };

  let profile3: Profile;
  profile3 = {
    identitiesList: [identity3, identity4],
    name: "Profile 3",
    lastName: "Last Name 3"
  };

  let profile4: Profile;
  profile4 = {
    identitiesList: [identity3],
    name: "Profile 4",
    lastName: "Last Name 4"
  };

  let profile5: Profile;
  profile5 = {
    identitiesList: [identity3, identity4],
    name: "Profile 5",
    lastName: "Last Name 5"
  };

  let profile6: Profile;
  profile6 = {
    identitiesList: [identity3],
    name: "Profile 6",
    lastName: "Last Name 6"
  };

  let profile7: Profile;
  profile7 = {
    identitiesList: [identity3, identity4],
    name: "Profile 7",
    lastName: "Last Name 7"
  };

  let profile8: Profile;
  profile8 = {
    identitiesList: [identity3],
    name: "Profile 8",
    lastName: "Last Name 8"
  };

  let user1: User;
  user1 = {
    name: "User1",
    passward: "1234",
    profileList: [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8],
    userType: UserType.standart
  }

  let user2: User;
  user2 = {
    name: "User2",
    passward: "5555",
    profileList: [profile1, profile4],
    userType: UserType.standart
  }

  return [user1, user2];
}

export function getUserByName(name: string) : User {
  let users = getUsers();
  return users.find(user => user.name === name)
}