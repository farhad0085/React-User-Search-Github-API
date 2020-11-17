import moment from 'moment'

export function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}

export function getFormattedDateTime(dateTime){
    return moment(dateTime).utc().local().format("DD MMMM, YYYY h:mm:ss a")
}