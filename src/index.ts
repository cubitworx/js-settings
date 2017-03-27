import * as _ from 'lodash';

export const Settings = new class {

	private _settings: any = {};

	public extend(key: string, ...args: any[]): void {
		if ( key ) {
			if ( key.split('.').length > 1 )
				throw 'Settings.extend() currently does not support deep value setting';
			let source = [ this._settings[key] ].concat( ...args );
			_.merge(this._settings[key], ...args);
		} else {
			_.merge(this._settings, ...args);
		}
	}

	public get(key: string, otherwise?: any): any {
		let
			setting = _.clone( this._settings ),
			keys = key.split('.');

		for ( let i of keys ) {
			if ( setting === undefined )
				break;

			if ( setting[i] !== undefined )
				setting = setting[i];
			else
				setting = undefined;
		}

		return ( setting !== undefined ) ? setting : otherwise;
	};

	public set(key: string, value: any): void {
		if ( key ) {
			if ( key.split('.').length > 1 )
				throw 'Settings.set() currently does not support deep value setting';
			this._settings[key] = value;
		} else {
			this._settings = value;
		}
	}

};
