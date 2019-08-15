"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserType;
(function (UserType) {
    UserType[UserType["standart"] = 0] = "standart";
    UserType[UserType["technician"] = 1] = "technician";
})(UserType = exports.UserType || (exports.UserType = {}));
var VoiceCallType;
(function (VoiceCallType) {
    VoiceCallType[VoiceCallType["IncomingCall"] = 0] = "IncomingCall";
    VoiceCallType[VoiceCallType["OutgoingCall"] = 1] = "OutgoingCall";
    VoiceCallType[VoiceCallType["MissedCall"] = 2] = "MissedCall";
})(VoiceCallType = exports.VoiceCallType || (exports.VoiceCallType = {}));
;
var SMSType;
(function (SMSType) {
    SMSType[SMSType["IncomingSMS"] = 0] = "IncomingSMS";
    SMSType[SMSType["OutgoingSMS"] = 1] = "OutgoingSMS";
    SMSType[SMSType["UnreadSMS"] = 2] = "UnreadSMS";
})(SMSType = exports.SMSType || (exports.SMSType = {}));
;
//# sourceMappingURL=models.js.map