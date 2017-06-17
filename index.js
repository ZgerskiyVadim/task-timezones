const moment = require('moment-timezone');
const now = moment();
const FORMAT = 'MMMM Do YYYY, h:mm:ss a';

const TIME_ZONES = {
    'Europe/Moscow': 'Москва',
    'Europe/Samara': 'Самара',
    'Asia/Yekaterinburg': 'Екатеринбург',
    'Asia/Vladivostok': 'Владивосток',
    'Europe/Simferopol': 'Симверопль',
    'America/New_York': 'Нюь-Йорк',
    'America/Los_Angeles': 'Лос Анжелес'
};
const zones = Object.keys(TIME_ZONES);
const zonesLength = zones.length;

for (let i = 0; i < zonesLength; i ++ ){
    const timeZoneName = TIME_ZONES[zones[i]];
    const timeZone = zones[i];
    console.log(timeZoneName, now.tz(timeZone).format(FORMAT));
}




