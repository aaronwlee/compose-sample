"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./utils/logger"));
/**
 * Error Handler. Provides full stack - remove for production
 */
app_1.default.use(errorhandler_1.default());
/**
 * Start Express server.
 */
//...
const server = app_1.default.listen(app_1.default.get("port"), () => {
    logger_1.default.info(`HTTP App is running at https://localhost:${app_1.default.get("port")} in ${app_1.default.get("env")} mode`);
});
process.on('SIGINT', function () {
    logger_1.default.warn('exit code zero');
    process.exit(0);
});
process.on('exit', function (code) {
    if (code === 0) {
        logger_1.default.info(`${app_1.default.get("appname")} gracefully exit on port ${app_1.default.get("port")}`);
    }
    else {
        logger_1.default.error(`${app_1.default.get("appname")} unexpectedly exit {'${code}'} on port ${app_1.default.get("port")}`);
    }
});
exports.default = server;
//# sourceMappingURL=server.js.map