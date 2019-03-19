"use strict";
exports.__esModule = true;
var models_1 = require("./models");
function getUsers() {
    var contact1;
    contact1 = {
        name: "John",
        number: "123456789"
    };
    var contact2;
    contact2 = {
        name: "Bill",
        number: "987654321"
    };
    var contact3;
    contact3 = {
        name: "Mike",
        number: "17428539"
    };
    var voiceCall1;
    voiceCall1 = {
        callContact: contact1,
        callType: models_1.VoiceCallType.IncomingCall,
        time: Date.now()
    };
    var voiceCall2;
    voiceCall2 = {
        callContact: contact2,
        callType: models_1.VoiceCallType.OutgoingCall,
        time: Date.now() - 100000
    };
    var voiceCall3;
    voiceCall3 = {
        callContact: contact3,
        callType: models_1.VoiceCallType.MissedCall,
        time: Date.now() - 350000
    };
    var sms1;
    sms1 = {
        smsContact: contact1,
        smsType: models_1.SMSType.IncomingSMS,
        text: "Hi!",
        time: Date.now()
    };
    var sms2;
    sms2 = {
        smsContact: contact2,
        smsType: models_1.SMSType.OutgoingSMS,
        text: "Hello world",
        time: Date.now() - 1000000
    };
    var sms3;
    sms3 = {
        smsContact: contact3,
        smsType: models_1.SMSType.UnreadSMS,
        text: "Hello city",
        time: Date.now() - 700000
    };
    var identity1;
    identity1 = {
        contactsList: [contact1, contact2],
        name: "First identity",
        smsList: [sms1, sms2],
        voiceCallsList: [voiceCall1, voiceCall2]
    };
    var identity2;
    identity2 = {
        contactsList: [contact3],
        name: "Second identity",
        smsList: [sms3],
        voiceCallsList: [voiceCall3]
    };
    var profile1;
    profile1 = {
        identitiesList: [identity1, identity2],
        name: "Profile 1"
    };
    var profile2;
    profile2 = {
        identitiesList: [],
        name: "Profile 2"
    };
    var user1;
    user1 = {
        name: "User 1",
        passward: "1234",
        profileList: [profile1, profile2],
        userType: models_1.UserType.standart
    };
    var user2;
    user2 = {
        name: "User 2",
        passward: "5555",
        profileList: [profile1],
        userType: models_1.UserType.standart
    };
    return [user1, user2];
}
exports.getUsers = getUsers;
