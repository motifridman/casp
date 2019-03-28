export {}

export enum UserType { standart, technician }

export interface User {
  name: string,
  passward: string,
  userType: UserType,
  profileList: Profile[]
}


export interface Profile {
  name: string,
  lastName: string,
  identitiesList: Identity[]
}

export interface Identity {
  name: string
  contactsList: Contact[],
  voiceCallsList: VoiceCall[],
  smsList: SMS[]
}

export interface Contact {
  name: string,
  number: string
}

export enum VoiceCallType { IncomingCall, OutgoingCall, MissedCall };

export interface VoiceCall {
  callType: VoiceCallType,
  time: number,
  callContact: Contact
}

export enum SMSType { IncomingSMS, OutgoingSMS, UnreadSMS };

export interface SMS {
  smsType: SMSType,
  smsContact: Contact,
  time: number,
  text: string
}