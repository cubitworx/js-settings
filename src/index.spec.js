"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('Settings', function () {
    it('should extend and get', function () {
        var value1 = {
            'key-1': 'value-A-1',
            'key-2': {
                'key-1': 5,
                'key-2': {
                    'key-1': true
                }
            }
        }, value2 = {
            'key-2': {
                'key-2': 'value-B-2.2'
            }
        };
        index_1.Settings.extend(null, value1, value2);
        expect(index_1.Settings.get('key-1')).toEqual(value1['key-1']);
        expect(index_1.Settings.get('key-2.key-1')).toEqual(value1['key-2']['key-1']);
        expect(index_1.Settings.get('key-2.key-2')).toEqual(value2['key-2']['key-2']);
    });
    it('should set and get', function () {
        var value1 = {
            'key-1': 'value-A-1',
            'key-2': {
                'key-1': 5,
                'key-2': {
                    'key-1': true
                }
            }
        }, value2 = {
            'key-2': {
                'key-2': 'value-B-2.2'
            }
        };
        index_1.Settings.set(null, value1);
        expect(index_1.Settings.get('key-1')).toEqual(value1['key-1']);
        expect(index_1.Settings.get('key-2')).toEqual(value1['key-2']);
        expect(index_1.Settings.get('key-2.key-1')).toEqual(value1['key-2']['key-1']);
        expect(index_1.Settings.get('key-2.key-2')).toEqual(value1['key-2']['key-2']);
        expect(index_1.Settings.get('key-2.key-2.key-1')).toEqual(value1['key-2']['key-2']['key-1']);
        index_1.Settings.set('key-2', value2['key-2']);
        expect(index_1.Settings.get('key-1')).toEqual(value1['key-1']);
        expect(index_1.Settings.get('key-2.key-1')).toEqual(undefined);
        expect(index_1.Settings.get('key-2.key-2')).toEqual(value2['key-2']['key-2']);
    });
    it('should get with defaults', function () {
        var value = {
            'key-1': 'value-A-1'
        };
        index_1.Settings.set(null, value);
        expect(index_1.Settings.get('key-1')).toEqual(value['key-1']);
        expect(index_1.Settings.get('unknown-1')).toEqual(undefined);
        expect(index_1.Settings.get('unknown-1', true)).toEqual(true);
        expect(index_1.Settings.get('unknown-1', false)).toEqual(false);
        expect(index_1.Settings.get('unknown-1', 'a string')).toMatch('a string');
        expect(index_1.Settings.get('unknown-1', 5)).toEqual(5);
        expect(index_1.Settings.get('unknown-1', { 'some-key': 'some-value' })).toEqual({ 'some-key': 'some-value' });
        expect(index_1.Settings.get('unknown-1', ['some-value-1', 'some-value-2'])).toEqual(['some-value-1', 'some-value-2']);
    });
});
//# sourceMappingURL=index.spec.js.map