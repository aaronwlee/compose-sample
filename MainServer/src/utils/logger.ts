import { createLogger, LoggerOptions, transports, format } from "winston";
import { SPLAT } from 'triple-beam';

const myFormat = format.printf(({ level, message, label, ...others }) => {
    let formatedString = `${new Date().toLocaleString()} [${label}] ${level}: ${message}`;
    if (others[SPLAT]) {
        const splatString = JSON.stringify(others[SPLAT])
        const formatedSplat = splatString.slice(1, splatString.length - 1).trim().replace(/",/g, '", ').replace(/:"/, ' : "').replace(/{/g, '{ ').replace(/}/g, ' }')
        formatedString += `\n${level} -> ${formatedSplat}`
    }
    return formatedString;
});

const options: LoggerOptions = {
    format: format.combine(
        format.label({ label: "Main" }),
        format.colorize(),
        myFormat
    ),
    transports: [
        new transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new transports.File({ filename: "debug.log", level: "debug" })
    ]
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;