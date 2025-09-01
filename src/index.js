function getTimeStamp() {
  return Date.now();
}

function getLongTime(locate = 'es-ES'){
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    }
    return new Date().toLocaleString(locate, options);
}

MediaSourceHandle.exports = {
    getTimeStamp,
    getLongTime
}