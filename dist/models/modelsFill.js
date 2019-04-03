"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
function getUsers() {
    let contact1;
    contact1 = {
        name: "John",
        number: "123456789"
    };
    let contact2;
    contact2 = {
        name: "Bill",
        number: "987654321"
    };
    let contact3;
    contact3 = {
        name: "Mike",
        number: "17428539"
    };
    let voiceCall1;
    voiceCall1 = {
        callContact: contact1,
        callType: models_1.VoiceCallType.IncomingCall,
        time: Date.now()
    };
    let voiceCall2;
    voiceCall2 = {
        callContact: contact2,
        callType: models_1.VoiceCallType.OutgoingCall,
        time: Date.now() - 100000
    };
    let voiceCall3;
    voiceCall3 = {
        callContact: contact3,
        callType: models_1.VoiceCallType.MissedCall,
        time: Date.now() - 350000
    };
    let sms1;
    sms1 = {
        smsContact: contact1,
        smsType: models_1.SMSType.IncomingSMS,
        text: "Hi! Im looking for you, how are you today? are you feel ok? can you be here today? what do you you want to do tommoraw\r\nBay! have sdkfhbHi! Im looking for you, how are you today? are you feel ok? can you be here today? what do you you want to do tommoraw\r\nBay! have sdkfhb",
        time: Date.now()
    };
    let sms2;
    sms2 = {
        smsContact: contact2,
        smsType: models_1.SMSType.OutgoingSMS,
        text: "Hello world",
        time: Date.now() - 1000000
    };
    let sms3;
    sms3 = {
        smsContact: contact3,
        smsType: models_1.SMSType.UnreadSMS,
        text: "Hello city",
        time: Date.now() - 700000
    };
    let identity1;
    identity1 = {
        contactsList: [contact1, contact2],
        name: "First identity",
        smsList: [sms1, sms2],
        voiceCallsList: [voiceCall1, voiceCall2]
    };
    let identity2;
    identity2 = {
        contactsList: [contact3],
        name: "Second identity",
        smsList: [sms3],
        voiceCallsList: [voiceCall3]
    };
    let profile1;
    profile1 = {
        identitiesList: [identity1, identity2],
        name: "Profile 1",
        lastName: "Last Name 1"
    };
    let profile2;
    profile2 = {
        identitiesList: [],
        name: "Profile 2",
        lastName: "Last Name 2"
    };
    let contact4;
    contact4 = {
        name: "Dohn",
        number: "14578456789"
    };
    let contact5;
    contact5 = {
        name: "Billy Bu",
        number: "098554321"
    };
    let contact6;
    contact6 = {
        name: "Hike & Mike",
        number: "85471256254954"
    };
    let contact7;
    contact7 = {
        name: "7Billy Bu",
        number: "098554321"
    };
    let contact8;
    contact8 = {
        name: "8Hike & Mike",
        number: "85471256254954"
    };
    let contact9;
    contact5 = {
        name: "9Billy Bu",
        number: "098554321"
    };
    let contact10;
    contact10 = {
        name: "10Hike & Mike",
        number: "85471256254954"
    };
    let voiceCall4;
    voiceCall4 = {
        callContact: contact4,
        callType: models_1.VoiceCallType.IncomingCall,
        time: Date.now() - 1800
    };
    let voiceCall5;
    voiceCall5 = {
        callContact: contact5,
        callType: models_1.VoiceCallType.MissedCall,
        time: Date.now() - 107700
    };
    let voiceCall6;
    voiceCall6 = {
        callContact: contact6,
        callType: models_1.VoiceCallType.IncomingCall,
        time: Date.now() - 30000
    };
    let voiceCall7;
    voiceCall7 = {
        callContact: contact7,
        callType: models_1.VoiceCallType.MissedCall,
        time: Date.now() - 1000
    };
    let voiceCall8;
    voiceCall8 = {
        callContact: contact8,
        callType: models_1.VoiceCallType.IncomingCall,
        time: Date.now() - 300000
    };
    let voiceCall9;
    voiceCall9 = {
        callContact: contact9,
        callType: models_1.VoiceCallType.MissedCall,
        time: Date.now() - 1085700
    };
    let voiceCall10;
    voiceCall10 = {
        callContact: contact10,
        callType: models_1.VoiceCallType.IncomingCall,
        time: Date.now() - 1500
    };
    let sms4;
    sms4 = {
        smsContact: contact5,
        smsType: models_1.SMSType.IncomingSMS,
        text: "Hi, How are you?",
        time: Date.now() - 80085
    };
    let sms5;
    sms5 = {
        smsContact: contact4,
        smsType: models_1.SMSType.IncomingSMS,
        text: "Hello world!\r\nNext line test",
        time: Date.now() - 189000
    };
    let sms7;
    sms7 = {
        smsContact: contact6,
        smsType: models_1.SMSType.OutgoingSMS,
        text: "!Hello city",
        time: Date.now() - 3910000
    };
    let sms8;
    sms8 = {
        smsContact: contact4,
        smsType: models_1.SMSType.IncomingSMS,
        text: "Hello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line testHello world!\r\nNext line test",
        time: Date.now() - 189000
    };
    let sms6;
    sms6 = {
        smsContact: contact6,
        smsType: models_1.SMSType.OutgoingSMS,
        text: "!Hello city",
        time: Date.now() - 3910000
    };
    let identity3;
    identity3 = {
        contactsList: [contact4, contact5, contact6, contact7, contact8, contact9, contact10],
        name: "Thired identity",
        smsList: [sms4, sms5, sms6, sms7, sms8],
        voiceCallsList: [voiceCall4, voiceCall5, voiceCall6, voiceCall7, voiceCall8, voiceCall9, voiceCall10]
    };
    let identity4;
    identity4 = {
        contactsList: [contact6, contact4],
        name: "Fourth identity",
        smsList: [],
        voiceCallsList: [voiceCall6]
    };
    let profile3;
    profile3 = {
        identitiesList: [identity3, identity4],
        name: "Profile 3",
        lastName: "Last Name 3"
    };
    let profile4;
    profile4 = {
        identitiesList: [identity3],
        name: "Profile 4",
        lastName: "Last Name 4"
    };
    let profile5;
    profile5 = {
        identitiesList: [identity3, identity4],
        name: "Profile 5",
        lastName: "Last Name 5"
    };
    let profile6;
    profile6 = {
        identitiesList: [identity3],
        name: "Profile 6",
        lastName: "Last Name 6"
    };
    let profile7;
    profile7 = {
        identitiesList: [identity3, identity4],
        name: "Profile 7",
        lastName: "Last Name 7"
    };
    let profile8;
    profile8 = {
        identitiesList: [identity3],
        name: "Profile 8",
        lastName: "Last Name 8"
    };
    let user1;
    user1 = {
        name: "User1",
        passward: "1234",
        profileList: [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8],
        userType: models_1.UserType.standart
    };
    let user2;
    user2 = {
        name: "User2",
        passward: "5555",
        profileList: [profile1, profile4],
        userType: models_1.UserType.standart
    };
    return [user1, user2];
}
exports.getUsers = getUsers;
function getUserByName(name) {
    let users = getUsers();
    return users.find(user => user.name === name);
}
exports.getUserByName = getUserByName;
