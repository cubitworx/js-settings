import { Settings } from './index';

describe('Settings', function () {

	it('should extend and get', () => {

		let
		value1 = {
			'key-1': 'value-A-1',
			'key-2': {
				'key-1': 5,
				'key-2': {
					'key-1': true
				}
			}
		},
		value2 = {
			'key-2': {
				'key-2': 'value-B-2.2'
			}
		};

		Settings.extend( null, value1, value2 );
		expect( Settings.get('key-1') ).toEqual( value1['key-1'] );
		expect( Settings.get('key-2.key-1') ).toEqual( value1['key-2']['key-1'] );
		expect( Settings.get('key-2.key-2') ).toEqual( value2['key-2']['key-2'] );

	});

	it('should set and get', () => {

		let
		value1 = {
			'key-1': 'value-A-1',
			'key-2': {
				'key-1': 5,
				'key-2': {
					'key-1': true
				}
			}
		},
		value2 = {
			'key-2': {
				'key-2': 'value-B-2.2'
			}
		};

		Settings.set( null, value1 );
		expect( Settings.get('key-1') ).toEqual( value1['key-1'] );
		expect( Settings.get('key-2') ).toEqual( value1['key-2'] );
		expect( Settings.get('key-2.key-1') ).toEqual( value1['key-2']['key-1'] );
		expect( Settings.get('key-2.key-2') ).toEqual( value1['key-2']['key-2'] );
		expect( Settings.get('key-2.key-2.key-1') ).toEqual( value1['key-2']['key-2']['key-1'] );

		Settings.set( 'key-2', value2['key-2'] );
		expect( Settings.get('key-1') ).toEqual( value1['key-1'] );
		expect( Settings.get('key-2.key-1') ).toEqual( undefined );
		expect( Settings.get('key-2.key-2') ).toEqual( value2['key-2']['key-2'] );

	});

	it('should get with defaults', () => {

		let
		value = {
			'key-1': 'value-A-1'
		};

		Settings.set( null, value );
		expect( Settings.get('key-1') ).toEqual( value['key-1'] );
		expect( Settings.get('unknown-1') ).toEqual( undefined );
		expect( Settings.get('unknown-1', true) ).toEqual( true );
		expect( Settings.get('unknown-1', false) ).toEqual( false );
		expect( Settings.get('unknown-1', 'a string') ).toMatch( 'a string' );
		expect( Settings.get('unknown-1', 5) ).toEqual( 5 );
		expect( Settings.get('unknown-1', {'some-key': 'some-value'}) ).toEqual({'some-key': 'some-value'});
		expect( Settings.get('unknown-1', ['some-value-1', 'some-value-2']) ).toEqual(['some-value-1', 'some-value-2']);

	});

});
