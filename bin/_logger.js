const Chalk = require("chalk");
const moment = require("moment-timezone");

const CURRENT_TIME_ZONE = moment.tz.guess();

exports.debug = (message) => {
    console.log(
        Chalk.blueBright(
            `${moment.tz(CURRENT_TIME_ZONE).format()} [DEBUG] ${message}`
        )
    );
};
exports.info = (message) => {
    console.log(
        Chalk.greenBright(
            `${moment.tz(CURRENT_TIME_ZONE).format()} [INFO] ${message}`
        )
    );
};
exports.warn = (message) => {
    console.log(
        Chalk.yellowBright(
            `${moment.tz(CURRENT_TIME_ZONE).format()} [WARN] ${message}`
        )
    );
};
exports.error = (message) => {
    console.log(
        Chalk.redBright(
            `${moment.tz(CURRENT_TIME_ZONE).format()} [ERROR] ${message}`
        )
    );
};
