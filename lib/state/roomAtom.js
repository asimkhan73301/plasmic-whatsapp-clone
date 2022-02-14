import {atom} from "recoil"

export const selectedRoomIdState = atom({
    key: 'selectedRoomIdState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});