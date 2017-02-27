/*global $,document */
'use strict';
var logging = function logging(m,t) {
	if (!m || !console) return;
	this.m = m;
	this.t = !!t ? t : null;

	console.log(typeof(t));

	if (typeof(t) !== 'object'){
		this.string();
	} else {
		this.object();
	}
};

logging.prototype.string = function string() {
	if('warn' === this.t) {
		console.warn('Logged ==>> ' + this.m);
	} else if('error' === this.t) {
		console.error('Logged ==>> ' + this.m);
	} else {
		console.log('Logged ==>> ' + this.m);
	}
};

logging.prototype.object = function object() {
	if ('warn' === this.t) {
		console.warn('Logged:', this.m);
	} else if('error' === this.t) {
		console.error('Logged:', this.m);
	} else {
		console.log('Logged:', this.m);
	}
};