import errorHandler from "errorhandler";

import app from "./app";
import logger from "./utils/logger";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
//...

const server = app.listen(app.get("port"), () => {
    logger.info(`HTTP App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
    logger.info(`May be http://localhost:80`);
});

process.on('SIGINT', function () {
    logger.warn('exit code zero')
    process.exit(0);
});

process.on('exit', function (code) {
    if (code === 0) {
        logger.info(`${app.get("appname")} gracefully exit on port ${app.get("port")}`)
    }
    else {
        logger.error(`${app.get("appname")} unexpectedly exit {'${code}'} on port ${app.get("port")}`)
    }
});

export default server;