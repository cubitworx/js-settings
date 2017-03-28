"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
exports.Settings = new SettingsStatic();
var SettingsStatic = (function () {
    function SettingsStatic() {
        this._settings = {};
    }
    SettingsStatic.prototype.extend = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (key) {
            if (key.split('.').length > 1)
                throw 'Settings.extend() currently does not support deep value setting';
            var source = (_a = [this._settings[key]]).concat.apply(_a, args);
            _.merge.apply(_, [this._settings[key]].concat(args));
        }
        else {
            _.merge.apply(_, [this._settings].concat(args));
        }
        var _a;
    };
    SettingsStatic.prototype.get = function (key, otherwise) {
        var setting = _.clone(this._settings), keys = key.split('.');
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var i = keys_1[_i];
            if (setting === undefined)
                break;
            if (setting[i] !== undefined)
                setting = setting[i];
            else
                setting = undefined;
        }
        return (setting !== undefined) ? setting : otherwise;
    };
    ;
    SettingsStatic.prototype.set = function (key, value) {
        if (key) {
            if (key.split('.').length > 1)
                throw 'Settings.set() currently does not support deep value setting';
            this._settings[key] = value;
        }
        else {
            this._settings = value;
        }
    };
    return SettingsStatic;
}());
exports.SettingsStatic = SettingsStatic;
;
//# sourceMappingURL=index.js.map