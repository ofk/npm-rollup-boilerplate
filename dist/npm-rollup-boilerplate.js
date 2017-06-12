(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.NpmRollupBoilerplate = factory());
}(this, (function () { 'use strict';

function hello(name) {
  return 'Hello, ' + (name || '');
}

return hello;

})));
