const moment = require('moment');

module.exports = {
    formatDate: (date, format = 'YYYY-MM-DD HH:mm:ss') => {
        return moment(date).isValid() ? moment(date).format(format) : 'Invalid date';
    }
};