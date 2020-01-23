"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ping_1 = __importDefault(require("./ping"));
const router = express_1.default.Router();
router.get('/ping', ping_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map