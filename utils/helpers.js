const moment = require('moment');

module.exports = {
    formatDate: (date, format = 'YYYY-MM-DD') => {
        if (typeof date !== 'string' || !moment(date).isValid()) {
            console.error(`Invalid date: ${date}`);
            return 'Invalid date';
        }
        return moment(date).format(format);
    }
}