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
        text: "Hi!",
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
        name: "Profile 1"
    };
    let profile2;
    profile2 = {
        identitiesList: [],
        name: "Profile 2"
    };
    let user1;
    user1 = {
        name: "User1",
        passward: "1234",
        profileList: [profile1, profile2],
        userType: models_1.UserType.standart
    };
    let user2;
    user2 = {
        name: "User2",
        passward: "5555",
        profileList: [profile1],
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
