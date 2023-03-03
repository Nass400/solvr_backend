"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var util = __importStar(require("util"));
var data_1 = require("./data");
var countData_1 = require("./countData");
var filterData_1 = require("./filterData");
var minimist_1 = __importDefault(require("minimist"));
var args = (0, minimist_1["default"])(process.argv.slice(2));
var filterPattern = args.filter;
var countFlag = args.count;
if (filterPattern) {
    var filterResult = (0, filterData_1.filterData)(data_1.data, filterPattern);
    console.log(util.inspect(filterResult, false, null, true));
}
else if (countFlag) {
    var countResult = (0, countData_1.countData)(data_1.data);
    console.log(util.inspect(countResult, false, null, true));
}
else {
    console.log('Not Valid Command');
}
//# sourceMappingURL=app.js.map