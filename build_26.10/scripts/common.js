'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId]) {
			/******/return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/i: moduleId,
			/******/l: false,
			/******/exports: {}
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/__webpack_require__.d = function (exports, name, getter) {
		/******/if (!__webpack_require__.o(exports, name)) {
			/******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
			/******/
		}
		/******/
	};
	/******/
	/******/ // define __esModule on exports
	/******/__webpack_require__.r = function (exports) {
		/******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			/******/
		}
		/******/Object.defineProperty(exports, '__esModule', { value: true });
		/******/
	};
	/******/
	/******/ // create a fake namespace object
	/******/ // mode & 1: value is a module id, require it
	/******/ // mode & 2: merge all properties of value into the ns
	/******/ // mode & 4: return value when already ns object
	/******/ // mode & 8|1: behave like require
	/******/__webpack_require__.t = function (value, mode) {
		/******/if (mode & 1) value = __webpack_require__(value);
		/******/if (mode & 8) return value;
		/******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
		/******/var ns = Object.create(null);
		/******/__webpack_require__.r(ns);
		/******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		/******/if (mode & 2 && typeof value != 'string') for (var key in value) {
			__webpack_require__.d(ns, key, function (key) {
				return value[key];
			}.bind(null, key));
		} /******/return ns;
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/__webpack_require__.n = function (module) {
		/******/var getter = module && module.__esModule ?
		/******/function getDefault() {
			return module['default'];
		} :
		/******/function getModuleExports() {
			return module;
		};
		/******/__webpack_require__.d(getter, 'a', getter);
		/******/return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";
	/******/
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = "./website/src/js/common.js");
	/******/
})(
/************************************************************************/
/******/{

	/***/"./node_modules/jquery-mask-plugin/dist/jquery.mask.js":
	/*!*************************************************************!*\
   !*** ./node_modules/jquery-mask-plugin/dist/jquery.mask.js ***!
   \*************************************************************/
	/*! no static exports found */
	/***/function node_modulesJqueryMaskPluginDistJqueryMaskJs(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
                                                                                                   * jquery.mask.js
                                                                                                   * @version: v1.14.15
                                                                                                   * @author: Igor Escobar
                                                                                                   *
                                                                                                   * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
                                                                                                   *
                                                                                                   * Copyright (c) 2012 Igor Escobar http://igorescobar.com
                                                                                                   *
                                                                                                   * The MIT License (http://www.opensource.org/licenses/mit-license.php)
                                                                                                   *
                                                                                                   * Permission is hereby granted, free of charge, to any person
                                                                                                   * obtaining a copy of this software and associated documentation
                                                                                                   * files (the "Software"), to deal in the Software without
                                                                                                   * restriction, including without limitation the rights to use,
                                                                                                   * copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                   * copies of the Software, and to permit persons to whom the
                                                                                                   * Software is furnished to do so, subject to the following
                                                                                                   * conditions:
                                                                                                   *
                                                                                                   * The above copyright notice and this permission notice shall be
                                                                                                   * included in all copies or substantial portions of the Software.
                                                                                                   *
                                                                                                   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                                   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                                                                                   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                                                                                                   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                                                                                                   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                                                                                                   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                                                                                   * OTHER DEALINGS IN THE SOFTWARE.
                                                                                                   */

		/* jshint laxbreak: true */
		/* jshint maxcomplexity:17 */
		/* global define */

		// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
		// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
		(function (factory, jQuery, Zepto) {

			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {}
		})(function ($) {
			'use strict';

			var Mask = function Mask(el, mask, options) {

				var p = {
					invalid: [],
					getCaret: function getCaret() {
						try {
							var sel,
							    pos = 0,
							    ctrl = el.get(0),
							    dSel = document.selection,
							    cSelStart = ctrl.selectionStart;

							// IE Support
							if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
								sel = dSel.createRange();
								sel.moveStart('character', -p.val().length);
								pos = sel.text.length;
							}
							// Firefox support
							else if (cSelStart || cSelStart === '0') {
									pos = cSelStart;
								}

							return pos;
						} catch (e) {}
					},
					setCaret: function setCaret(pos) {
						try {
							if (el.is(':focus')) {
								var range,
								    ctrl = el.get(0);

								// Firefox, WebKit, etc..
								if (ctrl.setSelectionRange) {
									ctrl.setSelectionRange(pos, pos);
								} else {
									// IE
									range = ctrl.createTextRange();
									range.collapse(true);
									range.moveEnd('character', pos);
									range.moveStart('character', pos);
									range.select();
								}
							}
						} catch (e) {}
					},
					events: function events() {
						el.on('keydown.mask', function (e) {
							el.data('mask-keycode', e.keyCode || e.which);
							el.data('mask-previus-value', el.val());
							el.data('mask-previus-caret-pos', p.getCaret());
							p.maskDigitPosMapOld = p.maskDigitPosMap;
						}).on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour).on('paste.mask drop.mask', function () {
							setTimeout(function () {
								el.keydown().keyup();
							}, 100);
						}).on('change.mask', function () {
							el.data('changed', true);
						}).on('blur.mask', function () {
							if (oldValue !== p.val() && !el.data('changed')) {
								el.trigger('change');
							}
							el.data('changed', false);
						})
						// it's very important that this callback remains in this position
						// otherwhise oldValue it's going to work buggy
						.on('blur.mask', function () {
							oldValue = p.val();
						})
						// select all text on focus
						.on('focus.mask', function (e) {
							if (options.selectOnFocus === true) {
								$(e.target).select();
							}
						})
						// clear the value if it not complete the mask
						.on('focusout.mask', function () {
							if (options.clearIfNotMatch && !regexMask.test(p.val())) {
								p.val('');
							}
						});
					},
					getRegexMask: function getRegexMask() {
						var maskChunks = [],
						    translation,
						    pattern,
						    optional,
						    recursive,
						    oRecursive,
						    r;

						for (var i = 0; i < mask.length; i++) {
							translation = jMask.translation[mask.charAt(i)];

							if (translation) {

								pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
								optional = translation.optional;
								recursive = translation.recursive;

								if (recursive) {
									maskChunks.push(mask.charAt(i));
									oRecursive = { digit: mask.charAt(i), pattern: pattern };
								} else {
									maskChunks.push(!optional && !recursive ? pattern : pattern + '?');
								}
							} else {
								maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
							}
						}

						r = maskChunks.join('');

						if (oRecursive) {
							r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?').replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
						}

						return new RegExp(r);
					},
					destroyEvents: function destroyEvents() {
						el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
					},
					val: function val(v) {
						var isInput = el.is('input'),
						    method = isInput ? 'val' : 'text',
						    r;

						if (arguments.length > 0) {
							if (el[method]() !== v) {
								el[method](v);
							}
							r = el;
						} else {
							r = el[method]();
						}

						return r;
					},
					calculateCaretPosition: function calculateCaretPosition() {
						var oldVal = el.data('mask-previus-value') || '',
						    newVal = p.getMasked(),
						    caretPosNew = p.getCaret();
						if (oldVal !== newVal) {
							var caretPosOld = el.data('mask-previus-caret-pos') || 0,
							    newValL = newVal.length,
							    oldValL = oldVal.length,
							    maskDigitsBeforeCaret = 0,
							    maskDigitsAfterCaret = 0,
							    maskDigitsBeforeCaretAll = 0,
							    maskDigitsBeforeCaretAllOld = 0,
							    i = 0;

							for (i = caretPosNew; i < newValL; i++) {
								if (!p.maskDigitPosMap[i]) {
									break;
								}
								maskDigitsAfterCaret++;
							}

							for (i = caretPosNew - 1; i >= 0; i--) {
								if (!p.maskDigitPosMap[i]) {
									break;
								}
								maskDigitsBeforeCaret++;
							}

							for (i = caretPosNew - 1; i >= 0; i--) {
								if (p.maskDigitPosMap[i]) {
									maskDigitsBeforeCaretAll++;
								}
							}

							for (i = caretPosOld - 1; i >= 0; i--) {
								if (p.maskDigitPosMapOld[i]) {
									maskDigitsBeforeCaretAllOld++;
								}
							}

							// if the cursor is at the end keep it there
							if (caretPosNew > oldValL) {
								caretPosNew = newValL * 10;
							} else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
								if (!p.maskDigitPosMapOld[caretPosNew]) {
									var caretPos = caretPosNew;
									caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
									caretPosNew -= maskDigitsBeforeCaret;
									if (p.maskDigitPosMap[caretPosNew]) {
										caretPosNew = caretPos;
									}
								}
							} else if (caretPosNew > caretPosOld) {
								caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
								caretPosNew += maskDigitsAfterCaret;
							}
						}
						return caretPosNew;
					},
					behaviour: function behaviour(e) {
						e = e || window.event;
						p.invalid = [];

						var keyCode = el.data('mask-keycode');

						if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
							var newVal = p.getMasked(),
							    caretPos = p.getCaret();

							// this is a compensation to devices/browsers that don't compensate
							// caret positioning the right way
							setTimeout(function () {
								p.setCaret(p.calculateCaretPosition());
							}, $.jMaskGlobals.keyStrokeCompensation);

							p.val(newVal);
							p.setCaret(caretPos);
							return p.callbacks(e);
						}
					},
					getMasked: function getMasked(skipMaskChars, val) {
						var buf = [],
						    value = val === undefined ? p.val() : val + '',
						    m = 0,
						    maskLen = mask.length,
						    v = 0,
						    valLen = value.length,
						    offset = 1,
						    addMethod = 'push',
						    resetPos = -1,
						    maskDigitCount = 0,
						    maskDigitPosArr = [],
						    lastMaskChar,
						    check;

						if (options.reverse) {
							addMethod = 'unshift';
							offset = -1;
							lastMaskChar = 0;
							m = maskLen - 1;
							v = valLen - 1;
							check = function check() {
								return m > -1 && v > -1;
							};
						} else {
							lastMaskChar = maskLen - 1;
							check = function check() {
								return m < maskLen && v < valLen;
							};
						}

						var lastUntranslatedMaskChar;
						while (check()) {
							var maskDigit = mask.charAt(m),
							    valDigit = value.charAt(v),
							    translation = jMask.translation[maskDigit];

							if (translation) {
								if (valDigit.match(translation.pattern)) {
									buf[addMethod](valDigit);
									if (translation.recursive) {
										if (resetPos === -1) {
											resetPos = m;
										} else if (m === lastMaskChar && m !== resetPos) {
											m = resetPos - offset;
										}

										if (lastMaskChar === resetPos) {
											m -= offset;
										}
									}
									m += offset;
								} else if (valDigit === lastUntranslatedMaskChar) {
									// matched the last untranslated (raw) mask character that we encountered
									// likely an insert offset the mask character from the last entry; fall
									// through and only increment v
									maskDigitCount--;
									lastUntranslatedMaskChar = undefined;
								} else if (translation.optional) {
									m += offset;
									v -= offset;
								} else if (translation.fallback) {
									buf[addMethod](translation.fallback);
									m += offset;
									v -= offset;
								} else {
									p.invalid.push({ p: v, v: valDigit, e: translation.pattern });
								}
								v += offset;
							} else {
								if (!skipMaskChars) {
									buf[addMethod](maskDigit);
								}

								if (valDigit === maskDigit) {
									maskDigitPosArr.push(v);
									v += offset;
								} else {
									lastUntranslatedMaskChar = maskDigit;
									maskDigitPosArr.push(v + maskDigitCount);
									maskDigitCount++;
								}

								m += offset;
							}
						}

						var lastMaskCharDigit = mask.charAt(lastMaskChar);
						if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
							buf.push(lastMaskCharDigit);
						}

						var newVal = buf.join('');
						p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
						return newVal;
					},
					mapMaskdigitPositions: function mapMaskdigitPositions(newVal, maskDigitPosArr, valLen) {
						var maskDiff = options.reverse ? newVal.length - valLen : 0;
						p.maskDigitPosMap = {};
						for (var i = 0; i < maskDigitPosArr.length; i++) {
							p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
						}
					},
					callbacks: function callbacks(e) {
						var val = p.val(),
						    changed = val !== oldValue,
						    defaultArgs = [val, e, el, options],
						    callback = function callback(name, criteria, args) {
							if (typeof options[name] === 'function' && criteria) {
								options[name].apply(this, args);
							}
						};

						callback('onChange', changed === true, defaultArgs);
						callback('onKeyPress', changed === true, defaultArgs);
						callback('onComplete', val.length === mask.length, defaultArgs);
						callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
					}
				};

				el = $(el);
				var jMask = this,
				    oldValue = p.val(),
				    regexMask;

				mask = typeof mask === 'function' ? mask(p.val(), undefined, el, options) : mask;

				// public methods
				jMask.mask = mask;
				jMask.options = options;
				jMask.remove = function () {
					var caret = p.getCaret();
					if (jMask.options.placeholder) {
						el.removeAttr('placeholder');
					}
					if (el.data('mask-maxlength')) {
						el.removeAttr('maxlength');
					}
					p.destroyEvents();
					p.val(jMask.getCleanVal());
					p.setCaret(caret);
					return el;
				};

				// get value without mask
				jMask.getCleanVal = function () {
					return p.getMasked(true);
				};

				// get masked value without the value being in the input or element
				jMask.getMaskedVal = function (val) {
					return p.getMasked(false, val);
				};

				jMask.init = function (onlyMask) {
					onlyMask = onlyMask || false;
					options = options || {};

					jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
					jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
					jMask.translation = $.extend({}, $.jMaskGlobals.translation, options.translation);

					jMask = $.extend(true, {}, jMask, options);

					regexMask = p.getRegexMask();

					if (onlyMask) {
						p.events();
						p.val(p.getMasked());
					} else {
						if (options.placeholder) {
							el.attr('placeholder', options.placeholder);
						}

						// this is necessary, otherwise if the user submit the form
						// and then press the "back" button, the autocomplete will erase
						// the data. Works fine on IE9+, FF, Opera, Safari.
						if (el.data('mask')) {
							el.attr('autocomplete', 'off');
						}

						// detect if is necessary let the user type freely.
						// for is a lot faster than forEach.
						for (var i = 0, maxlength = true; i < mask.length; i++) {
							var translation = jMask.translation[mask.charAt(i)];
							if (translation && translation.recursive) {
								maxlength = false;
								break;
							}
						}

						if (maxlength) {
							el.attr('maxlength', mask.length).data('mask-maxlength', true);
						}

						p.destroyEvents();
						p.events();

						var caret = p.getCaret();
						p.val(p.getMasked());
						p.setCaret(caret);
					}
				};

				jMask.init(!el.is('input'));
			};

			$.maskWatchers = {};
			var HTMLAttributes = function HTMLAttributes() {
				var input = $(this),
				    options = {},
				    prefix = 'data-mask-',
				    mask = input.attr('data-mask');

				if (input.attr(prefix + 'reverse')) {
					options.reverse = true;
				}

				if (input.attr(prefix + 'clearifnotmatch')) {
					options.clearIfNotMatch = true;
				}

				if (input.attr(prefix + 'selectonfocus') === 'true') {
					options.selectOnFocus = true;
				}

				if (notSameMaskObject(input, mask, options)) {
					return input.data('mask', new Mask(this, mask, options));
				}
			},
			    notSameMaskObject = function notSameMaskObject(field, mask, options) {
				options = options || {};
				var maskObject = $(field).data('mask'),
				    stringify = JSON.stringify,
				    value = $(field).val() || $(field).text();
				try {
					if (typeof mask === 'function') {
						mask = mask(value);
					}
					return (typeof maskObject === 'undefined' ? 'undefined' : _typeof(maskObject)) !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
				} catch (e) {}
			},
			    eventSupported = function eventSupported(eventName) {
				var el = document.createElement('div'),
				    isSupported;

				eventName = 'on' + eventName;
				isSupported = eventName in el;

				if (!isSupported) {
					el.setAttribute(eventName, 'return;');
					isSupported = typeof el[eventName] === 'function';
				}
				el = null;

				return isSupported;
			};

			$.fn.mask = function (mask, options) {
				options = options || {};
				var selector = this.selector,
				    globals = $.jMaskGlobals,
				    interval = globals.watchInterval,
				    watchInputs = options.watchInputs || globals.watchInputs,
				    maskFunction = function maskFunction() {
					if (notSameMaskObject(this, mask, options)) {
						return $(this).data('mask', new Mask(this, mask, options));
					}
				};

				$(this).each(maskFunction);

				if (selector && selector !== '' && watchInputs) {
					clearInterval($.maskWatchers[selector]);
					$.maskWatchers[selector] = setInterval(function () {
						$(document).find(selector).each(maskFunction);
					}, interval);
				}
				return this;
			};

			$.fn.masked = function (val) {
				return this.data('mask').getMaskedVal(val);
			};

			$.fn.unmask = function () {
				clearInterval($.maskWatchers[this.selector]);
				delete $.maskWatchers[this.selector];
				return this.each(function () {
					var dataMask = $(this).data('mask');
					if (dataMask) {
						dataMask.remove().removeData('mask');
					}
				});
			};

			$.fn.cleanVal = function () {
				return this.data('mask').getCleanVal();
			};

			$.applyDataMask = function (selector) {
				selector = selector || $.jMaskGlobals.maskElements;
				var $selector = selector instanceof $ ? selector : $(selector);
				$selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
			};

			var globals = {
				maskElements: 'input,td,span,div',
				dataMaskAttr: '*[data-mask]',
				dataMask: true,
				watchInterval: 300,
				watchInputs: true,
				keyStrokeCompensation: 10,
				// old versions of chrome dont work great with input event
				useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
				watchDataMask: false,
				byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
				translation: {
					'0': { pattern: /\d/ },
					'9': { pattern: /\d/, optional: true },
					'#': { pattern: /\d/, recursive: true },
					'A': { pattern: /[a-zA-Z0-9]/ },
					'S': { pattern: /[a-zA-Z]/ }
				}
			};

			$.jMaskGlobals = $.jMaskGlobals || {};
			globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

			// looking for inputs with data-mask attribute
			if (globals.dataMask) {
				$.applyDataMask();
			}

			setInterval(function () {
				if ($.jMaskGlobals.watchDataMask) {
					$.applyDataMask();
				}
			}, globals.watchInterval);
		}, window.jQuery, window.Zepto);

		/***/
	},

	/***/"./node_modules/jquery-modal/jquery.modal.js":
	/*!***************************************************!*\
   !*** ./node_modules/jquery-modal/jquery.modal.js ***!
   \***************************************************/
	/*! no static exports found */
	/***/function node_modulesJqueryModalJqueryModalJs(module, exports, __webpack_require__) {

		/*
      A simple jQuery modal (http://github.com/kylefox/jquery-modal)
      Version 0.9.1
  */

		(function (factory) {
			// Making your jQuery plugin work better with npm tools
			// http://blog.npmjs.org/post/112712169830/making-your-jquery-plugin-work-better-with-npm
			if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
				factory(__webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js"), window, document);
			} else {
				factory(jQuery, window, document);
			}
		})(function ($, window, document, undefined) {

			var modals = [],
			    getCurrent = function getCurrent() {
				return modals.length ? modals[modals.length - 1] : null;
			},
			    selectCurrent = function selectCurrent() {
				var i,
				    selected = false;
				for (i = modals.length - 1; i >= 0; i--) {
					if (modals[i].$blocker) {
						modals[i].$blocker.toggleClass('current', !selected).toggleClass('behind', selected);
						selected = true;
					}
				}
			};

			$.modal = function (el, options) {
				var remove, target;
				this.$body = $('body');
				this.options = $.extend({}, $.modal.defaults, options);
				this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
				this.$blocker = null;
				if (this.options.closeExisting) while ($.modal.isActive()) {
					$.modal.close();
				} // Close any open modals.
				modals.push(this);
				if (el.is('a')) {
					target = el.attr('href');
					this.anchor = el;
					//Select element by id from href
					if (/^#/.test(target)) {
						this.$elm = $(target);
						if (this.$elm.length !== 1) return null;
						this.$body.append(this.$elm);
						this.open();
						//AJAX
					} else {
						this.$elm = $('<div>');
						this.$body.append(this.$elm);
						remove = function remove(event, modal) {
							modal.elm.remove();
						};
						this.showSpinner();
						el.trigger($.modal.AJAX_SEND);
						$.get(target).done(function (html) {
							if (!$.modal.isActive()) return;
							el.trigger($.modal.AJAX_SUCCESS);
							var current = getCurrent();
							current.$elm.empty().append(html).on($.modal.CLOSE, remove);
							current.hideSpinner();
							current.open();
							el.trigger($.modal.AJAX_COMPLETE);
						}).fail(function () {
							el.trigger($.modal.AJAX_FAIL);
							var current = getCurrent();
							current.hideSpinner();
							modals.pop(); // remove expected modal from the list
							el.trigger($.modal.AJAX_COMPLETE);
						});
					}
				} else {
					this.$elm = el;
					this.anchor = el;
					this.$body.append(this.$elm);
					this.open();
				}
			};

			$.modal.prototype = {
				constructor: $.modal,

				open: function open() {
					var m = this;
					this.block();
					this.anchor.blur();
					if (this.options.doFade) {
						setTimeout(function () {
							m.show();
						}, this.options.fadeDuration * this.options.fadeDelay);
					} else {
						this.show();
					}
					$(document).off('keydown.modal').on('keydown.modal', function (event) {
						var current = getCurrent();
						if (event.which === 27 && current.options.escapeClose) current.close();
					});
					if (this.options.clickClose) this.$blocker.click(function (e) {
						if (e.target === this) $.modal.close();
					});
				},

				close: function close() {
					modals.pop();
					this.unblock();
					this.hide();
					if (!$.modal.isActive()) $(document).off('keydown.modal');
				},

				block: function block() {
					this.$elm.trigger($.modal.BEFORE_BLOCK, [this._ctx()]);
					this.$body.css('overflow', 'hidden');
					this.$blocker = $('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body);
					selectCurrent();
					if (this.options.doFade) {
						this.$blocker.css('opacity', 0).animate({ opacity: 1 }, this.options.fadeDuration);
					}
					this.$elm.trigger($.modal.BLOCK, [this._ctx()]);
				},

				unblock: function unblock(now) {
					if (!now && this.options.doFade) this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, true));else {
						this.$blocker.children().appendTo(this.$body);
						this.$blocker.remove();
						this.$blocker = null;
						selectCurrent();
						if (!$.modal.isActive()) this.$body.css('overflow', '');
					}
				},

				show: function show() {
					this.$elm.trigger($.modal.BEFORE_OPEN, [this._ctx()]);
					if (this.options.showClose) {
						this.closeButton = $('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
						this.$elm.append(this.closeButton);
					}
					this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker);
					if (this.options.doFade) {
						this.$elm.css({ opacity: 0, display: 'inline-block' }).animate({ opacity: 1 }, this.options.fadeDuration);
					} else {
						this.$elm.css('display', 'inline-block');
					}
					this.$elm.trigger($.modal.OPEN, [this._ctx()]);
				},

				hide: function hide() {
					this.$elm.trigger($.modal.BEFORE_CLOSE, [this._ctx()]);
					if (this.closeButton) this.closeButton.remove();
					var _this = this;
					if (this.options.doFade) {
						this.$elm.fadeOut(this.options.fadeDuration, function () {
							_this.$elm.trigger($.modal.AFTER_CLOSE, [_this._ctx()]);
						});
					} else {
						this.$elm.hide(0, function () {
							_this.$elm.trigger($.modal.AFTER_CLOSE, [_this._ctx()]);
						});
					}
					this.$elm.trigger($.modal.CLOSE, [this._ctx()]);
				},

				showSpinner: function showSpinner() {
					if (!this.options.showSpinner) return;
					this.spinner = this.spinner || $('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml);
					this.$body.append(this.spinner);
					this.spinner.show();
				},

				hideSpinner: function hideSpinner() {
					if (this.spinner) this.spinner.remove();
				},

				//Return context for custom events
				_ctx: function _ctx() {
					return { elm: this.$elm, $elm: this.$elm, $blocker: this.$blocker, options: this.options };
				}
			};

			$.modal.close = function (event) {
				if (!$.modal.isActive()) return;
				if (event) event.preventDefault();
				var current = getCurrent();
				current.close();
				return current.$elm;
			};

			// Returns if there currently is an active modal
			$.modal.isActive = function () {
				return modals.length > 0;
			};

			$.modal.getCurrent = getCurrent;

			$.modal.defaults = {
				closeExisting: true,
				escapeClose: true,
				clickClose: true,
				closeText: 'Close',
				closeClass: '',
				modalClass: "modal",
				blockerClass: "jquery-modal",
				spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
				showSpinner: true,
				showClose: true,
				fadeDuration: null, // Number of milliseconds the fade animation takes.
				fadeDelay: 1.0 // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
			};

			// Event constants
			$.modal.BEFORE_BLOCK = 'modal:before-block';
			$.modal.BLOCK = 'modal:block';
			$.modal.BEFORE_OPEN = 'modal:before-open';
			$.modal.OPEN = 'modal:open';
			$.modal.BEFORE_CLOSE = 'modal:before-close';
			$.modal.CLOSE = 'modal:close';
			$.modal.AFTER_CLOSE = 'modal:after-close';
			$.modal.AJAX_SEND = 'modal:ajax:send';
			$.modal.AJAX_SUCCESS = 'modal:ajax:success';
			$.modal.AJAX_FAIL = 'modal:ajax:fail';
			$.modal.AJAX_COMPLETE = 'modal:ajax:complete';

			$.fn.modal = function (options) {
				if (this.length === 1) {
					new $.modal(this, options);
				}
				return this;
			};

			// Automatically bind links with rel="modal:close" to, well, close the modal.
			$(document).on('click.modal', 'a[rel~="modal:close"]', $.modal.close);
			$(document).on('click.modal', 'a[rel~="modal:open"]', function (event) {
				event.preventDefault();
				$(this).modal();
			});
		});

		/***/
	},

	/***/"./node_modules/jquery-validation/dist/jquery.validate.js":
	/*!****************************************************************!*\
   !*** ./node_modules/jquery-validation/dist/jquery.validate.js ***!
   \****************************************************************/
	/*! no static exports found */
	/***/function node_modulesJqueryValidationDistJqueryValidateJs(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                                                   * jQuery Validation Plugin v1.18.0
                                                                                                   *
                                                                                                   * https://jqueryvalidation.org/
                                                                                                   *
                                                                                                   * Copyright (c) 2018 Jörn Zaefferer
                                                                                                   * Released under the MIT license
                                                                                                   */
		(function (factory) {
			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {}
		})(function ($) {

			$.extend($.fn, {

				// https://jqueryvalidation.org/validate/
				validate: function validate(options) {

					// If nothing is selected, return nothing; can't chain anyway
					if (!this.length) {
						if (options && options.debug && window.console) {
							console.warn("Nothing selected, can't validate, returning nothing.");
						}
						return;
					}

					// Check if a validator for this form was already created
					var validator = $.data(this[0], "validator");
					if (validator) {
						return validator;
					}

					// Add novalidate tag if HTML5.
					this.attr("novalidate", "novalidate");

					validator = new $.validator(options, this[0]);
					$.data(this[0], "validator", validator);

					if (validator.settings.onsubmit) {

						this.on("click.validate", ":submit", function (event) {

							// Track the used submit button to properly handle scripted
							// submits later.
							validator.submitButton = event.currentTarget;

							// Allow suppressing validation by adding a cancel class to the submit button
							if ($(this).hasClass("cancel")) {
								validator.cancelSubmit = true;
							}

							// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
							if ($(this).attr("formnovalidate") !== undefined) {
								validator.cancelSubmit = true;
							}
						});

						// Validate the form on submit
						this.on("submit.validate", function (event) {
							if (validator.settings.debug) {

								// Prevent form submit to be able to see console output
								event.preventDefault();
							}

							function handle() {
								var hidden, result;

								// Insert a hidden input as a replacement for the missing submit button
								// The hidden input is inserted in two cases:
								//   - A user defined a `submitHandler`
								//   - There was a pending request due to `remote` method and `stopRequest()`
								//     was called to submit the form in case it's valid
								if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
									hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
								}

								if (validator.settings.submitHandler && !validator.settings.debug) {
									result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
									if (hidden) {

										// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
										hidden.remove();
									}
									if (result !== undefined) {
										return result;
									}
									return false;
								}
								return true;
							}

							// Prevent submit for invalid forms or custom submit handlers
							if (validator.cancelSubmit) {
								validator.cancelSubmit = false;
								return handle();
							}
							if (validator.form()) {
								if (validator.pendingRequest) {
									validator.formSubmitted = true;
									return false;
								}
								return handle();
							} else {
								validator.focusInvalid();
								return false;
							}
						});
					}

					return validator;
				},

				// https://jqueryvalidation.org/valid/
				valid: function valid() {
					var valid, validator, errorList;

					if ($(this[0]).is("form")) {
						valid = this.validate().form();
					} else {
						errorList = [];
						valid = true;
						validator = $(this[0].form).validate();
						this.each(function () {
							valid = validator.element(this) && valid;
							if (!valid) {
								errorList = errorList.concat(validator.errorList);
							}
						});
						validator.errorList = errorList;
					}
					return valid;
				},

				// https://jqueryvalidation.org/rules/
				rules: function rules(command, argument) {
					var element = this[0],
					    settings,
					    staticRules,
					    existingRules,
					    data,
					    param,
					    filtered;

					// If nothing is selected, return empty object; can't chain anyway
					if (element == null) {
						return;
					}

					if (!element.form && element.isContentEditable) {
						element.form = this.closest("form")[0];
						element.name = this.attr("name");
					}

					if (element.form == null) {
						return;
					}

					if (command) {
						settings = $.data(element.form, "validator").settings;
						staticRules = settings.rules;
						existingRules = $.validator.staticRules(element);
						switch (command) {
							case "add":
								$.extend(existingRules, $.validator.normalizeRule(argument));

								// Remove messages from rules, but allow them to be set separately
								delete existingRules.messages;
								staticRules[element.name] = existingRules;
								if (argument.messages) {
									settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
								}
								break;
							case "remove":
								if (!argument) {
									delete staticRules[element.name];
									return existingRules;
								}
								filtered = {};
								$.each(argument.split(/\s/), function (index, method) {
									filtered[method] = existingRules[method];
									delete existingRules[method];
								});
								return filtered;
						}
					}

					data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);

					// Make sure required is at front
					if (data.required) {
						param = data.required;
						delete data.required;
						data = $.extend({ required: param }, data);
					}

					// Make sure remote is at back
					if (data.remote) {
						param = data.remote;
						delete data.remote;
						data = $.extend(data, { remote: param });
					}

					return data;
				}
			});

			// Custom selectors
			$.extend($.expr.pseudos || $.expr[":"], { // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

				// https://jqueryvalidation.org/blank-selector/
				blank: function blank(a) {
					return !$.trim("" + $(a).val());
				},

				// https://jqueryvalidation.org/filled-selector/
				filled: function filled(a) {
					var val = $(a).val();
					return val !== null && !!$.trim("" + val);
				},

				// https://jqueryvalidation.org/unchecked-selector/
				unchecked: function unchecked(a) {
					return !$(a).prop("checked");
				}
			});

			// Constructor for validator
			$.validator = function (options, form) {
				this.settings = $.extend(true, {}, $.validator.defaults, options);
				this.currentForm = form;
				this.init();
			};

			// https://jqueryvalidation.org/jQuery.validator.format/
			$.validator.format = function (source, params) {
				if (arguments.length === 1) {
					return function () {
						var args = $.makeArray(arguments);
						args.unshift(source);
						return $.validator.format.apply(this, args);
					};
				}
				if (params === undefined) {
					return source;
				}
				if (arguments.length > 2 && params.constructor !== Array) {
					params = $.makeArray(arguments).slice(1);
				}
				if (params.constructor !== Array) {
					params = [params];
				}
				$.each(params, function (i, n) {
					source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
						return n;
					});
				});
				return source;
			};

			$.extend($.validator, {

				defaults: {
					messages: {},
					groups: {},
					rules: {},
					errorClass: "error",
					pendingClass: "pending",
					validClass: "valid",
					errorElement: "label",
					focusCleanup: false,
					focusInvalid: true,
					errorContainer: $([]),
					errorLabelContainer: $([]),
					onsubmit: true,
					ignore: ":hidden",
					ignoreTitle: false,
					onfocusin: function onfocusin(element) {
						this.lastActive = element;

						// Hide error label and remove error class on focus if enabled
						if (this.settings.focusCleanup) {
							if (this.settings.unhighlight) {
								this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
							}
							this.hideThese(this.errorsFor(element));
						}
					},
					onfocusout: function onfocusout(element) {
						if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
							this.element(element);
						}
					},
					onkeyup: function onkeyup(element, event) {

						// Avoid revalidate the field when pressing one of the following keys
						// Shift       => 16
						// Ctrl        => 17
						// Alt         => 18
						// Caps lock   => 20
						// End         => 35
						// Home        => 36
						// Left arrow  => 37
						// Up arrow    => 38
						// Right arrow => 39
						// Down arrow  => 40
						// Insert      => 45
						// Num lock    => 144
						// AltGr key   => 225
						var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];

						if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
							return;
						} else if (element.name in this.submitted || element.name in this.invalid) {
							this.element(element);
						}
					},
					onclick: function onclick(element) {

						// Click on selects, radiobuttons and checkboxes
						if (element.name in this.submitted) {
							this.element(element);

							// Or option elements, check parent select in that case
						} else if (element.parentNode.name in this.submitted) {
							this.element(element.parentNode);
						}
					},
					highlight: function highlight(element, errorClass, validClass) {
						if (element.type === "radio") {
							this.findByName(element.name).addClass(errorClass).removeClass(validClass);
						} else {
							$(element).addClass(errorClass).removeClass(validClass);
						}
					},
					unhighlight: function unhighlight(element, errorClass, validClass) {
						if (element.type === "radio") {
							this.findByName(element.name).removeClass(errorClass).addClass(validClass);
						} else {
							$(element).removeClass(errorClass).addClass(validClass);
						}
					}
				},

				// https://jqueryvalidation.org/jQuery.validator.setDefaults/
				setDefaults: function setDefaults(settings) {
					$.extend($.validator.defaults, settings);
				},

				messages: {
					required: "This field is required.",
					remote: "Please fix this field.",
					email: "Please enter a valid email address.",
					url: "Please enter a valid URL.",
					date: "Please enter a valid date.",
					dateISO: "Please enter a valid date (ISO).",
					number: "Please enter a valid number.",
					digits: "Please enter only digits.",
					equalTo: "Please enter the same value again.",
					maxlength: $.validator.format("Please enter no more than {0} characters."),
					minlength: $.validator.format("Please enter at least {0} characters."),
					rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
					range: $.validator.format("Please enter a value between {0} and {1}."),
					max: $.validator.format("Please enter a value less than or equal to {0}."),
					min: $.validator.format("Please enter a value greater than or equal to {0}."),
					step: $.validator.format("Please enter a multiple of {0}.")
				},

				autoCreateRanges: false,

				prototype: {

					init: function init() {
						this.labelContainer = $(this.settings.errorLabelContainer);
						this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
						this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
						this.submitted = {};
						this.valueCache = {};
						this.pendingRequest = 0;
						this.pending = {};
						this.invalid = {};
						this.reset();

						var currentForm = this.currentForm,
						    groups = this.groups = {},
						    rules;
						$.each(this.settings.groups, function (key, value) {
							if (typeof value === "string") {
								value = value.split(/\s/);
							}
							$.each(value, function (index, name) {
								groups[name] = key;
							});
						});
						rules = this.settings.rules;
						$.each(rules, function (key, value) {
							rules[key] = $.validator.normalizeRule(value);
						});

						function delegate(event) {

							// Set form expando on contenteditable
							if (!this.form && this.isContentEditable) {
								this.form = $(this).closest("form")[0];
								this.name = $(this).attr("name");
							}

							// Ignore the element if it belongs to another form. This will happen mainly
							// when setting the `form` attribute of an input to the id of another form.
							if (currentForm !== this.form) {
								return;
							}

							var validator = $.data(this.form, "validator"),
							    eventType = "on" + event.type.replace(/^validate/, ""),
							    settings = validator.settings;
							if (settings[eventType] && !$(this).is(settings.ignore)) {
								settings[eventType].call(validator, this, event);
							}
						}

						$(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate)

						// Support: Chrome, oldIE
						// "select" is provided as event.target when clicking a option
						.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

						if (this.settings.invalidHandler) {
							$(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
						}
					},

					// https://jqueryvalidation.org/Validator.form/
					form: function form() {
						this.checkForm();
						$.extend(this.submitted, this.errorMap);
						this.invalid = $.extend({}, this.errorMap);
						if (!this.valid()) {
							$(this.currentForm).triggerHandler("invalid-form", [this]);
						}
						this.showErrors();
						return this.valid();
					},

					checkForm: function checkForm() {
						this.prepareForm();
						for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
							this.check(elements[i]);
						}
						return this.valid();
					},

					// https://jqueryvalidation.org/Validator.element/
					element: function element(_element) {
						var cleanElement = this.clean(_element),
						    checkElement = this.validationTargetFor(cleanElement),
						    v = this,
						    result = true,
						    rs,
						    group;

						if (checkElement === undefined) {
							delete this.invalid[cleanElement.name];
						} else {
							this.prepareElement(checkElement);
							this.currentElements = $(checkElement);

							// If this element is grouped, then validate all group elements already
							// containing a value
							group = this.groups[checkElement.name];
							if (group) {
								$.each(this.groups, function (name, testgroup) {
									if (testgroup === group && name !== checkElement.name) {
										cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
										if (cleanElement && cleanElement.name in v.invalid) {
											v.currentElements.push(cleanElement);
											result = v.check(cleanElement) && result;
										}
									}
								});
							}

							rs = this.check(checkElement) !== false;
							result = result && rs;
							if (rs) {
								this.invalid[checkElement.name] = false;
							} else {
								this.invalid[checkElement.name] = true;
							}

							if (!this.numberOfInvalids()) {

								// Hide error containers on last error
								this.toHide = this.toHide.add(this.containers);
							}
							this.showErrors();

							// Add aria-invalid status for screen readers
							$(_element).attr("aria-invalid", !rs);
						}

						return result;
					},

					// https://jqueryvalidation.org/Validator.showErrors/
					showErrors: function showErrors(errors) {
						if (errors) {
							var validator = this;

							// Add items to error list and map
							$.extend(this.errorMap, errors);
							this.errorList = $.map(this.errorMap, function (message, name) {
								return {
									message: message,
									element: validator.findByName(name)[0]
								};
							});

							// Remove items from success list
							this.successList = $.grep(this.successList, function (element) {
								return !(element.name in errors);
							});
						}
						if (this.settings.showErrors) {
							this.settings.showErrors.call(this, this.errorMap, this.errorList);
						} else {
							this.defaultShowErrors();
						}
					},

					// https://jqueryvalidation.org/Validator.resetForm/
					resetForm: function resetForm() {
						if ($.fn.resetForm) {
							$(this.currentForm).resetForm();
						}
						this.invalid = {};
						this.submitted = {};
						this.prepareForm();
						this.hideErrors();
						var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");

						this.resetElements(elements);
					},

					resetElements: function resetElements(elements) {
						var i;

						if (this.settings.unhighlight) {
							for (i = 0; elements[i]; i++) {
								this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
								this.findByName(elements[i].name).removeClass(this.settings.validClass);
							}
						} else {
							elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
						}
					},

					numberOfInvalids: function numberOfInvalids() {
						return this.objectLength(this.invalid);
					},

					objectLength: function objectLength(obj) {
						/* jshint unused: false */
						var count = 0,
						    i;
						for (i in obj) {

							// This check allows counting elements with empty error
							// message as invalid elements
							if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
								count++;
							}
						}
						return count;
					},

					hideErrors: function hideErrors() {
						this.hideThese(this.toHide);
					},

					hideThese: function hideThese(errors) {
						errors.not(this.containers).text("");
						this.addWrapper(errors).hide();
					},

					valid: function valid() {
						return this.size() === 0;
					},

					size: function size() {
						return this.errorList.length;
					},

					focusInvalid: function focusInvalid() {
						if (this.settings.focusInvalid) {
							try {
								$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus()

								// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
								.trigger("focusin");
							} catch (e) {

								// Ignore IE throwing errors when focusing hidden elements
							}
						}
					},

					findLastActive: function findLastActive() {
						var lastActive = this.lastActive;
						return lastActive && $.grep(this.errorList, function (n) {
							return n.element.name === lastActive.name;
						}).length === 1 && lastActive;
					},

					elements: function elements() {
						var validator = this,
						    rulesCache = {};

						// Select all valid inputs inside the form (no submit or reset buttons)
						return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
							var name = this.name || $(this).attr("name"); // For contenteditable
							if (!name && validator.settings.debug && window.console) {
								console.error("%o has no name assigned", this);
							}

							// Set form expando on contenteditable
							if (this.isContentEditable) {
								this.form = $(this).closest("form")[0];
								this.name = name;
							}

							// Ignore elements that belong to other/nested forms
							if (this.form !== validator.currentForm) {
								return false;
							}

							// Select only the first element for each name, and only those with rules specified
							if (name in rulesCache || !validator.objectLength($(this).rules())) {
								return false;
							}

							rulesCache[name] = true;
							return true;
						});
					},

					clean: function clean(selector) {
						return $(selector)[0];
					},

					errors: function errors() {
						var errorClass = this.settings.errorClass.split(" ").join(".");
						return $(this.settings.errorElement + "." + errorClass, this.errorContext);
					},

					resetInternals: function resetInternals() {
						this.successList = [];
						this.errorList = [];
						this.errorMap = {};
						this.toShow = $([]);
						this.toHide = $([]);
					},

					reset: function reset() {
						this.resetInternals();
						this.currentElements = $([]);
					},

					prepareForm: function prepareForm() {
						this.reset();
						this.toHide = this.errors().add(this.containers);
					},

					prepareElement: function prepareElement(element) {
						this.reset();
						this.toHide = this.errorsFor(element);
					},

					elementValue: function elementValue(element) {
						var $element = $(element),
						    type = element.type,
						    val,
						    idx;

						if (type === "radio" || type === "checkbox") {
							return this.findByName(element.name).filter(":checked").val();
						} else if (type === "number" && typeof element.validity !== "undefined") {
							return element.validity.badInput ? "NaN" : $element.val();
						}

						if (element.isContentEditable) {
							val = $element.text();
						} else {
							val = $element.val();
						}

						if (type === "file") {

							// Modern browser (chrome & safari)
							if (val.substr(0, 12) === "C:\\fakepath\\") {
								return val.substr(12);
							}

							// Legacy browsers
							// Unix-based path
							idx = val.lastIndexOf("/");
							if (idx >= 0) {
								return val.substr(idx + 1);
							}

							// Windows-based path
							idx = val.lastIndexOf("\\");
							if (idx >= 0) {
								return val.substr(idx + 1);
							}

							// Just the file name
							return val;
						}

						if (typeof val === "string") {
							return val.replace(/\r/g, "");
						}
						return val;
					},

					check: function check(element) {
						element = this.validationTargetFor(this.clean(element));

						var rules = $(element).rules(),
						    rulesCount = $.map(rules, function (n, i) {
							return i;
						}).length,
						    dependencyMismatch = false,
						    val = this.elementValue(element),
						    result,
						    method,
						    rule,
						    normalizer;

						// Prioritize the local normalizer defined for this element over the global one
						// if the former exists, otherwise user the global one in case it exists.
						if (typeof rules.normalizer === "function") {
							normalizer = rules.normalizer;
						} else if (typeof this.settings.normalizer === "function") {
							normalizer = this.settings.normalizer;
						}

						// If normalizer is defined, then call it to retreive the changed value instead
						// of using the real one.
						// Note that `this` in the normalizer is `element`.
						if (normalizer) {
							val = normalizer.call(element, val);

							// Delete the normalizer from rules to avoid treating it as a pre-defined method.
							delete rules.normalizer;
						}

						for (method in rules) {
							rule = { method: method, parameters: rules[method] };
							try {
								result = $.validator.methods[method].call(this, val, element, rule.parameters);

								// If a method indicates that the field is optional and therefore valid,
								// don't mark it as valid when there are no other rules
								if (result === "dependency-mismatch" && rulesCount === 1) {
									dependencyMismatch = true;
									continue;
								}
								dependencyMismatch = false;

								if (result === "pending") {
									this.toHide = this.toHide.not(this.errorsFor(element));
									return;
								}

								if (!result) {
									this.formatAndAdd(element, rule);
									return false;
								}
							} catch (e) {
								if (this.settings.debug && window.console) {
									console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
								}
								if (e instanceof TypeError) {
									e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
								}

								throw e;
							}
						}
						if (dependencyMismatch) {
							return;
						}
						if (this.objectLength(rules)) {
							this.successList.push(element);
						}
						return true;
					},

					// Return the custom message for the given element and validation method
					// specified in the element's HTML5 data attribute
					// return the generic message if present and no method specific message is present
					customDataMessage: function customDataMessage(element, method) {
						return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
					},

					// Return the custom message for the given element name and validation method
					customMessage: function customMessage(name, method) {
						var m = this.settings.messages[name];
						return m && (m.constructor === String ? m : m[method]);
					},

					// Return the first defined argument, allowing empty strings
					findDefined: function findDefined() {
						for (var i = 0; i < arguments.length; i++) {
							if (arguments[i] !== undefined) {
								return arguments[i];
							}
						}
						return undefined;
					},

					// The second parameter 'rule' used to be a string, and extended to an object literal
					// of the following form:
					// rule = {
					//     method: "method name",
					//     parameters: "the given method parameters"
					// }
					//
					// The old behavior still supported, kept to maintain backward compatibility with
					// old code, and will be removed in the next major release.
					defaultMessage: function defaultMessage(element, rule) {
						if (typeof rule === "string") {
							rule = { method: rule };
						}

						var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method),

						// 'title' is never undefined, so handle empty string as undefined
						!this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
						    theregex = /\$?\{(\d+)\}/g;
						if (typeof message === "function") {
							message = message.call(this, rule.parameters, element);
						} else if (theregex.test(message)) {
							message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
						}

						return message;
					},

					formatAndAdd: function formatAndAdd(element, rule) {
						var message = this.defaultMessage(element, rule);

						this.errorList.push({
							message: message,
							element: element,
							method: rule.method
						});

						this.errorMap[element.name] = message;
						this.submitted[element.name] = message;
					},

					addWrapper: function addWrapper(toToggle) {
						if (this.settings.wrapper) {
							toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
						}
						return toToggle;
					},

					defaultShowErrors: function defaultShowErrors() {
						var i, elements, error;
						for (i = 0; this.errorList[i]; i++) {
							error = this.errorList[i];
							if (this.settings.highlight) {
								this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
							}
							this.showLabel(error.element, error.message);
						}
						if (this.errorList.length) {
							this.toShow = this.toShow.add(this.containers);
						}
						if (this.settings.success) {
							for (i = 0; this.successList[i]; i++) {
								this.showLabel(this.successList[i]);
							}
						}
						if (this.settings.unhighlight) {
							for (i = 0, elements = this.validElements(); elements[i]; i++) {
								this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
							}
						}
						this.toHide = this.toHide.not(this.toShow);
						this.hideErrors();
						this.addWrapper(this.toShow).show();
					},

					validElements: function validElements() {
						return this.currentElements.not(this.invalidElements());
					},

					invalidElements: function invalidElements() {
						return $(this.errorList).map(function () {
							return this.element;
						});
					},

					showLabel: function showLabel(element, message) {
						var place,
						    group,
						    errorID,
						    v,
						    error = this.errorsFor(element),
						    elementID = this.idOrName(element),
						    describedBy = $(element).attr("aria-describedby");

						if (error.length) {

							// Refresh error/success class
							error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);

							// Replace message on existing label
							error.html(message);
						} else {

							// Create error element
							error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");

							// Maintain reference to the element to be placed into the DOM
							place = error;
							if (this.settings.wrapper) {

								// Make sure the element is visible, even in IE
								// actually showing the wrapped element is handled elsewhere
								place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
							}
							if (this.labelContainer.length) {
								this.labelContainer.append(place);
							} else if (this.settings.errorPlacement) {
								this.settings.errorPlacement.call(this, place, $(element));
							} else {
								place.insertAfter(element);
							}

							// Link error back to the element
							if (error.is("label")) {

								// If the error is a label, then associate using 'for'
								error.attr("for", elementID);

								// If the element is not a child of an associated label, then it's necessary
								// to explicitly apply aria-describedby
							} else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
								errorID = error.attr("id");

								// Respect existing non-error aria-describedby
								if (!describedBy) {
									describedBy = errorID;
								} else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {

									// Add to end of list if not already present
									describedBy += " " + errorID;
								}
								$(element).attr("aria-describedby", describedBy);

								// If this element is grouped, then assign to all elements in the same group
								group = this.groups[element.name];
								if (group) {
									v = this;
									$.each(v.groups, function (name, testgroup) {
										if (testgroup === group) {
											$("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
										}
									});
								}
							}
						}
						if (!message && this.settings.success) {
							error.text("");
							if (typeof this.settings.success === "string") {
								error.addClass(this.settings.success);
							} else {
								this.settings.success(error, element);
							}
						}
						this.toShow = this.toShow.add(error);
					},

					errorsFor: function errorsFor(element) {
						var name = this.escapeCssMeta(this.idOrName(element)),
						    describer = $(element).attr("aria-describedby"),
						    selector = "label[for='" + name + "'], label[for='" + name + "'] *";

						// 'aria-describedby' should directly reference the error element
						if (describer) {
							selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
						}

						return this.errors().filter(selector);
					},

					// See https://api.jquery.com/category/selectors/, for CSS
					// meta-characters that should be escaped in order to be used with JQuery
					// as a literal part of a name/id or any selector.
					escapeCssMeta: function escapeCssMeta(string) {
						return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
					},

					idOrName: function idOrName(element) {
						return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
					},

					validationTargetFor: function validationTargetFor(element) {

						// If radio/checkbox, validate first element in group instead
						if (this.checkable(element)) {
							element = this.findByName(element.name);
						}

						// Always apply ignore filter
						return $(element).not(this.settings.ignore)[0];
					},

					checkable: function checkable(element) {
						return (/radio|checkbox/i.test(element.type)
						);
					},

					findByName: function findByName(name) {
						return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
					},

					getLength: function getLength(value, element) {
						switch (element.nodeName.toLowerCase()) {
							case "select":
								return $("option:selected", element).length;
							case "input":
								if (this.checkable(element)) {
									return this.findByName(element.name).filter(":checked").length;
								}
						}
						return value.length;
					},

					depend: function depend(param, element) {
						return this.dependTypes[typeof param === 'undefined' ? 'undefined' : _typeof(param)] ? this.dependTypes[typeof param === 'undefined' ? 'undefined' : _typeof(param)](param, element) : true;
					},

					dependTypes: {
						"boolean": function boolean(param) {
							return param;
						},
						"string": function string(param, element) {
							return !!$(param, element.form).length;
						},
						"function": function _function(param, element) {
							return param(element);
						}
					},

					optional: function optional(element) {
						var val = this.elementValue(element);
						return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
					},

					startRequest: function startRequest(element) {
						if (!this.pending[element.name]) {
							this.pendingRequest++;
							$(element).addClass(this.settings.pendingClass);
							this.pending[element.name] = true;
						}
					},

					stopRequest: function stopRequest(element, valid) {
						this.pendingRequest--;

						// Sometimes synchronization fails, make sure pendingRequest is never < 0
						if (this.pendingRequest < 0) {
							this.pendingRequest = 0;
						}
						delete this.pending[element.name];
						$(element).removeClass(this.settings.pendingClass);
						if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
							$(this.currentForm).submit();

							// Remove the hidden input that was used as a replacement for the
							// missing submit button. The hidden input is added by `handle()`
							// to ensure that the value of the used submit button is passed on
							// for scripted submits triggered by this method
							if (this.submitButton) {
								$("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
							}

							this.formSubmitted = false;
						} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
							$(this.currentForm).triggerHandler("invalid-form", [this]);
							this.formSubmitted = false;
						}
					},

					previousValue: function previousValue(element, method) {
						method = typeof method === "string" && method || "remote";

						return $.data(element, "previousValue") || $.data(element, "previousValue", {
							old: null,
							valid: true,
							message: this.defaultMessage(element, { method: method })
						});
					},

					// Cleans up all forms and elements, removes validator-specific events
					destroy: function destroy() {
						this.resetForm();

						$(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
					}

				},

				classRuleSettings: {
					required: { required: true },
					email: { email: true },
					url: { url: true },
					date: { date: true },
					dateISO: { dateISO: true },
					number: { number: true },
					digits: { digits: true },
					creditcard: { creditcard: true }
				},

				addClassRules: function addClassRules(className, rules) {
					if (className.constructor === String) {
						this.classRuleSettings[className] = rules;
					} else {
						$.extend(this.classRuleSettings, className);
					}
				},

				classRules: function classRules(element) {
					var rules = {},
					    classes = $(element).attr("class");

					if (classes) {
						$.each(classes.split(" "), function () {
							if (this in $.validator.classRuleSettings) {
								$.extend(rules, $.validator.classRuleSettings[this]);
							}
						});
					}
					return rules;
				},

				normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {

					// Convert the value to a number for number inputs, and for text for backwards compability
					// allows type="date" and others to be compared as strings
					if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
						value = Number(value);

						// Support Opera Mini, which returns NaN for undefined minlength
						if (isNaN(value)) {
							value = undefined;
						}
					}

					if (value || value === 0) {
						rules[method] = value;
					} else if (type === method && type !== "range") {

						// Exception: the jquery validate 'range' method
						// does not test for the html5 'range' type
						rules[method] = true;
					}
				},

				attributeRules: function attributeRules(element) {
					var rules = {},
					    $element = $(element),
					    type = element.getAttribute("type"),
					    method,
					    value;

					for (method in $.validator.methods) {

						// Support for <input required> in both html5 and older browsers
						if (method === "required") {
							value = element.getAttribute(method);

							// Some browsers return an empty string for the required attribute
							// and non-HTML5 browsers might have required="" markup
							if (value === "") {
								value = true;
							}

							// Force non-HTML5 browsers to return bool
							value = !!value;
						} else {
							value = $element.attr(method);
						}

						this.normalizeAttributeRule(rules, type, method, value);
					}

					// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
					if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
						delete rules.maxlength;
					}

					return rules;
				},

				dataRules: function dataRules(element) {
					var rules = {},
					    $element = $(element),
					    type = element.getAttribute("type"),
					    method,
					    value;

					for (method in $.validator.methods) {
						value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());

						// Cast empty attributes like `data-rule-required` to `true`
						if (value === "") {
							value = true;
						}

						this.normalizeAttributeRule(rules, type, method, value);
					}
					return rules;
				},

				staticRules: function staticRules(element) {
					var rules = {},
					    validator = $.data(element.form, "validator");

					if (validator.settings.rules) {
						rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
					}
					return rules;
				},

				normalizeRules: function normalizeRules(rules, element) {

					// Handle dependency check
					$.each(rules, function (prop, val) {

						// Ignore rule when param is explicitly false, eg. required:false
						if (val === false) {
							delete rules[prop];
							return;
						}
						if (val.param || val.depends) {
							var keepRule = true;
							switch (_typeof(val.depends)) {
								case "string":
									keepRule = !!$(val.depends, element.form).length;
									break;
								case "function":
									keepRule = val.depends.call(element, element);
									break;
							}
							if (keepRule) {
								rules[prop] = val.param !== undefined ? val.param : true;
							} else {
								$.data(element.form, "validator").resetElements($(element));
								delete rules[prop];
							}
						}
					});

					// Evaluate parameters
					$.each(rules, function (rule, parameter) {
						rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
					});

					// Clean number parameters
					$.each(["minlength", "maxlength"], function () {
						if (rules[this]) {
							rules[this] = Number(rules[this]);
						}
					});
					$.each(["rangelength", "range"], function () {
						var parts;
						if (rules[this]) {
							if ($.isArray(rules[this])) {
								rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
							} else if (typeof rules[this] === "string") {
								parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
								rules[this] = [Number(parts[0]), Number(parts[1])];
							}
						}
					});

					if ($.validator.autoCreateRanges) {

						// Auto-create ranges
						if (rules.min != null && rules.max != null) {
							rules.range = [rules.min, rules.max];
							delete rules.min;
							delete rules.max;
						}
						if (rules.minlength != null && rules.maxlength != null) {
							rules.rangelength = [rules.minlength, rules.maxlength];
							delete rules.minlength;
							delete rules.maxlength;
						}
					}

					return rules;
				},

				// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
				normalizeRule: function normalizeRule(data) {
					if (typeof data === "string") {
						var transformed = {};
						$.each(data.split(/\s/), function () {
							transformed[this] = true;
						});
						data = transformed;
					}
					return data;
				},

				// https://jqueryvalidation.org/jQuery.validator.addMethod/
				addMethod: function addMethod(name, method, message) {
					$.validator.methods[name] = method;
					$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
					if (method.length < 3) {
						$.validator.addClassRules(name, $.validator.normalizeRule(name));
					}
				},

				// https://jqueryvalidation.org/jQuery.validator.methods/
				methods: {

					// https://jqueryvalidation.org/required-method/
					required: function required(value, element, param) {

						// Check if dependency is met
						if (!this.depend(param, element)) {
							return "dependency-mismatch";
						}
						if (element.nodeName.toLowerCase() === "select") {

							// Could be an array for select-multiple or a string, both are fine this way
							var val = $(element).val();
							return val && val.length > 0;
						}
						if (this.checkable(element)) {
							return this.getLength(value, element) > 0;
						}
						return value !== undefined && value !== null && value.length > 0;
					},

					// https://jqueryvalidation.org/email-method/
					email: function email(value, element) {

						// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
						// Retrieved 2014-01-14
						// If you have a problem with this implementation, report a bug against the above spec
						// Or use custom methods to implement your own email validation
						return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
					},

					// https://jqueryvalidation.org/url-method/
					url: function url(value, element) {

						// Copyright (c) 2010-2013 Diego Perini, MIT licensed
						// https://gist.github.com/dperini/729294
						// see also https://mathiasbynens.be/demo/url-regex
						// modified to allow protocol-relative URLs
						return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
					},

					// https://jqueryvalidation.org/date-method/
					date: function () {
						var called = false;

						return function (value, element) {
							if (!called) {
								called = true;
								if (this.settings.debug && window.console) {
									console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\n" + "Please don't use it, since it relies on the Date constructor, which\n" + "behaves very differently across browsers and locales. Use `dateISO`\n" + "instead or one of the locale specific methods in `localizations/`\n" + "and `additional-methods.js`.");
								}
							}

							return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
						};
					}(),

					// https://jqueryvalidation.org/dateISO-method/
					dateISO: function dateISO(value, element) {
						return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
					},

					// https://jqueryvalidation.org/number-method/
					number: function number(value, element) {
						return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
					},

					// https://jqueryvalidation.org/digits-method/
					digits: function digits(value, element) {
						return this.optional(element) || /^\d+$/.test(value);
					},

					// https://jqueryvalidation.org/minlength-method/
					minlength: function minlength(value, element, param) {
						var length = $.isArray(value) ? value.length : this.getLength(value, element);
						return this.optional(element) || length >= param;
					},

					// https://jqueryvalidation.org/maxlength-method/
					maxlength: function maxlength(value, element, param) {
						var length = $.isArray(value) ? value.length : this.getLength(value, element);
						return this.optional(element) || length <= param;
					},

					// https://jqueryvalidation.org/rangelength-method/
					rangelength: function rangelength(value, element, param) {
						var length = $.isArray(value) ? value.length : this.getLength(value, element);
						return this.optional(element) || length >= param[0] && length <= param[1];
					},

					// https://jqueryvalidation.org/min-method/
					min: function min(value, element, param) {
						return this.optional(element) || value >= param;
					},

					// https://jqueryvalidation.org/max-method/
					max: function max(value, element, param) {
						return this.optional(element) || value <= param;
					},

					// https://jqueryvalidation.org/range-method/
					range: function range(value, element, param) {
						return this.optional(element) || value >= param[0] && value <= param[1];
					},

					// https://jqueryvalidation.org/step-method/
					step: function step(value, element, param) {
						var type = $(element).attr("type"),
						    errorMessage = "Step attribute on input type " + type + " is not supported.",
						    supportedTypes = ["text", "number", "range"],
						    re = new RegExp("\\b" + type + "\\b"),
						    notSupported = type && !re.test(supportedTypes.join()),
						    decimalPlaces = function decimalPlaces(num) {
							var match = ("" + num).match(/(?:\.(\d+))?$/);
							if (!match) {
								return 0;
							}

							// Number of digits right of decimal point.
							return match[1] ? match[1].length : 0;
						},
						    toInt = function toInt(num) {
							return Math.round(num * Math.pow(10, decimals));
						},
						    valid = true,
						    decimals;

						// Works only for text, number and range input types
						// TODO find a way to support input types date, datetime, datetime-local, month, time and week
						if (notSupported) {
							throw new Error(errorMessage);
						}

						decimals = decimalPlaces(param);

						// Value can't have too many decimals
						if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
							valid = false;
						}

						return this.optional(element) || valid;
					},

					// https://jqueryvalidation.org/equalTo-method/
					equalTo: function equalTo(value, element, param) {

						// Bind to the blur event of the target in order to revalidate whenever the target field is updated
						var target = $(param);
						if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
							target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
								$(element).valid();
							});
						}
						return value === target.val();
					},

					// https://jqueryvalidation.org/remote-method/
					remote: function remote(value, element, param, method) {
						if (this.optional(element)) {
							return "dependency-mismatch";
						}

						method = typeof method === "string" && method || "remote";

						var previous = this.previousValue(element, method),
						    validator,
						    data,
						    optionDataString;

						if (!this.settings.messages[element.name]) {
							this.settings.messages[element.name] = {};
						}
						previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
						this.settings.messages[element.name][method] = previous.message;

						param = typeof param === "string" && { url: param } || param;
						optionDataString = $.param($.extend({ data: value }, param.data));
						if (previous.old === optionDataString) {
							return previous.valid;
						}

						previous.old = optionDataString;
						validator = this;
						this.startRequest(element);
						data = {};
						data[element.name] = value;
						$.ajax($.extend(true, {
							mode: "abort",
							port: "validate" + element.name,
							dataType: "json",
							data: data,
							context: validator.currentForm,
							success: function success(response) {
								var valid = response === true || response === "true",
								    errors,
								    message,
								    submitted;

								validator.settings.messages[element.name][method] = previous.originalMessage;
								if (valid) {
									submitted = validator.formSubmitted;
									validator.resetInternals();
									validator.toHide = validator.errorsFor(element);
									validator.formSubmitted = submitted;
									validator.successList.push(element);
									validator.invalid[element.name] = false;
									validator.showErrors();
								} else {
									errors = {};
									message = response || validator.defaultMessage(element, { method: method, parameters: value });
									errors[element.name] = previous.message = message;
									validator.invalid[element.name] = true;
									validator.showErrors(errors);
								}
								previous.valid = valid;
								validator.stopRequest(element, valid);
							}
						}, param));
						return "pending";
					}
				}

			});

			// Ajax mode: abort
			// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
			// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

			var pendingRequests = {},
			    ajax;

			// Use a prefilter if available (1.5+)
			if ($.ajaxPrefilter) {
				$.ajaxPrefilter(function (settings, _, xhr) {
					var port = settings.port;
					if (settings.mode === "abort") {
						if (pendingRequests[port]) {
							pendingRequests[port].abort();
						}
						pendingRequests[port] = xhr;
					}
				});
			} else {

				// Proxy ajax
				ajax = $.ajax;
				$.ajax = function (settings) {
					var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
					    port = ("port" in settings ? settings : $.ajaxSettings).port;
					if (mode === "abort") {
						if (pendingRequests[port]) {
							pendingRequests[port].abort();
						}
						pendingRequests[port] = ajax.apply(this, arguments);
						return pendingRequests[port];
					}
					return ajax.apply(this, arguments);
				};
			}
			return $;
		});

		/***/
	},

	/***/"./node_modules/jquery.scrollbar/index.js":
	/*!************************************************!*\
   !*** ./node_modules/jquery.scrollbar/index.js ***!
   \************************************************/
	/*! no static exports found */
	/***/function node_modulesJqueryScrollbarIndexJs(module, exports, __webpack_require__) {

		__webpack_require__( /*! ./jquery.scrollbar */"./node_modules/jquery.scrollbar/jquery.scrollbar.js");
		module.exports = 'jQueryScrollbar';

		/***/
	},

	/***/"./node_modules/jquery.scrollbar/jquery.scrollbar.js":
	/*!***********************************************************!*\
   !*** ./node_modules/jquery.scrollbar/jquery.scrollbar.js ***!
   \***********************************************************/
	/*! no static exports found */
	/***/function node_modulesJqueryScrollbarJqueryScrollbarJs(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
                                                                                                   * jQuery CSS Customizable Scrollbar
                                                                                                   *
                                                                                                   * Copyright 2015, Yuriy Khabarov
                                                                                                   * Dual licensed under the MIT or GPL Version 2 licenses.
                                                                                                   *
                                                                                                   * If you found bug, please contact me via email <13real008@gmail.com>
                                                                                                   *
                                                                                                   * @author Yuriy Khabarov aka Gromo
                                                                                                   * @version 0.2.11
                                                                                                   * @url https://github.com/gromo/jquery.scrollbar/
                                                                                                   *
                                                                                                   */
		;
		(function (root, factory) {
			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__( /*! jquery */"./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {}
		})(this, function ($) {
			'use strict';

			// init flags & variables

			var debug = false;

			var browser = {
				data: {
					index: 0,
					name: 'scrollbar'
				},
				firefox: /firefox/i.test(navigator.userAgent),
				macosx: /mac/i.test(navigator.platform),
				msedge: /edge\/\d+/i.test(navigator.userAgent),
				msie: /(msie|trident)/i.test(navigator.userAgent),
				mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
				overlay: null,
				scroll: null,
				scrolls: [],
				webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
			};

			browser.scrolls.add = function (instance) {
				this.remove(instance).push(instance);
			};
			browser.scrolls.remove = function (instance) {
				while ($.inArray(instance, this) >= 0) {
					this.splice($.inArray(instance, this), 1);
				}
				return this;
			};

			var defaults = {
				autoScrollSize: true, // automatically calculate scrollsize
				autoUpdate: true, // update scrollbar if content/container size changed
				debug: false, // debug mode
				disableBodyScroll: false, // disable body scroll if mouse over container
				duration: 200, // scroll animate duration in ms
				ignoreMobile: false, // ignore mobile devices
				ignoreOverlay: false, // ignore browsers with overlay scrollbars (mobile, MacOS)
				isRtl: false, // is RTL
				scrollStep: 30, // scroll step for scrollbar arrows
				showArrows: false, // add class to show arrows
				stepScrolling: true, // when scrolling to scrollbar mousedown position

				scrollx: null, // horizontal scroll element
				scrolly: null, // vertical scroll element

				onDestroy: null, // callback function on destroy,
				onFallback: null, // callback function if scrollbar is not initialized
				onInit: null, // callback function on first initialization
				onScroll: null, // callback function on content scrolling
				onUpdate: null // callback function on init/resize (before scrollbar size calculation)
			};

			var BaseScrollbar = function BaseScrollbar(container) {

				if (!browser.scroll) {
					browser.overlay = isScrollOverlaysContent();
					browser.scroll = getBrowserScrollSize();
					updateScrollbars();

					$(window).resize(function () {
						var forceUpdate = false;
						if (browser.scroll && (browser.scroll.height || browser.scroll.width)) {
							var scroll = getBrowserScrollSize();
							if (scroll.height !== browser.scroll.height || scroll.width !== browser.scroll.width) {
								browser.scroll = scroll;
								forceUpdate = true; // handle page zoom
							}
						}
						updateScrollbars(forceUpdate);
					});
				}

				this.container = container;
				this.namespace = '.scrollbar_' + browser.data.index++;
				this.options = $.extend({}, defaults, window.jQueryScrollbarOptions || {});
				this.scrollTo = null;
				this.scrollx = {};
				this.scrolly = {};

				container.data(browser.data.name, this);
				browser.scrolls.add(this);
			};

			BaseScrollbar.prototype = {
				destroy: function destroy() {

					if (!this.wrapper) {
						return;
					}

					this.container.removeData(browser.data.name);
					browser.scrolls.remove(this);

					// init variables
					var scrollLeft = this.container.scrollLeft();
					var scrollTop = this.container.scrollTop();

					this.container.insertBefore(this.wrapper).css({
						"height": "",
						"margin": "",
						"max-height": ""
					}).removeClass('scroll-content scroll-scrollx_visible scroll-scrolly_visible').off(this.namespace).scrollLeft(scrollLeft).scrollTop(scrollTop);

					this.scrollx.scroll.removeClass('scroll-scrollx_visible').find('div').addBack().off(this.namespace);
					this.scrolly.scroll.removeClass('scroll-scrolly_visible').find('div').addBack().off(this.namespace);

					this.wrapper.remove();

					$(document).add('body').off(this.namespace);

					if ($.isFunction(this.options.onDestroy)) {
						this.options.onDestroy.apply(this, [this.container]);
					}
				},
				init: function init(options) {

					// init variables
					var S = this,
					    c = this.container,
					    cw = this.containerWrapper || c,
					    namespace = this.namespace,
					    o = $.extend(this.options, options || {}),
					    s = { x: this.scrollx, y: this.scrolly },
					    w = this.wrapper,
					    cssOptions = {};

					var initScroll = {
						scrollLeft: c.scrollLeft(),
						scrollTop: c.scrollTop()
					};

					// do not init if in ignorable browser
					if (browser.mobile && o.ignoreMobile || browser.overlay && o.ignoreOverlay || browser.macosx && !browser.webkit // still required to ignore nonWebKit browsers on Mac
					) {
							if ($.isFunction(o.onFallback)) {
								o.onFallback.apply(this, [c]);
							}
							return false;
						}

					// init scroll container
					if (!w) {
						this.wrapper = w = $('<div>').addClass('scroll-wrapper').addClass(c.attr('class')).css('position', c.css('position') === 'absolute' ? 'absolute' : 'relative').insertBefore(c).append(c);

						if (o.isRtl) {
							w.addClass('scroll--rtl');
						}

						if (c.is('textarea')) {
							this.containerWrapper = cw = $('<div>').insertBefore(c).append(c);
							w.addClass('scroll-textarea');
						}

						cssOptions = {
							"height": "auto",
							"margin-bottom": browser.scroll.height * -1 + 'px',
							"max-height": ""
						};
						cssOptions[o.isRtl ? 'margin-left' : 'margin-right'] = browser.scroll.width * -1 + 'px';

						cw.addClass('scroll-content').css(cssOptions);

						c.on('scroll' + namespace, function (event) {
							var scrollLeft = c.scrollLeft();
							var scrollTop = c.scrollTop();
							if (o.isRtl) {
								// webkit   0:100
								// ie/edge  100:0
								// firefox -100:0
								switch (true) {
									case browser.firefox:
										scrollLeft = Math.abs(scrollLeft);
									case browser.msedge || browser.msie:
										scrollLeft = c[0].scrollWidth - c[0].clientWidth - scrollLeft;
										break;
								}
							}
							if ($.isFunction(o.onScroll)) {
								o.onScroll.call(S, {
									maxScroll: s.y.maxScrollOffset,
									scroll: scrollTop,
									size: s.y.size,
									visible: s.y.visible
								}, {
									maxScroll: s.x.maxScrollOffset,
									scroll: scrollLeft,
									size: s.x.size,
									visible: s.x.visible
								});
							}
							s.x.isVisible && s.x.scroll.bar.css('left', scrollLeft * s.x.kx + 'px');
							s.y.isVisible && s.y.scroll.bar.css('top', scrollTop * s.y.kx + 'px');
						});

						/* prevent native scrollbars to be visible on #anchor click */
						w.on('scroll' + namespace, function () {
							w.scrollTop(0).scrollLeft(0);
						});

						if (o.disableBodyScroll) {
							var handleMouseScroll = function handleMouseScroll(event) {
								isVerticalScroll(event) ? s.y.isVisible && s.y.mousewheel(event) : s.x.isVisible && s.x.mousewheel(event);
							};
							w.on('MozMousePixelScroll' + namespace, handleMouseScroll);
							w.on('mousewheel' + namespace, handleMouseScroll);

							if (browser.mobile) {
								w.on('touchstart' + namespace, function (event) {
									var touch = event.originalEvent.touches && event.originalEvent.touches[0] || event;
									var originalTouch = {
										pageX: touch.pageX,
										pageY: touch.pageY
									};
									var originalScroll = {
										left: c.scrollLeft(),
										top: c.scrollTop()
									};
									$(document).on('touchmove' + namespace, function (event) {
										var touch = event.originalEvent.targetTouches && event.originalEvent.targetTouches[0] || event;
										c.scrollLeft(originalScroll.left + originalTouch.pageX - touch.pageX);
										c.scrollTop(originalScroll.top + originalTouch.pageY - touch.pageY);
										event.preventDefault();
									});
									$(document).on('touchend' + namespace, function () {
										$(document).off(namespace);
									});
								});
							}
						}
						if ($.isFunction(o.onInit)) {
							o.onInit.apply(this, [c]);
						}
					} else {
						cssOptions = {
							"height": "auto",
							"margin-bottom": browser.scroll.height * -1 + 'px',
							"max-height": ""
						};
						cssOptions[o.isRtl ? 'margin-left' : 'margin-right'] = browser.scroll.width * -1 + 'px';
						cw.css(cssOptions);
					}

					// init scrollbars & recalculate sizes
					$.each(s, function (d, scrollx) {

						var scrollCallback = null;
						var scrollForward = 1;
						var scrollOffset = d === 'x' ? 'scrollLeft' : 'scrollTop';
						var scrollStep = o.scrollStep;
						var scrollTo = function scrollTo() {
							var currentOffset = c[scrollOffset]();
							c[scrollOffset](currentOffset + scrollStep);
							if (scrollForward == 1 && currentOffset + scrollStep >= scrollToValue) currentOffset = c[scrollOffset]();
							if (scrollForward == -1 && currentOffset + scrollStep <= scrollToValue) currentOffset = c[scrollOffset]();
							if (c[scrollOffset]() == currentOffset && scrollCallback) {
								scrollCallback();
							}
						};
						var scrollToValue = 0;

						if (!scrollx.scroll) {

							scrollx.scroll = S._getScroll(o['scroll' + d]).addClass('scroll-' + d);

							if (o.showArrows) {
								scrollx.scroll.addClass('scroll-element_arrows_visible');
							}

							scrollx.mousewheel = function (event) {

								if (!scrollx.isVisible || d === 'x' && isVerticalScroll(event)) {
									return true;
								}
								if (d === 'y' && !isVerticalScroll(event)) {
									s.x.mousewheel(event);
									return true;
								}

								var delta = event.originalEvent.wheelDelta * -1 || event.originalEvent.detail;
								var maxScrollValue = scrollx.size - scrollx.visible - scrollx.offset;

								// fix new mozilla
								if (!delta) {
									if (d === 'x' && !!event.originalEvent.deltaX) {
										delta = event.originalEvent.deltaX * 40;
									} else if (d === 'y' && !!event.originalEvent.deltaY) {
										delta = event.originalEvent.deltaY * 40;
									}
								}

								if (delta > 0 && scrollToValue < maxScrollValue || delta < 0 && scrollToValue > 0) {
									scrollToValue = scrollToValue + delta;
									if (scrollToValue < 0) scrollToValue = 0;
									if (scrollToValue > maxScrollValue) scrollToValue = maxScrollValue;

									S.scrollTo = S.scrollTo || {};
									S.scrollTo[scrollOffset] = scrollToValue;
									setTimeout(function () {
										if (S.scrollTo) {
											c.stop().animate(S.scrollTo, 240, 'linear', function () {
												scrollToValue = c[scrollOffset]();
											});
											S.scrollTo = null;
										}
									}, 1);
								}

								event.preventDefault();
								return false;
							};

							scrollx.scroll.on('MozMousePixelScroll' + namespace, scrollx.mousewheel).on('mousewheel' + namespace, scrollx.mousewheel).on('mouseenter' + namespace, function () {
								scrollToValue = c[scrollOffset]();
							});

							// handle arrows & scroll inner mousedown event
							scrollx.scroll.find('.scroll-arrow, .scroll-element_track').on('mousedown' + namespace, function (event) {

								if (event.which != 1) // lmb
									return true;

								scrollForward = 1;

								var data = {
									eventOffset: event[d === 'x' ? 'pageX' : 'pageY'],
									maxScrollValue: scrollx.size - scrollx.visible - scrollx.offset,
									scrollbarOffset: scrollx.scroll.bar.offset()[d === 'x' ? 'left' : 'top'],
									scrollbarSize: scrollx.scroll.bar[d === 'x' ? 'outerWidth' : 'outerHeight']()
								};
								var timeout = 0,
								    timer = 0;

								if ($(this).hasClass('scroll-arrow')) {
									scrollForward = $(this).hasClass("scroll-arrow_more") ? 1 : -1;
									scrollStep = o.scrollStep * scrollForward;
									scrollToValue = scrollForward > 0 ? data.maxScrollValue : 0;
									if (o.isRtl) {
										switch (true) {
											case browser.firefox:
												scrollToValue = scrollForward > 0 ? 0 : data.maxScrollValue * -1;
												break;
											case browser.msie || browser.msedge:
												break;
										}
									}
								} else {
									scrollForward = data.eventOffset > data.scrollbarOffset + data.scrollbarSize ? 1 : data.eventOffset < data.scrollbarOffset ? -1 : 0;
									if (d === 'x' && o.isRtl && (browser.msie || browser.msedge)) scrollForward = scrollForward * -1;
									scrollStep = Math.round(scrollx.visible * 0.75) * scrollForward;
									scrollToValue = data.eventOffset - data.scrollbarOffset - (o.stepScrolling ? scrollForward == 1 ? data.scrollbarSize : 0 : Math.round(data.scrollbarSize / 2));
									scrollToValue = c[scrollOffset]() + scrollToValue / scrollx.kx;
								}

								S.scrollTo = S.scrollTo || {};
								S.scrollTo[scrollOffset] = o.stepScrolling ? c[scrollOffset]() + scrollStep : scrollToValue;

								if (o.stepScrolling) {
									scrollCallback = function scrollCallback() {
										scrollToValue = c[scrollOffset]();
										clearInterval(timer);
										clearTimeout(timeout);
										timeout = 0;
										timer = 0;
									};
									timeout = setTimeout(function () {
										timer = setInterval(scrollTo, 40);
									}, o.duration + 100);
								}

								setTimeout(function () {
									if (S.scrollTo) {
										c.animate(S.scrollTo, o.duration);
										S.scrollTo = null;
									}
								}, 1);

								return S._handleMouseDown(scrollCallback, event);
							});

							// handle scrollbar drag'n'drop
							scrollx.scroll.bar.on('mousedown' + namespace, function (event) {

								if (event.which != 1) // lmb
									return true;

								var eventPosition = event[d === 'x' ? 'pageX' : 'pageY'];
								var initOffset = c[scrollOffset]();

								scrollx.scroll.addClass('scroll-draggable');

								$(document).on('mousemove' + namespace, function (event) {
									var diff = parseInt((event[d === 'x' ? 'pageX' : 'pageY'] - eventPosition) / scrollx.kx, 10);
									if (d === 'x' && o.isRtl && (browser.msie || browser.msedge)) diff = diff * -1;
									c[scrollOffset](initOffset + diff);
								});

								return S._handleMouseDown(function () {
									scrollx.scroll.removeClass('scroll-draggable');
									scrollToValue = c[scrollOffset]();
								}, event);
							});
						}
					});

					// remove classes & reset applied styles
					$.each(s, function (d, scrollx) {
						var scrollClass = 'scroll-scroll' + d + '_visible';
						var scrolly = d == "x" ? s.y : s.x;

						scrollx.scroll.removeClass(scrollClass);
						scrolly.scroll.removeClass(scrollClass);
						cw.removeClass(scrollClass);
					});

					// calculate init sizes
					$.each(s, function (d, scrollx) {
						$.extend(scrollx, d == "x" ? {
							offset: parseInt(c.css('left'), 10) || 0,
							size: c.prop('scrollWidth'),
							visible: w.width()
						} : {
							offset: parseInt(c.css('top'), 10) || 0,
							size: c.prop('scrollHeight'),
							visible: w.height()
						});
					});

					// update scrollbar visibility/dimensions
					this._updateScroll('x', this.scrollx);
					this._updateScroll('y', this.scrolly);

					if ($.isFunction(o.onUpdate)) {
						o.onUpdate.apply(this, [c]);
					}

					// calculate scroll size
					$.each(s, function (d, scrollx) {

						var cssOffset = d === 'x' ? 'left' : 'top';
						var cssFullSize = d === 'x' ? 'outerWidth' : 'outerHeight';
						var cssSize = d === 'x' ? 'width' : 'height';
						var offset = parseInt(c.css(cssOffset), 10) || 0;

						var AreaSize = scrollx.size;
						var AreaVisible = scrollx.visible + offset;

						var scrollSize = scrollx.scroll.size[cssFullSize]() + (parseInt(scrollx.scroll.size.css(cssOffset), 10) || 0);

						if (o.autoScrollSize) {
							scrollx.scrollbarSize = parseInt(scrollSize * AreaVisible / AreaSize, 10);
							scrollx.scroll.bar.css(cssSize, scrollx.scrollbarSize + 'px');
						}

						scrollx.scrollbarSize = scrollx.scroll.bar[cssFullSize]();
						scrollx.kx = (scrollSize - scrollx.scrollbarSize) / (AreaSize - AreaVisible) || 1;
						scrollx.maxScrollOffset = AreaSize - AreaVisible;
					});

					c.scrollLeft(initScroll.scrollLeft).scrollTop(initScroll.scrollTop).trigger('scroll');
				},
				/**
     * Get scrollx/scrolly object
     *
     * @param {Mixed} scroll
     * @returns {jQuery} scroll object
     */
				_getScroll: function _getScroll(scroll) {
					var types = {
						advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
						'<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', // used for handling scrollbar click
						'<div class="scroll-element_inner-bottom"></div>', '</div>', '</div>', '<div class="scroll-bar">', // required
						'<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', '</div>', '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', '</div>', '</div>', '</div>'].join(''),
						simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
						'<div class="scroll-element_track"></div>', // used for handling scrollbar click
						'<div class="scroll-bar"></div>', // required
						'</div>', '</div>'].join('')
					};
					if (types[scroll]) {
						scroll = types[scroll];
					}
					if (!scroll) {
						scroll = types['simple'];
					}
					if (typeof scroll == 'string') {
						scroll = $(scroll).appendTo(this.wrapper);
					} else {
						scroll = $(scroll);
					}
					$.extend(scroll, {
						bar: scroll.find('.scroll-bar'),
						size: scroll.find('.scroll-element_size'),
						track: scroll.find('.scroll-element_track')
					});
					return scroll;
				},
				_handleMouseDown: function _handleMouseDown(callback, event) {

					var namespace = this.namespace;

					$(document).on('blur' + namespace, function () {
						$(document).add('body').off(namespace);
						callback && callback();
					});
					$(document).on('dragstart' + namespace, function (event) {
						event.preventDefault();
						return false;
					});
					$(document).on('mouseup' + namespace, function () {
						$(document).add('body').off(namespace);
						callback && callback();
					});
					$('body').on('selectstart' + namespace, function (event) {
						event.preventDefault();
						return false;
					});

					event && event.preventDefault();
					return false;
				},
				_updateScroll: function _updateScroll(d, scrollx) {

					var container = this.container,
					    containerWrapper = this.containerWrapper || container,
					    scrollClass = 'scroll-scroll' + d + '_visible',
					    scrolly = d === 'x' ? this.scrolly : this.scrollx,
					    offset = parseInt(this.container.css(d === 'x' ? 'left' : 'top'), 10) || 0,
					    wrapper = this.wrapper;

					var AreaSize = scrollx.size;
					var AreaVisible = scrollx.visible + offset;

					scrollx.isVisible = AreaSize - AreaVisible > 1; // bug in IE9/11 with 1px diff
					if (scrollx.isVisible) {
						scrollx.scroll.addClass(scrollClass);
						scrolly.scroll.addClass(scrollClass);
						containerWrapper.addClass(scrollClass);
					} else {
						scrollx.scroll.removeClass(scrollClass);
						scrolly.scroll.removeClass(scrollClass);
						containerWrapper.removeClass(scrollClass);
					}

					if (d === 'y') {
						if (container.is('textarea') || AreaSize < AreaVisible) {
							containerWrapper.css({
								"height": AreaVisible + browser.scroll.height + 'px',
								"max-height": "none"
							});
						} else {
							containerWrapper.css({
								//"height": "auto", // do not reset height value: issue with height:100%!
								"max-height": AreaVisible + browser.scroll.height + 'px'
							});
						}
					}

					if (scrollx.size != container.prop('scrollWidth') || scrolly.size != container.prop('scrollHeight') || scrollx.visible != wrapper.width() || scrolly.visible != wrapper.height() || scrollx.offset != (parseInt(container.css('left'), 10) || 0) || scrolly.offset != (parseInt(container.css('top'), 10) || 0)) {
						$.extend(this.scrollx, {
							offset: parseInt(container.css('left'), 10) || 0,
							size: container.prop('scrollWidth'),
							visible: wrapper.width()
						});
						$.extend(this.scrolly, {
							offset: parseInt(container.css('top'), 10) || 0,
							size: this.container.prop('scrollHeight'),
							visible: wrapper.height()
						});
						this._updateScroll(d === 'x' ? 'y' : 'x', scrolly);
					}
				}
			};

			var CustomScrollbar = BaseScrollbar;

			/*
    * Extend jQuery as plugin
    *
    * @param {Mixed} command to execute
    * @param {Mixed} arguments as Array
    * @return {jQuery}
    */
			$.fn.scrollbar = function (command, args) {
				if (typeof command !== 'string') {
					args = command;
					command = 'init';
				}
				if (typeof args === 'undefined') {
					args = [];
				}
				if (!$.isArray(args)) {
					args = [args];
				}
				this.not('body, .scroll-wrapper').each(function () {
					var element = $(this),
					    instance = element.data(browser.data.name);
					if (instance || command === 'init') {
						if (!instance) {
							instance = new CustomScrollbar(element);
						}
						if (instance[command]) {
							instance[command].apply(instance, args);
						}
					}
				});
				return this;
			};

			/**
    * Connect default options to global object
    */
			$.fn.scrollbar.options = defaults;

			/**
    * Check if scroll content/container size is changed
    */

			var updateScrollbars = function () {
				var timer = 0,
				    timerCounter = 0;

				return function (force) {
					var i, container, options, scroll, wrapper, scrollx, scrolly;
					for (i = 0; i < browser.scrolls.length; i++) {
						scroll = browser.scrolls[i];
						container = scroll.container;
						options = scroll.options;
						wrapper = scroll.wrapper;
						scrollx = scroll.scrollx;
						scrolly = scroll.scrolly;
						if (force || options.autoUpdate && wrapper && wrapper.is(':visible') && (container.prop('scrollWidth') != scrollx.size || container.prop('scrollHeight') != scrolly.size || wrapper.width() != scrollx.visible || wrapper.height() != scrolly.visible)) {
							scroll.init();

							if (options.debug) {
								window.console && console.log({
									scrollHeight: container.prop('scrollHeight') + ':' + scroll.scrolly.size,
									scrollWidth: container.prop('scrollWidth') + ':' + scroll.scrollx.size,
									visibleHeight: wrapper.height() + ':' + scroll.scrolly.visible,
									visibleWidth: wrapper.width() + ':' + scroll.scrollx.visible
								}, true);
								timerCounter++;
							}
						}
					}
					if (debug && timerCounter > 10) {
						window.console && console.log('Scroll updates exceed 10');
						updateScrollbars = function updateScrollbars() {};
					} else {
						clearTimeout(timer);
						timer = setTimeout(updateScrollbars, 300);
					}
				};
			}();

			/* ADDITIONAL FUNCTIONS */
			/**
    * Get native browser scrollbar size (height/width)
    *
    * @param {Boolean} actual size or CSS size, default - CSS size
    * @returns {Object} with height, width
    */
			function getBrowserScrollSize(actualSize) {

				if (browser.webkit && !actualSize) {
					return {
						height: 0,
						width: 0
					};
				}

				if (!browser.data.outer) {
					var css = {
						"border": "none",
						"box-sizing": "content-box",
						"height": "200px",
						"margin": "0",
						"padding": "0",
						"width": "200px"
					};
					browser.data.inner = $("<div>").css($.extend({}, css));
					browser.data.outer = $("<div>").css($.extend({
						"left": "-1000px",
						"overflow": "scroll",
						"position": "absolute",
						"top": "-1000px"
					}, css)).append(browser.data.inner).appendTo("body");
				}

				browser.data.outer.scrollLeft(1000).scrollTop(1000);

				return {
					height: Math.ceil(browser.data.outer.offset().top - browser.data.inner.offset().top || 0),
					width: Math.ceil(browser.data.outer.offset().left - browser.data.inner.offset().left || 0)
				};
			}

			/**
    * Check if native browser scrollbars overlay content
    *
    * @returns {Boolean}
    */
			function isScrollOverlaysContent() {
				var scrollSize = getBrowserScrollSize(true);
				return !(scrollSize.height || scrollSize.width);
			}

			function isVerticalScroll(event) {
				var e = event.originalEvent;
				if (e.axis && e.axis === e.HORIZONTAL_AXIS) return false;
				if (e.wheelDeltaX) return false;
				return true;
			}

			/**
    * Extend AngularJS as UI directive
    * and expose a provider for override default config
    *
    */
			if (window.angular) {
				(function (angular) {
					angular.module('jQueryScrollbar', []).provider('jQueryScrollbar', function () {
						var defaultOptions = defaults;
						return {
							setOptions: function setOptions(options) {
								angular.extend(defaultOptions, options);
							},
							$get: function $get() {
								return {
									options: angular.copy(defaultOptions)
								};
							}
						};
					}).directive('jqueryScrollbar', ['jQueryScrollbar', '$parse', function (jQueryScrollbar, $parse) {
						return {
							restrict: "AC",
							link: function link(scope, element, attrs) {
								var model = $parse(attrs.jqueryScrollbar),
								    options = model(scope);
								element.scrollbar(options || jQueryScrollbar.options).on('$destroy', function () {
									element.scrollbar('destroy');
								});
							}
						};
					}]);
				})(window.angular);
			}
		});

		/***/
	},

	/***/"./node_modules/jquery/dist/jquery.js":
	/*!********************************************!*\
   !*** ./node_modules/jquery/dist/jquery.js ***!
   \********************************************/
	/*! no static exports found */
	/***/function node_modulesJqueryDistJqueryJs(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                   * jQuery JavaScript Library v3.3.1
                                                                   * https://jquery.com/
                                                                   *
                                                                   * Includes Sizzle.js
                                                                   * https://sizzlejs.com/
                                                                   *
                                                                   * Copyright JS Foundation and other contributors
                                                                   * Released under the MIT license
                                                                   * https://jquery.org/license
                                                                   *
                                                                   * Date: 2018-01-20T17:24Z
                                                                   */
		(function (global, factory) {

			"use strict";

			if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

				// For CommonJS and CommonJS-like environments where a proper `window`
				// is present, execute the factory and get jQuery.
				// For environments that do not have a `window` with a `document`
				// (such as Node.js), expose a factory as module.exports.
				// This accentuates the need for the creation of a real `window`.
				// e.g. var jQuery = require("jquery")(window);
				// See ticket #14549 for more info.
				module.exports = global.document ? factory(global, true) : function (w) {
					if (!w.document) {
						throw new Error("jQuery requires a window with a document");
					}
					return factory(w);
				};
			} else {
				factory(global);
			}

			// Pass this if window is not defined yet
		})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

			// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
			// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
			// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
			// enough that all such attempts are guarded in a try block.
			"use strict";

			var arr = [];

			var document = window.document;

			var getProto = Object.getPrototypeOf;

			var _slice = arr.slice;

			var concat = arr.concat;

			var push = arr.push;

			var indexOf = arr.indexOf;

			var class2type = {};

			var toString = class2type.toString;

			var hasOwn = class2type.hasOwnProperty;

			var fnToString = hasOwn.toString;

			var ObjectFunctionString = fnToString.call(Object);

			var support = {};

			var isFunction = function isFunction(obj) {

				// Support: Chrome <=57, Firefox <=52
				// In some browsers, typeof returns "function" for HTML <object> elements
				// (i.e., `typeof document.createElement( "object" ) === "function"`).
				// We don't want to classify *any* DOM node as a function.
				return typeof obj === "function" && typeof obj.nodeType !== "number";
			};

			var isWindow = function isWindow(obj) {
				return obj != null && obj === obj.window;
			};

			var preservedScriptAttributes = {
				type: true,
				src: true,
				noModule: true
			};

			function DOMEval(code, doc, node) {
				doc = doc || document;

				var i,
				    script = doc.createElement("script");

				script.text = code;
				if (node) {
					for (i in preservedScriptAttributes) {
						if (node[i]) {
							script[i] = node[i];
						}
					}
				}
				doc.head.appendChild(script).parentNode.removeChild(script);
			}

			function toType(obj) {
				if (obj == null) {
					return obj + "";
				}

				// Support: Android <=2.3 only (functionish RegExp)
				return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
			}
			/* global Symbol */
			// Defining this global in .eslintrc.json would create a danger of using the global
			// unguarded in another place, it seems safer to define global only for this module


			var version = "3.3.1",


			// Define a local copy of jQuery
			jQuery = function jQuery(selector, context) {

				// The jQuery object is actually just the init constructor 'enhanced'
				// Need init if jQuery is called (just allow error to be thrown if not included)
				return new jQuery.fn.init(selector, context);
			},


			// Support: Android <=4.0 only
			// Make sure we trim BOM and NBSP
			rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

			jQuery.fn = jQuery.prototype = {

				// The current version of jQuery being used
				jquery: version,

				constructor: jQuery,

				// The default length of a jQuery object is 0
				length: 0,

				toArray: function toArray() {
					return _slice.call(this);
				},

				// Get the Nth element in the matched element set OR
				// Get the whole matched element set as a clean array
				get: function get(num) {

					// Return all the elements in a clean array
					if (num == null) {
						return _slice.call(this);
					}

					// Return just the one element from the set
					return num < 0 ? this[num + this.length] : this[num];
				},

				// Take an array of elements and push it onto the stack
				// (returning the new matched element set)
				pushStack: function pushStack(elems) {

					// Build a new jQuery matched element set
					var ret = jQuery.merge(this.constructor(), elems);

					// Add the old object onto the stack (as a reference)
					ret.prevObject = this;

					// Return the newly-formed element set
					return ret;
				},

				// Execute a callback for every element in the matched set.
				each: function each(callback) {
					return jQuery.each(this, callback);
				},

				map: function map(callback) {
					return this.pushStack(jQuery.map(this, function (elem, i) {
						return callback.call(elem, i, elem);
					}));
				},

				slice: function slice() {
					return this.pushStack(_slice.apply(this, arguments));
				},

				first: function first() {
					return this.eq(0);
				},

				last: function last() {
					return this.eq(-1);
				},

				eq: function eq(i) {
					var len = this.length,
					    j = +i + (i < 0 ? len : 0);
					return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
				},

				end: function end() {
					return this.prevObject || this.constructor();
				},

				// For internal use only.
				// Behaves like an Array's method, not like a jQuery method.
				push: push,
				sort: arr.sort,
				splice: arr.splice
			};

			jQuery.extend = jQuery.fn.extend = function () {
				var options,
				    name,
				    src,
				    copy,
				    copyIsArray,
				    clone,
				    target = arguments[0] || {},
				    i = 1,
				    length = arguments.length,
				    deep = false;

				// Handle a deep copy situation
				if (typeof target === "boolean") {
					deep = target;

					// Skip the boolean and the target
					target = arguments[i] || {};
					i++;
				}

				// Handle case when target is a string or something (possible in deep copy)
				if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !isFunction(target)) {
					target = {};
				}

				// Extend jQuery itself if only one argument is passed
				if (i === length) {
					target = this;
					i--;
				}

				for (; i < length; i++) {

					// Only deal with non-null/undefined values
					if ((options = arguments[i]) != null) {

						// Extend the base object
						for (name in options) {
							src = target[name];
							copy = options[name];

							// Prevent never-ending loop
							if (target === copy) {
								continue;
							}

							// Recurse if we're merging plain objects or arrays
							if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

								if (copyIsArray) {
									copyIsArray = false;
									clone = src && Array.isArray(src) ? src : [];
								} else {
									clone = src && jQuery.isPlainObject(src) ? src : {};
								}

								// Never move original objects, clone them
								target[name] = jQuery.extend(deep, clone, copy);

								// Don't bring in undefined values
							} else if (copy !== undefined) {
								target[name] = copy;
							}
						}
					}
				}

				// Return the modified object
				return target;
			};

			jQuery.extend({

				// Unique for each copy of jQuery on the page
				expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

				// Assume jQuery is ready without the ready module
				isReady: true,

				error: function error(msg) {
					throw new Error(msg);
				},

				noop: function noop() {},

				isPlainObject: function isPlainObject(obj) {
					var proto, Ctor;

					// Detect obvious negatives
					// Use toString instead of jQuery.type to catch host objects
					if (!obj || toString.call(obj) !== "[object Object]") {
						return false;
					}

					proto = getProto(obj);

					// Objects with no prototype (e.g., `Object.create( null )`) are plain
					if (!proto) {
						return true;
					}

					// Objects with prototype are plain iff they were constructed by a global Object function
					Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
					return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
				},

				isEmptyObject: function isEmptyObject(obj) {

					/* eslint-disable no-unused-vars */
					// See https://github.com/eslint/eslint/issues/6125
					var name;

					for (name in obj) {
						return false;
					}
					return true;
				},

				// Evaluates a script in a global context
				globalEval: function globalEval(code) {
					DOMEval(code);
				},

				each: function each(obj, callback) {
					var length,
					    i = 0;

					if (isArrayLike(obj)) {
						length = obj.length;
						for (; i < length; i++) {
							if (callback.call(obj[i], i, obj[i]) === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							if (callback.call(obj[i], i, obj[i]) === false) {
								break;
							}
						}
					}

					return obj;
				},

				// Support: Android <=4.0 only
				trim: function trim(text) {
					return text == null ? "" : (text + "").replace(rtrim, "");
				},

				// results is for internal usage only
				makeArray: function makeArray(arr, results) {
					var ret = results || [];

					if (arr != null) {
						if (isArrayLike(Object(arr))) {
							jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
						} else {
							push.call(ret, arr);
						}
					}

					return ret;
				},

				inArray: function inArray(elem, arr, i) {
					return arr == null ? -1 : indexOf.call(arr, elem, i);
				},

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				merge: function merge(first, second) {
					var len = +second.length,
					    j = 0,
					    i = first.length;

					for (; j < len; j++) {
						first[i++] = second[j];
					}

					first.length = i;

					return first;
				},

				grep: function grep(elems, callback, invert) {
					var callbackInverse,
					    matches = [],
					    i = 0,
					    length = elems.length,
					    callbackExpect = !invert;

					// Go through the array, only saving the items
					// that pass the validator function
					for (; i < length; i++) {
						callbackInverse = !callback(elems[i], i);
						if (callbackInverse !== callbackExpect) {
							matches.push(elems[i]);
						}
					}

					return matches;
				},

				// arg is for internal usage only
				map: function map(elems, callback, arg) {
					var length,
					    value,
					    i = 0,
					    ret = [];

					// Go through the array, translating each of the items to their new values
					if (isArrayLike(elems)) {
						length = elems.length;
						for (; i < length; i++) {
							value = callback(elems[i], i, arg);

							if (value != null) {
								ret.push(value);
							}
						}

						// Go through every key on the object,
					} else {
						for (i in elems) {
							value = callback(elems[i], i, arg);

							if (value != null) {
								ret.push(value);
							}
						}
					}

					// Flatten any nested arrays
					return concat.apply([], ret);
				},

				// A global GUID counter for objects
				guid: 1,

				// jQuery.support is not used in Core but other projects attach their
				// properties to it so it needs to exist.
				support: support
			});

			if (typeof Symbol === "function") {
				jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
			}

			// Populate the class2type map
			jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
				class2type["[object " + name + "]"] = name.toLowerCase();
			});

			function isArrayLike(obj) {

				// Support: real iOS 8.2 only (not reproducible in simulator)
				// `in` check used to prevent JIT error (gh-2145)
				// hasOwn isn't used here due to false negatives
				// regarding Nodelist length in IE
				var length = !!obj && "length" in obj && obj.length,
				    type = toType(obj);

				if (isFunction(obj) || isWindow(obj)) {
					return false;
				}

				return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
			}
			var Sizzle =
			/*!
    * Sizzle CSS Selector Engine v2.3.3
    * https://sizzlejs.com/
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license
    * http://jquery.org/license
    *
    * Date: 2016-08-08
    */
			function (window) {

				var i,
				    support,
				    Expr,
				    getText,
				    isXML,
				    tokenize,
				    compile,
				    select,
				    outermostContext,
				    sortInput,
				    hasDuplicate,


				// Local document vars
				setDocument,
				    document,
				    docElem,
				    documentIsHTML,
				    rbuggyQSA,
				    rbuggyMatches,
				    matches,
				    contains,


				// Instance-specific data
				expando = "sizzle" + 1 * new Date(),
				    preferredDoc = window.document,
				    dirruns = 0,
				    done = 0,
				    classCache = createCache(),
				    tokenCache = createCache(),
				    compilerCache = createCache(),
				    sortOrder = function sortOrder(a, b) {
					if (a === b) {
						hasDuplicate = true;
					}
					return 0;
				},


				// Instance methods
				hasOwn = {}.hasOwnProperty,
				    arr = [],
				    pop = arr.pop,
				    push_native = arr.push,
				    push = arr.push,
				    slice = arr.slice,

				// Use a stripped-down indexOf as it's faster than native
				// https://jsperf.com/thor-indexof-vs-for/5
				indexOf = function indexOf(list, elem) {
					var i = 0,
					    len = list.length;
					for (; i < len; i++) {
						if (list[i] === elem) {
							return i;
						}
					}
					return -1;
				},
				    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


				// Regular expressions

				// http://www.w3.org/TR/css3-selectors/#whitespace
				whitespace = "[\\x20\\t\\r\\n\\f]",


				// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
				identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


				// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
				attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
				// Operator (capture 2)
				"*([*^$|!~]?=)" + whitespace +
				// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
				    pseudos = ":(" + identifier + ")(?:\\((" +
				// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
				// 1. quoted (capture 3; capture 4 or capture 5)
				"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
				// 2. simple (capture 6)
				"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
				// 3. anything else (capture 2)
				".*" + ")\\)|)",


				// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
				rwhitespace = new RegExp(whitespace + "+", "g"),
				    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
				    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
				    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
				    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
				    rpseudo = new RegExp(pseudos),
				    ridentifier = new RegExp("^" + identifier + "$"),
				    matchExpr = {
					"ID": new RegExp("^#(" + identifier + ")"),
					"CLASS": new RegExp("^\\.(" + identifier + ")"),
					"TAG": new RegExp("^(" + identifier + "|[*])"),
					"ATTR": new RegExp("^" + attributes),
					"PSEUDO": new RegExp("^" + pseudos),
					"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
					"bool": new RegExp("^(?:" + booleans + ")$", "i"),
					// For use in libraries implementing .is()
					// We use this for POS matching in `select`
					"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
				},
				    rinputs = /^(?:input|select|textarea|button)$/i,
				    rheader = /^h\d$/i,
				    rnative = /^[^{]+\{\s*\[native \w/,


				// Easily-parseable/retrievable ID or TAG or CLASS selectors
				rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				    rsibling = /[+~]/,


				// CSS escapes
				// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
				runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
				    funescape = function funescape(_, escaped, escapedWhitespace) {
					var high = "0x" + escaped - 0x10000;
					// NaN means non-codepoint
					// Support: Firefox<24
					// Workaround erroneous numeric interpretation of +"0x"
					return high !== high || escapedWhitespace ? escaped : high < 0 ?
					// BMP codepoint
					String.fromCharCode(high + 0x10000) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
				},


				// CSS string/identifier serialization
				// https://drafts.csswg.org/cssom/#common-serializing-idioms
				rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				    fcssescape = function fcssescape(ch, asCodePoint) {
					if (asCodePoint) {

						// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
						if (ch === "\0") {
							return '\uFFFD';
						}

						// Control characters and (dependent upon position) numbers get escaped as code points
						return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
					}

					// Other potentially-special ASCII characters get backslash-escaped
					return "\\" + ch;
				},


				// Used for iframes
				// See setDocument()
				// Removing the function wrapper causes a "Permission Denied"
				// error in IE
				unloadHandler = function unloadHandler() {
					setDocument();
				},
				    disabledAncestor = addCombinator(function (elem) {
					return elem.disabled === true && ("form" in elem || "label" in elem);
				}, { dir: "parentNode", next: "legend" });

				// Optimize for push.apply( _, NodeList )
				try {
					push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
					// Support: Android<4.0
					// Detect silently failing push.apply
					arr[preferredDoc.childNodes.length].nodeType;
				} catch (e) {
					push = { apply: arr.length ?

						// Leverage slice if possible
						function (target, els) {
							push_native.apply(target, slice.call(els));
						} :

						// Support: IE<9
						// Otherwise append directly
						function (target, els) {
							var j = target.length,
							    i = 0;
							// Can't trust NodeList.length
							while (target[j++] = els[i++]) {}
							target.length = j - 1;
						}
					};
				}

				function Sizzle(selector, context, results, seed) {
					var m,
					    i,
					    elem,
					    nid,
					    match,
					    groups,
					    newSelector,
					    newContext = context && context.ownerDocument,


					// nodeType defaults to 9, since context defaults to document
					nodeType = context ? context.nodeType : 9;

					results = results || [];

					// Return early from calls with invalid selector or context
					if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

						return results;
					}

					// Try to shortcut find operations (as opposed to filters) in HTML documents
					if (!seed) {

						if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
							setDocument(context);
						}
						context = context || document;

						if (documentIsHTML) {

							// If the selector is sufficiently simple, try using a "get*By*" DOM method
							// (excepting DocumentFragment context, where the methods don't exist)
							if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

								// ID selector
								if (m = match[1]) {

									// Document context
									if (nodeType === 9) {
										if (elem = context.getElementById(m)) {

											// Support: IE, Opera, Webkit
											// TODO: identify versions
											// getElementById can match elements by name instead of ID
											if (elem.id === m) {
												results.push(elem);
												return results;
											}
										} else {
											return results;
										}

										// Element context
									} else {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

											results.push(elem);
											return results;
										}
									}

									// Type selector
								} else if (match[2]) {
									push.apply(results, context.getElementsByTagName(selector));
									return results;

									// Class selector
								} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

									push.apply(results, context.getElementsByClassName(m));
									return results;
								}
							}

							// Take advantage of querySelectorAll
							if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

								if (nodeType !== 1) {
									newContext = context;
									newSelector = selector;

									// qSA looks outside Element context, which is not what we want
									// Thanks to Andrew Dupont for this workaround technique
									// Support: IE <=8
									// Exclude object elements
								} else if (context.nodeName.toLowerCase() !== "object") {

									// Capture the context ID, setting it first if necessary
									if (nid = context.getAttribute("id")) {
										nid = nid.replace(rcssescape, fcssescape);
									} else {
										context.setAttribute("id", nid = expando);
									}

									// Prefix every selector in the list
									groups = tokenize(selector);
									i = groups.length;
									while (i--) {
										groups[i] = "#" + nid + " " + toSelector(groups[i]);
									}
									newSelector = groups.join(",");

									// Expand context for sibling selectors
									newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
								}

								if (newSelector) {
									try {
										push.apply(results, newContext.querySelectorAll(newSelector));
										return results;
									} catch (qsaError) {} finally {
										if (nid === expando) {
											context.removeAttribute("id");
										}
									}
								}
							}
						}
					}

					// All others
					return select(selector.replace(rtrim, "$1"), context, results, seed);
				}

				/**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */
				function createCache() {
					var keys = [];

					function cache(key, value) {
						// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
						if (keys.push(key + " ") > Expr.cacheLength) {
							// Only keep the most recent entries
							delete cache[keys.shift()];
						}
						return cache[key + " "] = value;
					}
					return cache;
				}

				/**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
				function markFunction(fn) {
					fn[expando] = true;
					return fn;
				}

				/**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
				function assert(fn) {
					var el = document.createElement("fieldset");

					try {
						return !!fn(el);
					} catch (e) {
						return false;
					} finally {
						// Remove from its parent by default
						if (el.parentNode) {
							el.parentNode.removeChild(el);
						}
						// release memory in IE
						el = null;
					}
				}

				/**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
				function addHandle(attrs, handler) {
					var arr = attrs.split("|"),
					    i = arr.length;

					while (i--) {
						Expr.attrHandle[arr[i]] = handler;
					}
				}

				/**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
				function siblingCheck(a, b) {
					var cur = b && a,
					    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

					// Use IE sourceIndex if available on both nodes
					if (diff) {
						return diff;
					}

					// Check if b follows a
					if (cur) {
						while (cur = cur.nextSibling) {
							if (cur === b) {
								return -1;
							}
						}
					}

					return a ? 1 : -1;
				}

				/**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
				function createInputPseudo(type) {
					return function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === type;
					};
				}

				/**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
				function createButtonPseudo(type) {
					return function (elem) {
						var name = elem.nodeName.toLowerCase();
						return (name === "input" || name === "button") && elem.type === type;
					};
				}

				/**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
				function createDisabledPseudo(disabled) {

					// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
					return function (elem) {

						// Only certain elements can match :enabled or :disabled
						// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
						// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
						if ("form" in elem) {

							// Check for inherited disabledness on relevant non-disabled elements:
							// * listed form-associated elements in a disabled fieldset
							//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
							//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
							// * option elements in a disabled optgroup
							//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
							// All such elements have a "form" property.
							if (elem.parentNode && elem.disabled === false) {

								// Option elements defer to a parent optgroup if present
								if ("label" in elem) {
									if ("label" in elem.parentNode) {
										return elem.parentNode.disabled === disabled;
									} else {
										return elem.disabled === disabled;
									}
								}

								// Support: IE 6 - 11
								// Use the isDisabled shortcut property to check for disabled fieldset ancestors
								return elem.isDisabled === disabled ||

								// Where there is no isDisabled, check manually
								/* jshint -W018 */
								elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
							}

							return elem.disabled === disabled;

							// Try to winnow out elements that can't be disabled before trusting the disabled property.
							// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
							// even exist on them, let alone have a boolean value.
						} else if ("label" in elem) {
							return elem.disabled === disabled;
						}

						// Remaining elements are neither :enabled nor :disabled
						return false;
					};
				}

				/**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
				function createPositionalPseudo(fn) {
					return markFunction(function (argument) {
						argument = +argument;
						return markFunction(function (seed, matches) {
							var j,
							    matchIndexes = fn([], seed.length, argument),
							    i = matchIndexes.length;

							// Match elements found at the specified indexes
							while (i--) {
								if (seed[j = matchIndexes[i]]) {
									seed[j] = !(matches[j] = seed[j]);
								}
							}
						});
					});
				}

				/**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
				function testContext(context) {
					return context && typeof context.getElementsByTagName !== "undefined" && context;
				}

				// Expose support vars for convenience
				support = Sizzle.support = {};

				/**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
				isXML = Sizzle.isXML = function (elem) {
					// documentElement is verified for cases where it doesn't yet exist
					// (such as loading iframes in IE - #4833)
					var documentElement = elem && (elem.ownerDocument || elem).documentElement;
					return documentElement ? documentElement.nodeName !== "HTML" : false;
				};

				/**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
				setDocument = Sizzle.setDocument = function (node) {
					var hasCompare,
					    subWindow,
					    doc = node ? node.ownerDocument || node : preferredDoc;

					// Return early if doc is invalid or already selected
					if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
						return document;
					}

					// Update global variables
					document = doc;
					docElem = document.documentElement;
					documentIsHTML = !isXML(document);

					// Support: IE 9-11, Edge
					// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
					if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

						// Support: IE 11, Edge
						if (subWindow.addEventListener) {
							subWindow.addEventListener("unload", unloadHandler, false);

							// Support: IE 9 - 10 only
						} else if (subWindow.attachEvent) {
							subWindow.attachEvent("onunload", unloadHandler);
						}
					}

					/* Attributes
     ---------------------------------------------------------------------- */

					// Support: IE<8
					// Verify that getAttribute really returns attributes and not properties
					// (excepting IE8 booleans)
					support.attributes = assert(function (el) {
						el.className = "i";
						return !el.getAttribute("className");
					});

					/* getElement(s)By*
     ---------------------------------------------------------------------- */

					// Check if getElementsByTagName("*") returns only elements
					support.getElementsByTagName = assert(function (el) {
						el.appendChild(document.createComment(""));
						return !el.getElementsByTagName("*").length;
					});

					// Support: IE<9
					support.getElementsByClassName = rnative.test(document.getElementsByClassName);

					// Support: IE<10
					// Check if getElementById returns elements by name
					// The broken getElementById methods don't pick up programmatically-set names,
					// so use a roundabout getElementsByName test
					support.getById = assert(function (el) {
						docElem.appendChild(el).id = expando;
						return !document.getElementsByName || !document.getElementsByName(expando).length;
					});

					// ID filter and find
					if (support.getById) {
						Expr.filter["ID"] = function (id) {
							var attrId = id.replace(runescape, funescape);
							return function (elem) {
								return elem.getAttribute("id") === attrId;
							};
						};
						Expr.find["ID"] = function (id, context) {
							if (typeof context.getElementById !== "undefined" && documentIsHTML) {
								var elem = context.getElementById(id);
								return elem ? [elem] : [];
							}
						};
					} else {
						Expr.filter["ID"] = function (id) {
							var attrId = id.replace(runescape, funescape);
							return function (elem) {
								var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
								return node && node.value === attrId;
							};
						};

						// Support: IE 6 - 7 only
						// getElementById is not reliable as a find shortcut
						Expr.find["ID"] = function (id, context) {
							if (typeof context.getElementById !== "undefined" && documentIsHTML) {
								var node,
								    i,
								    elems,
								    elem = context.getElementById(id);

								if (elem) {

									// Verify the id attribute
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}

									// Fall back on getElementsByName
									elems = context.getElementsByName(id);
									i = 0;
									while (elem = elems[i++]) {
										node = elem.getAttributeNode("id");
										if (node && node.value === id) {
											return [elem];
										}
									}
								}

								return [];
							}
						};
					}

					// Tag
					Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
						if (typeof context.getElementsByTagName !== "undefined") {
							return context.getElementsByTagName(tag);

							// DocumentFragment nodes don't have gEBTN
						} else if (support.qsa) {
							return context.querySelectorAll(tag);
						}
					} : function (tag, context) {
						var elem,
						    tmp = [],
						    i = 0,

						// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
						results = context.getElementsByTagName(tag);

						// Filter out possible comments
						if (tag === "*") {
							while (elem = results[i++]) {
								if (elem.nodeType === 1) {
									tmp.push(elem);
								}
							}

							return tmp;
						}
						return results;
					};

					// Class
					Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
						if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
							return context.getElementsByClassName(className);
						}
					};

					/* QSA/matchesSelector
     ---------------------------------------------------------------------- */

					// QSA and matchesSelector support

					// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
					rbuggyMatches = [];

					// qSa(:focus) reports false when true (Chrome 21)
					// We allow this because of a bug in IE8/9 that throws an error
					// whenever `document.activeElement` is accessed on an iframe
					// So, we allow :focus to pass through QSA all the time to avoid the IE error
					// See https://bugs.jquery.com/ticket/13378
					rbuggyQSA = [];

					if (support.qsa = rnative.test(document.querySelectorAll)) {
						// Build QSA regex
						// Regex strategy adopted from Diego Perini
						assert(function (el) {
							// Select is set to empty string on purpose
							// This is to test IE's treatment of not explicitly
							// setting a boolean content attribute,
							// since its presence should be enough
							// https://bugs.jquery.com/ticket/12359
							docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

							// Support: IE8, Opera 11-12.16
							// Nothing should be selected when empty strings follow ^= or $= or *=
							// The test attribute must be unknown in Opera but "safe" for WinRT
							// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
							if (el.querySelectorAll("[msallowcapture^='']").length) {
								rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
							}

							// Support: IE8
							// Boolean attributes and "value" are not treated correctly
							if (!el.querySelectorAll("[selected]").length) {
								rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
							}

							// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
							if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
								rbuggyQSA.push("~=");
							}

							// Webkit/Opera - :checked should return selected option elements
							// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
							// IE8 throws error here and will not see later tests
							if (!el.querySelectorAll(":checked").length) {
								rbuggyQSA.push(":checked");
							}

							// Support: Safari 8+, iOS 8+
							// https://bugs.webkit.org/show_bug.cgi?id=136851
							// In-page `selector#id sibling-combinator selector` fails
							if (!el.querySelectorAll("a#" + expando + "+*").length) {
								rbuggyQSA.push(".#.+[+~]");
							}
						});

						assert(function (el) {
							el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

							// Support: Windows 8 Native Apps
							// The type and name attributes are restricted during .innerHTML assignment
							var input = document.createElement("input");
							input.setAttribute("type", "hidden");
							el.appendChild(input).setAttribute("name", "D");

							// Support: IE8
							// Enforce case-sensitivity of name attribute
							if (el.querySelectorAll("[name=d]").length) {
								rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
							}

							// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
							// IE8 throws error here and will not see later tests
							if (el.querySelectorAll(":enabled").length !== 2) {
								rbuggyQSA.push(":enabled", ":disabled");
							}

							// Support: IE9-11+
							// IE's :disabled selector does not pick up the children of disabled fieldsets
							docElem.appendChild(el).disabled = true;
							if (el.querySelectorAll(":disabled").length !== 2) {
								rbuggyQSA.push(":enabled", ":disabled");
							}

							// Opera 10-11 does not throw on post-comma invalid pseudos
							el.querySelectorAll("*,:x");
							rbuggyQSA.push(",.*:");
						});
					}

					if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

						assert(function (el) {
							// Check to see if it's possible to do matchesSelector
							// on a disconnected node (IE 9)
							support.disconnectedMatch = matches.call(el, "*");

							// This should fail with an exception
							// Gecko does not error, returns false instead
							matches.call(el, "[s!='']:x");
							rbuggyMatches.push("!=", pseudos);
						});
					}

					rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
					rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

					/* Contains
     ---------------------------------------------------------------------- */
					hasCompare = rnative.test(docElem.compareDocumentPosition);

					// Element contains another
					// Purposefully self-exclusive
					// As in, an element does not contain itself
					contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
						var adown = a.nodeType === 9 ? a.documentElement : a,
						    bup = b && b.parentNode;
						return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
					} : function (a, b) {
						if (b) {
							while (b = b.parentNode) {
								if (b === a) {
									return true;
								}
							}
						}
						return false;
					};

					/* Sorting
     ---------------------------------------------------------------------- */

					// Document order sorting
					sortOrder = hasCompare ? function (a, b) {

						// Flag for duplicate removal
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						// Sort on method existence if only one input has compareDocumentPosition
						var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
						if (compare) {
							return compare;
						}

						// Calculate position if both inputs belong to the same document
						compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

						// Otherwise we know they are disconnected
						1;

						// Disconnected nodes
						if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

							// Choose the first element that is related to our preferred document
							if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
								return -1;
							}
							if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
								return 1;
							}

							// Maintain original order
							return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
						}

						return compare & 4 ? -1 : 1;
					} : function (a, b) {
						// Exit early if the nodes are identical
						if (a === b) {
							hasDuplicate = true;
							return 0;
						}

						var cur,
						    i = 0,
						    aup = a.parentNode,
						    bup = b.parentNode,
						    ap = [a],
						    bp = [b];

						// Parentless nodes are either documents or disconnected
						if (!aup || !bup) {
							return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

							// If the nodes are siblings, we can do a quick check
						} else if (aup === bup) {
							return siblingCheck(a, b);
						}

						// Otherwise we need full lists of their ancestors for comparison
						cur = a;
						while (cur = cur.parentNode) {
							ap.unshift(cur);
						}
						cur = b;
						while (cur = cur.parentNode) {
							bp.unshift(cur);
						}

						// Walk down the tree looking for a discrepancy
						while (ap[i] === bp[i]) {
							i++;
						}

						return i ?
						// Do a sibling check if the nodes have a common ancestor
						siblingCheck(ap[i], bp[i]) :

						// Otherwise nodes in our document sort first
						ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
					};

					return document;
				};

				Sizzle.matches = function (expr, elements) {
					return Sizzle(expr, null, null, elements);
				};

				Sizzle.matchesSelector = function (elem, expr) {
					// Set document vars if needed
					if ((elem.ownerDocument || elem) !== document) {
						setDocument(elem);
					}

					// Make sure that attribute selectors are quoted
					expr = expr.replace(rattributeQuotes, "='$1']");

					if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

						try {
							var ret = matches.call(elem, expr);

							// IE 9's matchesSelector returns false on disconnected nodes
							if (ret || support.disconnectedMatch ||
							// As well, disconnected nodes are said to be in a document
							// fragment in IE 9
							elem.document && elem.document.nodeType !== 11) {
								return ret;
							}
						} catch (e) {}
					}

					return Sizzle(expr, document, null, [elem]).length > 0;
				};

				Sizzle.contains = function (context, elem) {
					// Set document vars if needed
					if ((context.ownerDocument || context) !== document) {
						setDocument(context);
					}
					return contains(context, elem);
				};

				Sizzle.attr = function (elem, name) {
					// Set document vars if needed
					if ((elem.ownerDocument || elem) !== document) {
						setDocument(elem);
					}

					var fn = Expr.attrHandle[name.toLowerCase()],

					// Don't get fooled by Object.prototype properties (jQuery #13807)
					val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

					return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				};

				Sizzle.escape = function (sel) {
					return (sel + "").replace(rcssescape, fcssescape);
				};

				Sizzle.error = function (msg) {
					throw new Error("Syntax error, unrecognized expression: " + msg);
				};

				/**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
				Sizzle.uniqueSort = function (results) {
					var elem,
					    duplicates = [],
					    j = 0,
					    i = 0;

					// Unless we *know* we can detect duplicates, assume their presence
					hasDuplicate = !support.detectDuplicates;
					sortInput = !support.sortStable && results.slice(0);
					results.sort(sortOrder);

					if (hasDuplicate) {
						while (elem = results[i++]) {
							if (elem === results[i]) {
								j = duplicates.push(i);
							}
						}
						while (j--) {
							results.splice(duplicates[j], 1);
						}
					}

					// Clear input after sorting to release objects
					// See https://github.com/jquery/sizzle/pull/225
					sortInput = null;

					return results;
				};

				/**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
				getText = Sizzle.getText = function (elem) {
					var node,
					    ret = "",
					    i = 0,
					    nodeType = elem.nodeType;

					if (!nodeType) {
						// If no nodeType, this is expected to be an array
						while (node = elem[i++]) {
							// Do not traverse comment nodes
							ret += getText(node);
						}
					} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
						// Use textContent for elements
						// innerText usage removed for consistency of new lines (jQuery #11153)
						if (typeof elem.textContent === "string") {
							return elem.textContent;
						} else {
							// Traverse its children
							for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
								ret += getText(elem);
							}
						}
					} else if (nodeType === 3 || nodeType === 4) {
						return elem.nodeValue;
					}
					// Do not include comment or processing instruction nodes

					return ret;
				};

				Expr = Sizzle.selectors = {

					// Can be adjusted by the user
					cacheLength: 50,

					createPseudo: markFunction,

					match: matchExpr,

					attrHandle: {},

					find: {},

					relative: {
						">": { dir: "parentNode", first: true },
						" ": { dir: "parentNode" },
						"+": { dir: "previousSibling", first: true },
						"~": { dir: "previousSibling" }
					},

					preFilter: {
						"ATTR": function ATTR(match) {
							match[1] = match[1].replace(runescape, funescape);

							// Move the given value to match[3] whether quoted or unquoted
							match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

							if (match[2] === "~=") {
								match[3] = " " + match[3] + " ";
							}

							return match.slice(0, 4);
						},

						"CHILD": function CHILD(match) {
							/* matches from matchExpr["CHILD"]
       	1 type (only|nth|...)
       	2 what (child|of-type)
       	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
       	4 xn-component of xn+y argument ([+-]?\d*n|)
       	5 sign of xn-component
       	6 x of xn-component
       	7 sign of y-component
       	8 y of y-component
       */
							match[1] = match[1].toLowerCase();

							if (match[1].slice(0, 3) === "nth") {
								// nth-* requires argument
								if (!match[3]) {
									Sizzle.error(match[0]);
								}

								// numeric x and y parameters for Expr.filter.CHILD
								// remember that false/true cast respectively to 0/1
								match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
								match[5] = +(match[7] + match[8] || match[3] === "odd");

								// other types prohibit arguments
							} else if (match[3]) {
								Sizzle.error(match[0]);
							}

							return match;
						},

						"PSEUDO": function PSEUDO(match) {
							var excess,
							    unquoted = !match[6] && match[2];

							if (matchExpr["CHILD"].test(match[0])) {
								return null;
							}

							// Accept quoted arguments as-is
							if (match[3]) {
								match[2] = match[4] || match[5] || "";

								// Strip excess characters from unquoted arguments
							} else if (unquoted && rpseudo.test(unquoted) && (
							// Get excess from tokenize (recursively)
							excess = tokenize(unquoted, true)) && (
							// advance to the next closing parenthesis
							excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

								// excess is a negative index
								match[0] = match[0].slice(0, excess);
								match[2] = unquoted.slice(0, excess);
							}

							// Return only captures needed by the pseudo filter method (type and argument)
							return match.slice(0, 3);
						}
					},

					filter: {

						"TAG": function TAG(nodeNameSelector) {
							var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
							return nodeNameSelector === "*" ? function () {
								return true;
							} : function (elem) {
								return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
							};
						},

						"CLASS": function CLASS(className) {
							var pattern = classCache[className + " "];

							return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
								return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
							});
						},

						"ATTR": function ATTR(name, operator, check) {
							return function (elem) {
								var result = Sizzle.attr(elem, name);

								if (result == null) {
									return operator === "!=";
								}
								if (!operator) {
									return true;
								}

								result += "";

								return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
							};
						},

						"CHILD": function CHILD(type, what, argument, first, last) {
							var simple = type.slice(0, 3) !== "nth",
							    forward = type.slice(-4) !== "last",
							    ofType = what === "of-type";

							return first === 1 && last === 0 ?

							// Shortcut for :nth-*(n)
							function (elem) {
								return !!elem.parentNode;
							} : function (elem, context, xml) {
								var cache,
								    uniqueCache,
								    outerCache,
								    node,
								    nodeIndex,
								    start,
								    dir = simple !== forward ? "nextSibling" : "previousSibling",
								    parent = elem.parentNode,
								    name = ofType && elem.nodeName.toLowerCase(),
								    useCache = !xml && !ofType,
								    diff = false;

								if (parent) {

									// :(first|last|only)-(child|of-type)
									if (simple) {
										while (dir) {
											node = elem;
											while (node = node[dir]) {
												if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

													return false;
												}
											}
											// Reverse direction for :only-* (if we haven't yet done so)
											start = dir = type === "only" && !start && "nextSibling";
										}
										return true;
									}

									start = [forward ? parent.firstChild : parent.lastChild];

									// non-xml :nth-child(...) stores cache data on `parent`
									if (forward && useCache) {

										// Seek `elem` from a previously-cached index

										// ...in a gzip-friendly way
										node = parent;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex && cache[2];
										node = nodeIndex && parent.childNodes[nodeIndex];

										while (node = ++nodeIndex && node && node[dir] || (

										// Fallback to seeking `elem` from the start
										diff = nodeIndex = 0) || start.pop()) {

											// When found, cache indexes on `parent` and break
											if (node.nodeType === 1 && ++diff && node === elem) {
												uniqueCache[type] = [dirruns, nodeIndex, diff];
												break;
											}
										}
									} else {
										// Use previously-cached element index if available
										if (useCache) {
											// ...in a gzip-friendly way
											node = elem;
											outerCache = node[expando] || (node[expando] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

											cache = uniqueCache[type] || [];
											nodeIndex = cache[0] === dirruns && cache[1];
											diff = nodeIndex;
										}

										// xml :nth-child(...)
										// or :nth-last-child(...) or :nth(-last)?-of-type(...)
										if (diff === false) {
											// Use the same loop as above to seek `elem` from the start
											while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

												if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

													// Cache the index of each encountered element
													if (useCache) {
														outerCache = node[expando] || (node[expando] = {});

														// Support: IE <9 only
														// Defend against cloned attroperties (jQuery gh-1709)
														uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

														uniqueCache[type] = [dirruns, diff];
													}

													if (node === elem) {
														break;
													}
												}
											}
										}
									}

									// Incorporate the offset, then check against cycle size
									diff -= last;
									return diff === first || diff % first === 0 && diff / first >= 0;
								}
							};
						},

						"PSEUDO": function PSEUDO(pseudo, argument) {
							// pseudo-class names are case-insensitive
							// http://www.w3.org/TR/selectors/#pseudo-classes
							// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
							// Remember that setFilters inherits from pseudos
							var args,
							    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

							// The user may use createPseudo to indicate that
							// arguments are needed to create the filter function
							// just as Sizzle does
							if (fn[expando]) {
								return fn(argument);
							}

							// But maintain support for old signatures
							if (fn.length > 1) {
								args = [pseudo, pseudo, "", argument];
								return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
									var idx,
									    matched = fn(seed, argument),
									    i = matched.length;
									while (i--) {
										idx = indexOf(seed, matched[i]);
										seed[idx] = !(matches[idx] = matched[i]);
									}
								}) : function (elem) {
									return fn(elem, 0, args);
								};
							}

							return fn;
						}
					},

					pseudos: {
						// Potentially complex pseudos
						"not": markFunction(function (selector) {
							// Trim the selector passed to compile
							// to avoid treating leading and trailing
							// spaces as combinators
							var input = [],
							    results = [],
							    matcher = compile(selector.replace(rtrim, "$1"));

							return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
								var elem,
								    unmatched = matcher(seed, null, xml, []),
								    i = seed.length;

								// Match elements unmatched by `matcher`
								while (i--) {
									if (elem = unmatched[i]) {
										seed[i] = !(matches[i] = elem);
									}
								}
							}) : function (elem, context, xml) {
								input[0] = elem;
								matcher(input, null, xml, results);
								// Don't keep the element (issue #299)
								input[0] = null;
								return !results.pop();
							};
						}),

						"has": markFunction(function (selector) {
							return function (elem) {
								return Sizzle(selector, elem).length > 0;
							};
						}),

						"contains": markFunction(function (text) {
							text = text.replace(runescape, funescape);
							return function (elem) {
								return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
							};
						}),

						// "Whether an element is represented by a :lang() selector
						// is based solely on the element's language value
						// being equal to the identifier C,
						// or beginning with the identifier C immediately followed by "-".
						// The matching of C against the element's language value is performed case-insensitively.
						// The identifier C does not have to be a valid language name."
						// http://www.w3.org/TR/selectors/#lang-pseudo
						"lang": markFunction(function (lang) {
							// lang value must be a valid identifier
							if (!ridentifier.test(lang || "")) {
								Sizzle.error("unsupported lang: " + lang);
							}
							lang = lang.replace(runescape, funescape).toLowerCase();
							return function (elem) {
								var elemLang;
								do {
									if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

										elemLang = elemLang.toLowerCase();
										return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
									}
								} while ((elem = elem.parentNode) && elem.nodeType === 1);
								return false;
							};
						}),

						// Miscellaneous
						"target": function target(elem) {
							var hash = window.location && window.location.hash;
							return hash && hash.slice(1) === elem.id;
						},

						"root": function root(elem) {
							return elem === docElem;
						},

						"focus": function focus(elem) {
							return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
						},

						// Boolean properties
						"enabled": createDisabledPseudo(false),
						"disabled": createDisabledPseudo(true),

						"checked": function checked(elem) {
							// In CSS3, :checked should return both checked and selected elements
							// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
							var nodeName = elem.nodeName.toLowerCase();
							return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
						},

						"selected": function selected(elem) {
							// Accessing this property makes selected-by-default
							// options in Safari work properly
							if (elem.parentNode) {
								elem.parentNode.selectedIndex;
							}

							return elem.selected === true;
						},

						// Contents
						"empty": function empty(elem) {
							// http://www.w3.org/TR/selectors/#empty-pseudo
							// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
							//   but not by others (comment: 8; processing instruction: 7; etc.)
							// nodeType < 6 works because attributes (2) do not appear as children
							for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
								if (elem.nodeType < 6) {
									return false;
								}
							}
							return true;
						},

						"parent": function parent(elem) {
							return !Expr.pseudos["empty"](elem);
						},

						// Element/input types
						"header": function header(elem) {
							return rheader.test(elem.nodeName);
						},

						"input": function input(elem) {
							return rinputs.test(elem.nodeName);
						},

						"button": function button(elem) {
							var name = elem.nodeName.toLowerCase();
							return name === "input" && elem.type === "button" || name === "button";
						},

						"text": function text(elem) {
							var attr;
							return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

							// Support: IE<8
							// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
							(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
						},

						// Position-in-collection
						"first": createPositionalPseudo(function () {
							return [0];
						}),

						"last": createPositionalPseudo(function (matchIndexes, length) {
							return [length - 1];
						}),

						"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
							return [argument < 0 ? argument + length : argument];
						}),

						"even": createPositionalPseudo(function (matchIndexes, length) {
							var i = 0;
							for (; i < length; i += 2) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"odd": createPositionalPseudo(function (matchIndexes, length) {
							var i = 1;
							for (; i < length; i += 2) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
							var i = argument < 0 ? argument + length : argument;
							for (; --i >= 0;) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						}),

						"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
							var i = argument < 0 ? argument + length : argument;
							for (; ++i < length;) {
								matchIndexes.push(i);
							}
							return matchIndexes;
						})
					}
				};

				Expr.pseudos["nth"] = Expr.pseudos["eq"];

				// Add button/input type pseudos
				for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
					Expr.pseudos[i] = createInputPseudo(i);
				}
				for (i in { submit: true, reset: true }) {
					Expr.pseudos[i] = createButtonPseudo(i);
				}

				// Easy API for creating new setFilters
				function setFilters() {}
				setFilters.prototype = Expr.filters = Expr.pseudos;
				Expr.setFilters = new setFilters();

				tokenize = Sizzle.tokenize = function (selector, parseOnly) {
					var matched,
					    match,
					    tokens,
					    type,
					    soFar,
					    groups,
					    preFilters,
					    cached = tokenCache[selector + " "];

					if (cached) {
						return parseOnly ? 0 : cached.slice(0);
					}

					soFar = selector;
					groups = [];
					preFilters = Expr.preFilter;

					while (soFar) {

						// Comma and first run
						if (!matched || (match = rcomma.exec(soFar))) {
							if (match) {
								// Don't consume trailing commas as valid
								soFar = soFar.slice(match[0].length) || soFar;
							}
							groups.push(tokens = []);
						}

						matched = false;

						// Combinators
						if (match = rcombinators.exec(soFar)) {
							matched = match.shift();
							tokens.push({
								value: matched,
								// Cast descendant combinators to space
								type: match[0].replace(rtrim, " ")
							});
							soFar = soFar.slice(matched.length);
						}

						// Filters
						for (type in Expr.filter) {
							if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
								matched = match.shift();
								tokens.push({
									value: matched,
									type: type,
									matches: match
								});
								soFar = soFar.slice(matched.length);
							}
						}

						if (!matched) {
							break;
						}
					}

					// Return the length of the invalid excess
					// if we're just parsing
					// Otherwise, throw an error or return tokens
					return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
					// Cache the tokens
					tokenCache(selector, groups).slice(0);
				};

				function toSelector(tokens) {
					var i = 0,
					    len = tokens.length,
					    selector = "";
					for (; i < len; i++) {
						selector += tokens[i].value;
					}
					return selector;
				}

				function addCombinator(matcher, combinator, base) {
					var dir = combinator.dir,
					    skip = combinator.next,
					    key = skip || dir,
					    checkNonElements = base && key === "parentNode",
					    doneName = done++;

					return combinator.first ?
					// Check against closest ancestor/preceding element
					function (elem, context, xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								return matcher(elem, context, xml);
							}
						}
						return false;
					} :

					// Check against all ancestor/preceding elements
					function (elem, context, xml) {
						var oldCache,
						    uniqueCache,
						    outerCache,
						    newCache = [dirruns, doneName];

						// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
						if (xml) {
							while (elem = elem[dir]) {
								if (elem.nodeType === 1 || checkNonElements) {
									if (matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						} else {
							while (elem = elem[dir]) {
								if (elem.nodeType === 1 || checkNonElements) {
									outerCache = elem[expando] || (elem[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

									if (skip && skip === elem.nodeName.toLowerCase()) {
										elem = elem[dir] || elem;
									} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

										// Assign to newCache so results back-propagate to previous elements
										return newCache[2] = oldCache[2];
									} else {
										// Reuse newcache so results back-propagate to previous elements
										uniqueCache[key] = newCache;

										// A match means we're done; a fail means we have to keep checking
										if (newCache[2] = matcher(elem, context, xml)) {
											return true;
										}
									}
								}
							}
						}
						return false;
					};
				}

				function elementMatcher(matchers) {
					return matchers.length > 1 ? function (elem, context, xml) {
						var i = matchers.length;
						while (i--) {
							if (!matchers[i](elem, context, xml)) {
								return false;
							}
						}
						return true;
					} : matchers[0];
				}

				function multipleContexts(selector, contexts, results) {
					var i = 0,
					    len = contexts.length;
					for (; i < len; i++) {
						Sizzle(selector, contexts[i], results);
					}
					return results;
				}

				function condense(unmatched, map, filter, context, xml) {
					var elem,
					    newUnmatched = [],
					    i = 0,
					    len = unmatched.length,
					    mapped = map != null;

					for (; i < len; i++) {
						if (elem = unmatched[i]) {
							if (!filter || filter(elem, context, xml)) {
								newUnmatched.push(elem);
								if (mapped) {
									map.push(i);
								}
							}
						}
					}

					return newUnmatched;
				}

				function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
					if (postFilter && !postFilter[expando]) {
						postFilter = setMatcher(postFilter);
					}
					if (postFinder && !postFinder[expando]) {
						postFinder = setMatcher(postFinder, postSelector);
					}
					return markFunction(function (seed, results, context, xml) {
						var temp,
						    i,
						    elem,
						    preMap = [],
						    postMap = [],
						    preexisting = results.length,


						// Get initial elements from seed or context
						elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


						// Prefilter to get matcher input, preserving a map for seed-results synchronization
						matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
						    matcherOut = matcher ?
						// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
						postFinder || (seed ? preFilter : preexisting || postFilter) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results : matcherIn;

						// Find primary matches
						if (matcher) {
							matcher(matcherIn, matcherOut, context, xml);
						}

						// Apply postFilter
						if (postFilter) {
							temp = condense(matcherOut, postMap);
							postFilter(temp, [], context, xml);

							// Un-match failing elements by moving them back to matcherIn
							i = temp.length;
							while (i--) {
								if (elem = temp[i]) {
									matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
								}
							}
						}

						if (seed) {
							if (postFinder || preFilter) {
								if (postFinder) {
									// Get the final matcherOut by condensing this intermediate into postFinder contexts
									temp = [];
									i = matcherOut.length;
									while (i--) {
										if (elem = matcherOut[i]) {
											// Restore matcherIn since elem is not yet a final match
											temp.push(matcherIn[i] = elem);
										}
									}
									postFinder(null, matcherOut = [], temp, xml);
								}

								// Move matched elements from seed to results to keep them synchronized
								i = matcherOut.length;
								while (i--) {
									if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

										seed[temp] = !(results[temp] = elem);
									}
								}
							}

							// Add elements to results, through postFinder if defined
						} else {
							matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
							if (postFinder) {
								postFinder(null, results, matcherOut, xml);
							} else {
								push.apply(results, matcherOut);
							}
						}
					});
				}

				function matcherFromTokens(tokens) {
					var checkContext,
					    matcher,
					    j,
					    len = tokens.length,
					    leadingRelative = Expr.relative[tokens[0].type],
					    implicitRelative = leadingRelative || Expr.relative[" "],
					    i = leadingRelative ? 1 : 0,


					// The foundational matcher ensures that elements are reachable from top-level context(s)
					matchContext = addCombinator(function (elem) {
						return elem === checkContext;
					}, implicitRelative, true),
					    matchAnyContext = addCombinator(function (elem) {
						return indexOf(checkContext, elem) > -1;
					}, implicitRelative, true),
					    matchers = [function (elem, context, xml) {
						var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
						// Avoid hanging onto element (issue #299)
						checkContext = null;
						return ret;
					}];

					for (; i < len; i++) {
						if (matcher = Expr.relative[tokens[i].type]) {
							matchers = [addCombinator(elementMatcher(matchers), matcher)];
						} else {
							matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

							// Return special upon seeing a positional matcher
							if (matcher[expando]) {
								// Find the next relative operator (if any) for proper handling
								j = ++i;
								for (; j < len; j++) {
									if (Expr.relative[tokens[j].type]) {
										break;
									}
								}
								return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
								// If the preceding token was a descendant combinator, insert an implicit any-element `*`
								tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
							}
							matchers.push(matcher);
						}
					}

					return elementMatcher(matchers);
				}

				function matcherFromGroupMatchers(elementMatchers, setMatchers) {
					var bySet = setMatchers.length > 0,
					    byElement = elementMatchers.length > 0,
					    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
						var elem,
						    j,
						    matcher,
						    matchedCount = 0,
						    i = "0",
						    unmatched = seed && [],
						    setMatched = [],
						    contextBackup = outermostContext,

						// We must always have either seed elements or outermost context
						elems = seed || byElement && Expr.find["TAG"]("*", outermost),

						// Use integer dirruns iff this is the outermost matcher
						dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
						    len = elems.length;

						if (outermost) {
							outermostContext = context === document || context || outermost;
						}

						// Add elements passing elementMatchers directly to results
						// Support: IE<9, Safari
						// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
						for (; i !== len && (elem = elems[i]) != null; i++) {
							if (byElement && elem) {
								j = 0;
								if (!context && elem.ownerDocument !== document) {
									setDocument(elem);
									xml = !documentIsHTML;
								}
								while (matcher = elementMatchers[j++]) {
									if (matcher(elem, context || document, xml)) {
										results.push(elem);
										break;
									}
								}
								if (outermost) {
									dirruns = dirrunsUnique;
								}
							}

							// Track unmatched elements for set filters
							if (bySet) {
								// They will have gone through all possible matchers
								if (elem = !matcher && elem) {
									matchedCount--;
								}

								// Lengthen the array for every element, matched or not
								if (seed) {
									unmatched.push(elem);
								}
							}
						}

						// `i` is now the count of elements visited above, and adding it to `matchedCount`
						// makes the latter nonnegative.
						matchedCount += i;

						// Apply set filters to unmatched elements
						// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
						// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
						// no element matchers and no seed.
						// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
						// case, which will result in a "00" `matchedCount` that differs from `i` but is also
						// numerically zero.
						if (bySet && i !== matchedCount) {
							j = 0;
							while (matcher = setMatchers[j++]) {
								matcher(unmatched, setMatched, context, xml);
							}

							if (seed) {
								// Reintegrate element matches to eliminate the need for sorting
								if (matchedCount > 0) {
									while (i--) {
										if (!(unmatched[i] || setMatched[i])) {
											setMatched[i] = pop.call(results);
										}
									}
								}

								// Discard index placeholder values to get only actual matches
								setMatched = condense(setMatched);
							}

							// Add matches to results
							push.apply(results, setMatched);

							// Seedless set matches succeeding multiple successful matchers stipulate sorting
							if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

								Sizzle.uniqueSort(results);
							}
						}

						// Override manipulation of globals by nested matchers
						if (outermost) {
							dirruns = dirrunsUnique;
							outermostContext = contextBackup;
						}

						return unmatched;
					};

					return bySet ? markFunction(superMatcher) : superMatcher;
				}

				compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
					var i,
					    setMatchers = [],
					    elementMatchers = [],
					    cached = compilerCache[selector + " "];

					if (!cached) {
						// Generate a function of recursive functions that can be used to check each element
						if (!match) {
							match = tokenize(selector);
						}
						i = match.length;
						while (i--) {
							cached = matcherFromTokens(match[i]);
							if (cached[expando]) {
								setMatchers.push(cached);
							} else {
								elementMatchers.push(cached);
							}
						}

						// Cache the compiled function
						cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

						// Save selector and tokenization
						cached.selector = selector;
					}
					return cached;
				};

				/**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
				select = Sizzle.select = function (selector, context, results, seed) {
					var i,
					    tokens,
					    token,
					    type,
					    find,
					    compiled = typeof selector === "function" && selector,
					    match = !seed && tokenize(selector = compiled.selector || selector);

					results = results || [];

					// Try to minimize operations if there is only one selector in the list and no seed
					// (the latter of which guarantees us context)
					if (match.length === 1) {

						// Reduce context if the leading compound selector is an ID
						tokens = match[0] = match[0].slice(0);
						if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

							context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
							if (!context) {
								return results;

								// Precompiled matchers will still verify ancestry, so step up a level
							} else if (compiled) {
								context = context.parentNode;
							}

							selector = selector.slice(tokens.shift().value.length);
						}

						// Fetch a seed set for right-to-left matching
						i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
						while (i--) {
							token = tokens[i];

							// Abort if we hit a combinator
							if (Expr.relative[type = token.type]) {
								break;
							}
							if (find = Expr.find[type]) {
								// Search, expanding context for leading sibling combinators
								if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

									// If seed is empty or no tokens remain, we can return early
									tokens.splice(i, 1);
									selector = seed.length && toSelector(tokens);
									if (!selector) {
										push.apply(results, seed);
										return results;
									}

									break;
								}
							}
						}
					}

					// Compile and execute a filtering function if one is not provided
					// Provide `match` to avoid retokenization if we modified the selector above
					(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
					return results;
				};

				// One-time assignments

				// Sort stability
				support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

				// Support: Chrome 14-35+
				// Always assume duplicates if they aren't passed to the comparison function
				support.detectDuplicates = !!hasDuplicate;

				// Initialize against the default document
				setDocument();

				// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
				// Detached nodes confoundingly follow *each other*
				support.sortDetached = assert(function (el) {
					// Should return 1, but returns 4 (following)
					return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
				});

				// Support: IE<8
				// Prevent attribute/property "interpolation"
				// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
				if (!assert(function (el) {
					el.innerHTML = "<a href='#'></a>";
					return el.firstChild.getAttribute("href") === "#";
				})) {
					addHandle("type|href|height|width", function (elem, name, isXML) {
						if (!isXML) {
							return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
						}
					});
				}

				// Support: IE<9
				// Use defaultValue in place of getAttribute("value")
				if (!support.attributes || !assert(function (el) {
					el.innerHTML = "<input/>";
					el.firstChild.setAttribute("value", "");
					return el.firstChild.getAttribute("value") === "";
				})) {
					addHandle("value", function (elem, name, isXML) {
						if (!isXML && elem.nodeName.toLowerCase() === "input") {
							return elem.defaultValue;
						}
					});
				}

				// Support: IE<9
				// Use getAttributeNode to fetch booleans when getAttribute lies
				if (!assert(function (el) {
					return el.getAttribute("disabled") == null;
				})) {
					addHandle(booleans, function (elem, name, isXML) {
						var val;
						if (!isXML) {
							return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
						}
					});
				}

				return Sizzle;
			}(window);

			jQuery.find = Sizzle;
			jQuery.expr = Sizzle.selectors;

			// Deprecated
			jQuery.expr[":"] = jQuery.expr.pseudos;
			jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
			jQuery.text = Sizzle.getText;
			jQuery.isXMLDoc = Sizzle.isXML;
			jQuery.contains = Sizzle.contains;
			jQuery.escapeSelector = Sizzle.escape;

			var dir = function dir(elem, _dir, until) {
				var matched = [],
				    truncate = until !== undefined;

				while ((elem = elem[_dir]) && elem.nodeType !== 9) {
					if (elem.nodeType === 1) {
						if (truncate && jQuery(elem).is(until)) {
							break;
						}
						matched.push(elem);
					}
				}
				return matched;
			};

			var _siblings = function _siblings(n, elem) {
				var matched = [];

				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						matched.push(n);
					}
				}

				return matched;
			};

			var rneedsContext = jQuery.expr.match.needsContext;

			function nodeName(elem, name) {

				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			};
			var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

			// Implement the identical functionality for filter and not
			function winnow(elements, qualifier, not) {
				if (isFunction(qualifier)) {
					return jQuery.grep(elements, function (elem, i) {
						return !!qualifier.call(elem, i, elem) !== not;
					});
				}

				// Single element
				if (qualifier.nodeType) {
					return jQuery.grep(elements, function (elem) {
						return elem === qualifier !== not;
					});
				}

				// Arraylike of elements (jQuery, arguments, Array)
				if (typeof qualifier !== "string") {
					return jQuery.grep(elements, function (elem) {
						return indexOf.call(qualifier, elem) > -1 !== not;
					});
				}

				// Filtered directly for both simple and complex selectors
				return jQuery.filter(qualifier, elements, not);
			}

			jQuery.filter = function (expr, elems, not) {
				var elem = elems[0];

				if (not) {
					expr = ":not(" + expr + ")";
				}

				if (elems.length === 1 && elem.nodeType === 1) {
					return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
				}

				return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
					return elem.nodeType === 1;
				}));
			};

			jQuery.fn.extend({
				find: function find(selector) {
					var i,
					    ret,
					    len = this.length,
					    self = this;

					if (typeof selector !== "string") {
						return this.pushStack(jQuery(selector).filter(function () {
							for (i = 0; i < len; i++) {
								if (jQuery.contains(self[i], this)) {
									return true;
								}
							}
						}));
					}

					ret = this.pushStack([]);

					for (i = 0; i < len; i++) {
						jQuery.find(selector, self[i], ret);
					}

					return len > 1 ? jQuery.uniqueSort(ret) : ret;
				},
				filter: function filter(selector) {
					return this.pushStack(winnow(this, selector || [], false));
				},
				not: function not(selector) {
					return this.pushStack(winnow(this, selector || [], true));
				},
				is: function is(selector) {
					return !!winnow(this,

					// If this is a positional/relative selector, check membership in the returned set
					// so $("p:first").is("p:last") won't return true for a doc with two "p".
					typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
				}
			});

			// Initialize a jQuery object


			// A central reference to the root jQuery(document)
			var rootjQuery,


			// A simple way to check for HTML strings
			// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
			// Strict HTML recognition (#11290: must start with <)
			// Shortcut simple #id case for speed
			rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
			    init = jQuery.fn.init = function (selector, context, root) {
				var match, elem;

				// HANDLE: $(""), $(null), $(undefined), $(false)
				if (!selector) {
					return this;
				}

				// Method init() accepts an alternate rootjQuery
				// so migrate can support jQuery.sub (gh-2101)
				root = root || rootjQuery;

				// Handle HTML strings
				if (typeof selector === "string") {
					if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

						// Assume that strings that start and end with <> are HTML and skip the regex check
						match = [null, selector, null];
					} else {
						match = rquickExpr.exec(selector);
					}

					// Match html or make sure no context is specified for #id
					if (match && (match[1] || !context)) {

						// HANDLE: $(html) -> $(array)
						if (match[1]) {
							context = context instanceof jQuery ? context[0] : context;

							// Option to run scripts is true for back-compat
							// Intentionally let the error be thrown if parseHTML is not present
							jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

							// HANDLE: $(html, props)
							if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
								for (match in context) {

									// Properties of context are called as methods if possible
									if (isFunction(this[match])) {
										this[match](context[match]);

										// ...and otherwise set as attributes
									} else {
										this.attr(match, context[match]);
									}
								}
							}

							return this;

							// HANDLE: $(#id)
						} else {
							elem = document.getElementById(match[2]);

							if (elem) {

								// Inject the element directly into the jQuery object
								this[0] = elem;
								this.length = 1;
							}
							return this;
						}

						// HANDLE: $(expr, $(...))
					} else if (!context || context.jquery) {
						return (context || root).find(selector);

						// HANDLE: $(expr, context)
						// (which is just equivalent to: $(context).find(expr)
					} else {
						return this.constructor(context).find(selector);
					}

					// HANDLE: $(DOMElement)
				} else if (selector.nodeType) {
					this[0] = selector;
					this.length = 1;
					return this;

					// HANDLE: $(function)
					// Shortcut for document ready
				} else if (isFunction(selector)) {
					return root.ready !== undefined ? root.ready(selector) :

					// Execute immediately if ready is not present
					selector(jQuery);
				}

				return jQuery.makeArray(selector, this);
			};

			// Give the init function the jQuery prototype for later instantiation
			init.prototype = jQuery.fn;

			// Initialize central reference
			rootjQuery = jQuery(document);

			var rparentsprev = /^(?:parents|prev(?:Until|All))/,


			// Methods guaranteed to produce a unique set when starting from a unique set
			guaranteedUnique = {
				children: true,
				contents: true,
				next: true,
				prev: true
			};

			jQuery.fn.extend({
				has: function has(target) {
					var targets = jQuery(target, this),
					    l = targets.length;

					return this.filter(function () {
						var i = 0;
						for (; i < l; i++) {
							if (jQuery.contains(this, targets[i])) {
								return true;
							}
						}
					});
				},

				closest: function closest(selectors, context) {
					var cur,
					    i = 0,
					    l = this.length,
					    matched = [],
					    targets = typeof selectors !== "string" && jQuery(selectors);

					// Positional selectors never match, since there's no _selection_ context
					if (!rneedsContext.test(selectors)) {
						for (; i < l; i++) {
							for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

								// Always skip document fragments
								if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

								// Don't pass non-elements to Sizzle
								cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

									matched.push(cur);
									break;
								}
							}
						}
					}

					return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
				},

				// Determine the position of an element within the set
				index: function index(elem) {

					// No argument, return index in parent
					if (!elem) {
						return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
					}

					// Index in selector
					if (typeof elem === "string") {
						return indexOf.call(jQuery(elem), this[0]);
					}

					// Locate the position of the desired element
					return indexOf.call(this,

					// If it receives a jQuery object, the first element is used
					elem.jquery ? elem[0] : elem);
				},

				add: function add(selector, context) {
					return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
				},

				addBack: function addBack(selector) {
					return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
				}
			});

			function sibling(cur, dir) {
				while ((cur = cur[dir]) && cur.nodeType !== 1) {}
				return cur;
			}

			jQuery.each({
				parent: function parent(elem) {
					var parent = elem.parentNode;
					return parent && parent.nodeType !== 11 ? parent : null;
				},
				parents: function parents(elem) {
					return dir(elem, "parentNode");
				},
				parentsUntil: function parentsUntil(elem, i, until) {
					return dir(elem, "parentNode", until);
				},
				next: function next(elem) {
					return sibling(elem, "nextSibling");
				},
				prev: function prev(elem) {
					return sibling(elem, "previousSibling");
				},
				nextAll: function nextAll(elem) {
					return dir(elem, "nextSibling");
				},
				prevAll: function prevAll(elem) {
					return dir(elem, "previousSibling");
				},
				nextUntil: function nextUntil(elem, i, until) {
					return dir(elem, "nextSibling", until);
				},
				prevUntil: function prevUntil(elem, i, until) {
					return dir(elem, "previousSibling", until);
				},
				siblings: function siblings(elem) {
					return _siblings((elem.parentNode || {}).firstChild, elem);
				},
				children: function children(elem) {
					return _siblings(elem.firstChild);
				},
				contents: function contents(elem) {
					if (nodeName(elem, "iframe")) {
						return elem.contentDocument;
					}

					// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
					// Treat the template element as a regular one in browsers that
					// don't support it.
					if (nodeName(elem, "template")) {
						elem = elem.content || elem;
					}

					return jQuery.merge([], elem.childNodes);
				}
			}, function (name, fn) {
				jQuery.fn[name] = function (until, selector) {
					var matched = jQuery.map(this, fn, until);

					if (name.slice(-5) !== "Until") {
						selector = until;
					}

					if (selector && typeof selector === "string") {
						matched = jQuery.filter(selector, matched);
					}

					if (this.length > 1) {

						// Remove duplicates
						if (!guaranteedUnique[name]) {
							jQuery.uniqueSort(matched);
						}

						// Reverse order for parents* and prev-derivatives
						if (rparentsprev.test(name)) {
							matched.reverse();
						}
					}

					return this.pushStack(matched);
				};
			});
			var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

			// Convert String-formatted options into Object-formatted ones
			function createOptions(options) {
				var object = {};
				jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
					object[flag] = true;
				});
				return object;
			}

			/*
    * Create a callback list using the following parameters:
    *
    *	options: an optional list of space-separated options that will change how
    *			the callback list behaves or a more traditional option object
    *
    * By default a callback list will act like an event callback list and can be
    * "fired" multiple times.
    *
    * Possible options:
    *
    *	once:			will ensure the callback list can only be fired once (like a Deferred)
    *
    *	memory:			will keep track of previous values and will call any callback added
    *					after the list has been fired right away with the latest "memorized"
    *					values (like a Deferred)
    *
    *	unique:			will ensure a callback can only be added once (no duplicate in the list)
    *
    *	stopOnFalse:	interrupt callings when a callback returns false
    *
    */
			jQuery.Callbacks = function (options) {

				// Convert options from String-formatted to Object-formatted if needed
				// (we check in cache first)
				options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

				var // Flag to know if list is currently firing
				firing,


				// Last fire value for non-forgettable lists
				memory,


				// Flag to know if list was already fired
				_fired,


				// Flag to prevent firing
				_locked,


				// Actual callback list
				list = [],


				// Queue of execution data for repeatable lists
				queue = [],


				// Index of currently firing callback (modified by add/remove as needed)
				firingIndex = -1,


				// Fire callbacks
				fire = function fire() {

					// Enforce single-firing
					_locked = _locked || options.once;

					// Execute callbacks for all pending executions,
					// respecting firingIndex overrides and runtime changes
					_fired = firing = true;
					for (; queue.length; firingIndex = -1) {
						memory = queue.shift();
						while (++firingIndex < list.length) {

							// Run callback and check for early termination
							if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

								// Jump to end and forget the data so .add doesn't re-fire
								firingIndex = list.length;
								memory = false;
							}
						}
					}

					// Forget the data if we're done with it
					if (!options.memory) {
						memory = false;
					}

					firing = false;

					// Clean up if we're done firing for good
					if (_locked) {

						// Keep an empty list if we have data for future add calls
						if (memory) {
							list = [];

							// Otherwise, this object is spent
						} else {
							list = "";
						}
					}
				},


				// Actual Callbacks object
				self = {

					// Add a callback or a collection of callbacks to the list
					add: function add() {
						if (list) {

							// If we have memory from a past run, we should fire after adding
							if (memory && !firing) {
								firingIndex = list.length - 1;
								queue.push(memory);
							}

							(function add(args) {
								jQuery.each(args, function (_, arg) {
									if (isFunction(arg)) {
										if (!options.unique || !self.has(arg)) {
											list.push(arg);
										}
									} else if (arg && arg.length && toType(arg) !== "string") {

										// Inspect recursively
										add(arg);
									}
								});
							})(arguments);

							if (memory && !firing) {
								fire();
							}
						}
						return this;
					},

					// Remove a callback from the list
					remove: function remove() {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);

								// Handle firing indexes
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						});
						return this;
					},

					// Check if a given callback is in the list.
					// If no argument is given, return whether or not list has callbacks attached.
					has: function has(fn) {
						return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
					},

					// Remove all callbacks from the list
					empty: function empty() {
						if (list) {
							list = [];
						}
						return this;
					},

					// Disable .fire and .add
					// Abort any current/pending executions
					// Clear all callbacks and values
					disable: function disable() {
						_locked = queue = [];
						list = memory = "";
						return this;
					},
					disabled: function disabled() {
						return !list;
					},

					// Disable .fire
					// Also disable .add unless we have memory (since it would have no effect)
					// Abort any pending executions
					lock: function lock() {
						_locked = queue = [];
						if (!memory && !firing) {
							list = memory = "";
						}
						return this;
					},
					locked: function locked() {
						return !!_locked;
					},

					// Call all callbacks with the given context and arguments
					fireWith: function fireWith(context, args) {
						if (!_locked) {
							args = args || [];
							args = [context, args.slice ? args.slice() : args];
							queue.push(args);
							if (!firing) {
								fire();
							}
						}
						return this;
					},

					// Call all the callbacks with the given arguments
					fire: function fire() {
						self.fireWith(this, arguments);
						return this;
					},

					// To know if the callbacks have already been called at least once
					fired: function fired() {
						return !!_fired;
					}
				};

				return self;
			};

			function Identity(v) {
				return v;
			}
			function Thrower(ex) {
				throw ex;
			}

			function adoptValue(value, resolve, reject, noValue) {
				var method;

				try {

					// Check for promise aspect first to privilege synchronous behavior
					if (value && isFunction(method = value.promise)) {
						method.call(value).done(resolve).fail(reject);

						// Other thenables
					} else if (value && isFunction(method = value.then)) {
						method.call(value, resolve, reject);

						// Other non-thenables
					} else {

						// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
						// * false: [ value ].slice( 0 ) => resolve( value )
						// * true: [ value ].slice( 1 ) => resolve()
						resolve.apply(undefined, [value].slice(noValue));
					}

					// For Promises/A+, convert exceptions into rejections
					// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
					// Deferred#then to conditionally suppress rejection.
				} catch (value) {

					// Support: Android 4.0 only
					// Strict mode functions invoked without .call/.apply get global-object context
					reject.apply(undefined, [value]);
				}
			}

			jQuery.extend({

				Deferred: function Deferred(func) {
					var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
					    _state = "pending",
					    _promise = {
						state: function state() {
							return _state;
						},
						always: function always() {
							deferred.done(arguments).fail(arguments);
							return this;
						},
						"catch": function _catch(fn) {
							return _promise.then(null, fn);
						},

						// Keep pipe for back-compat
						pipe: function pipe() /* fnDone, fnFail, fnProgress */{
							var fns = arguments;

							return jQuery.Deferred(function (newDefer) {
								jQuery.each(tuples, function (i, tuple) {

									// Map tuples (progress, done, fail) to arguments (done, fail, progress)
									var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

									// deferred.progress(function() { bind to newDefer or newDefer.notify })
									// deferred.done(function() { bind to newDefer or newDefer.resolve })
									// deferred.fail(function() { bind to newDefer or newDefer.reject })
									deferred[tuple[1]](function () {
										var returned = fn && fn.apply(this, arguments);
										if (returned && isFunction(returned.promise)) {
											returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
										} else {
											newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
										}
									});
								});
								fns = null;
							}).promise();
						},
						then: function then(onFulfilled, onRejected, onProgress) {
							var maxDepth = 0;
							function resolve(depth, deferred, handler, special) {
								return function () {
									var that = this,
									    args = arguments,
									    mightThrow = function mightThrow() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if (depth < maxDepth) {
											return;
										}

										returned = handler.apply(that, args);

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if (returned === deferred.promise()) {
											throw new TypeError("Thenable self-resolution");
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned && (

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										(typeof returned === 'undefined' ? 'undefined' : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

										// Handle a returned thenable
										if (isFunction(then)) {

											// Special processors (notify) just wait for resolution
											if (special) {
												then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

												// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
											}

											// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Identity) {
												that = undefined;
												args = [returned];
											}

											// Process the value(s)
											// Default process is resolve
											(special || deferred.resolveWith)(that, args);
										}
									},


									// Only normal processors (resolve) catch and reject exceptions
									process = special ? mightThrow : function () {
										try {
											mightThrow();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook(e, process.stackTrace);
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if (depth + 1 >= maxDepth) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if (handler !== Thrower) {
													that = undefined;
													args = [e];
												}

												deferred.rejectWith(that, args);
											}
										}
									};

									// Support: Promises/A+ section 2.3.3.3.1
									// https://promisesaplus.com/#point-57
									// Re-resolve promises immediately to dodge false rejection from
									// subsequent errors
									if (depth) {
										process();
									} else {

										// Call an optional hook to record the stack, in case of exception
										// since it's otherwise lost when execution goes async
										if (jQuery.Deferred.getStackHook) {
											process.stackTrace = jQuery.Deferred.getStackHook();
										}
										window.setTimeout(process);
									}
								};
							}

							return jQuery.Deferred(function (newDefer) {

								// progress_handlers.add( ... )
								tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

								// fulfilled_handlers.add( ... )
								tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));

								// rejected_handlers.add( ... )
								tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
							}).promise();
						},

						// Get a promise for this deferred
						// If obj is provided, the promise aspect is added to the object
						promise: function promise(obj) {
							return obj != null ? jQuery.extend(obj, _promise) : _promise;
						}
					},
					    deferred = {};

					// Add list-specific methods
					jQuery.each(tuples, function (i, tuple) {
						var list = tuple[2],
						    stateString = tuple[5];

						// promise.progress = list.add
						// promise.done = list.add
						// promise.fail = list.add
						_promise[tuple[1]] = list.add;

						// Handle state
						if (stateString) {
							list.add(function () {

								// state = "resolved" (i.e., fulfilled)
								// state = "rejected"
								_state = stateString;
							},

							// rejected_callbacks.disable
							// fulfilled_callbacks.disable
							tuples[3 - i][2].disable,

							// rejected_handlers.disable
							// fulfilled_handlers.disable
							tuples[3 - i][3].disable,

							// progress_callbacks.lock
							tuples[0][2].lock,

							// progress_handlers.lock
							tuples[0][3].lock);
						}

						// progress_handlers.fire
						// fulfilled_handlers.fire
						// rejected_handlers.fire
						list.add(tuple[3].fire);

						// deferred.notify = function() { deferred.notifyWith(...) }
						// deferred.resolve = function() { deferred.resolveWith(...) }
						// deferred.reject = function() { deferred.rejectWith(...) }
						deferred[tuple[0]] = function () {
							deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
							return this;
						};

						// deferred.notifyWith = list.fireWith
						// deferred.resolveWith = list.fireWith
						// deferred.rejectWith = list.fireWith
						deferred[tuple[0] + "With"] = list.fireWith;
					});

					// Make the deferred a promise
					_promise.promise(deferred);

					// Call given func if any
					if (func) {
						func.call(deferred, deferred);
					}

					// All done!
					return deferred;
				},

				// Deferred helper
				when: function when(singleValue) {
					var

					// count of uncompleted subordinates
					remaining = arguments.length,


					// count of unprocessed arguments
					i = remaining,


					// subordinate fulfillment data
					resolveContexts = Array(i),
					    resolveValues = _slice.call(arguments),


					// the master Deferred
					master = jQuery.Deferred(),


					// subordinate callback factory
					updateFunc = function updateFunc(i) {
						return function (value) {
							resolveContexts[i] = this;
							resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
							if (! --remaining) {
								master.resolveWith(resolveContexts, resolveValues);
							}
						};
					};

					// Single- and empty arguments are adopted like Promise.resolve
					if (remaining <= 1) {
						adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

						// Use .then() to unwrap secondary thenables (cf. gh-3000)
						if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {

							return master.then();
						}
					}

					// Multiple arguments are aggregated like Promise.all array elements
					while (i--) {
						adoptValue(resolveValues[i], updateFunc(i), master.reject);
					}

					return master.promise();
				}
			});

			// These usually indicate a programmer mistake during development,
			// warn about them ASAP rather than swallowing them by default.
			var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

			jQuery.Deferred.exceptionHook = function (error, stack) {

				// Support: IE 8 - 9 only
				// Console exists when dev tools are open, which can happen at any time
				if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
					window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
				}
			};

			jQuery.readyException = function (error) {
				window.setTimeout(function () {
					throw error;
				});
			};

			// The deferred used on DOM ready
			var readyList = jQuery.Deferred();

			jQuery.fn.ready = function (fn) {

				readyList.then(fn)

				// Wrap jQuery.readyException in a function so that the lookup
				// happens at the time of error handling instead of callback
				// registration.
				.catch(function (error) {
					jQuery.readyException(error);
				});

				return this;
			};

			jQuery.extend({

				// Is the DOM ready to be used? Set to true once it occurs.
				isReady: false,

				// A counter to track how many items to wait for before
				// the ready event fires. See #6781
				readyWait: 1,

				// Handle when the DOM is ready
				ready: function ready(wait) {

					// Abort if there are pending holds or we're already ready
					if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
						return;
					}

					// Remember that the DOM is ready
					jQuery.isReady = true;

					// If a normal DOM Ready event fired, decrement, and wait if need be
					if (wait !== true && --jQuery.readyWait > 0) {
						return;
					}

					// If there are functions bound, to execute
					readyList.resolveWith(document, [jQuery]);
				}
			});

			jQuery.ready.then = readyList.then;

			// The ready event handler and self cleanup method
			function completed() {
				document.removeEventListener("DOMContentLoaded", completed);
				window.removeEventListener("load", completed);
				jQuery.ready();
			}

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE <=9 - 10 only
			// Older IE sometimes signals "interactive" too soon
			if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout(jQuery.ready);
			} else {

				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed);
			}

			// Multifunctional method to get and set values of a collection
			// The value/s can optionally be executed if it's a function
			var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
				var i = 0,
				    len = elems.length,
				    bulk = key == null;

				// Sets many values
				if (toType(key) === "object") {
					chainable = true;
					for (i in key) {
						access(elems, fn, i, key[i], true, emptyGet, raw);
					}

					// Sets one value
				} else if (value !== undefined) {
					chainable = true;

					if (!isFunction(value)) {
						raw = true;
					}

					if (bulk) {

						// Bulk operations run against the entire set
						if (raw) {
							fn.call(elems, value);
							fn = null;

							// ...except when executing function values
						} else {
							bulk = fn;
							fn = function fn(elem, key, value) {
								return bulk.call(jQuery(elem), value);
							};
						}
					}

					if (fn) {
						for (; i < len; i++) {
							fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
						}
					}
				}

				if (chainable) {
					return elems;
				}

				// Gets
				if (bulk) {
					return fn.call(elems);
				}

				return len ? fn(elems[0], key) : emptyGet;
			};

			// Matches dashed string for camelizing
			var rmsPrefix = /^-ms-/,
			    rdashAlpha = /-([a-z])/g;

			// Used by camelCase as callback to replace()
			function fcamelCase(all, letter) {
				return letter.toUpperCase();
			}

			// Convert dashed to camelCase; used by the css and data modules
			// Support: IE <=9 - 11, Edge 12 - 15
			// Microsoft forgot to hump their vendor prefix (#9572)
			function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			}
			var acceptData = function acceptData(owner) {

				// Accepts only:
				//  - Node
				//    - Node.ELEMENT_NODE
				//    - Node.DOCUMENT_NODE
				//  - Object
				//    - Any
				return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
			};

			function Data() {
				this.expando = jQuery.expando + Data.uid++;
			}

			Data.uid = 1;

			Data.prototype = {

				cache: function cache(owner) {

					// Check if the owner object already has a cache
					var value = owner[this.expando];

					// If not, create one
					if (!value) {
						value = {};

						// We can accept data for non-element nodes in modern browsers,
						// but we should not, see #8335.
						// Always return an empty object.
						if (acceptData(owner)) {

							// If it is a node unlikely to be stringify-ed or looped over
							// use plain assignment
							if (owner.nodeType) {
								owner[this.expando] = value;

								// Otherwise secure it in a non-enumerable property
								// configurable must be true to allow the property to be
								// deleted when data is removed
							} else {
								Object.defineProperty(owner, this.expando, {
									value: value,
									configurable: true
								});
							}
						}
					}

					return value;
				},
				set: function set(owner, data, value) {
					var prop,
					    cache = this.cache(owner);

					// Handle: [ owner, key, value ] args
					// Always use camelCase key (gh-2257)
					if (typeof data === "string") {
						cache[camelCase(data)] = value;

						// Handle: [ owner, { properties } ] args
					} else {

						// Copy the properties one-by-one to the cache object
						for (prop in data) {
							cache[camelCase(prop)] = data[prop];
						}
					}
					return cache;
				},
				get: function get(owner, key) {
					return key === undefined ? this.cache(owner) :

					// Always use camelCase key (gh-2257)
					owner[this.expando] && owner[this.expando][camelCase(key)];
				},
				access: function access(owner, key, value) {

					// In cases where either:
					//
					//   1. No key was specified
					//   2. A string key was specified, but no value provided
					//
					// Take the "read" path and allow the get method to determine
					// which value to return, respectively either:
					//
					//   1. The entire cache object
					//   2. The data stored at the key
					//
					if (key === undefined || key && typeof key === "string" && value === undefined) {

						return this.get(owner, key);
					}

					// When the key is not a string, or both a key and value
					// are specified, set or extend (existing objects) with either:
					//
					//   1. An object of properties
					//   2. A key and value
					//
					this.set(owner, key, value);

					// Since the "set" path can have two possible entry points
					// return the expected data based on which path was taken[*]
					return value !== undefined ? value : key;
				},
				remove: function remove(owner, key) {
					var i,
					    cache = owner[this.expando];

					if (cache === undefined) {
						return;
					}

					if (key !== undefined) {

						// Support array or space separated string of keys
						if (Array.isArray(key)) {

							// If key is an array of keys...
							// We always set camelCase keys, so remove that.
							key = key.map(camelCase);
						} else {
							key = camelCase(key);

							// If a key with the spaces exists, use it.
							// Otherwise, create an array by matching non-whitespace
							key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
						}

						i = key.length;

						while (i--) {
							delete cache[key[i]];
						}
					}

					// Remove the expando if there's no more data
					if (key === undefined || jQuery.isEmptyObject(cache)) {

						// Support: Chrome <=35 - 45
						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
						if (owner.nodeType) {
							owner[this.expando] = undefined;
						} else {
							delete owner[this.expando];
						}
					}
				},
				hasData: function hasData(owner) {
					var cache = owner[this.expando];
					return cache !== undefined && !jQuery.isEmptyObject(cache);
				}
			};
			var dataPriv = new Data();

			var dataUser = new Data();

			//	Implementation Summary
			//
			//	1. Enforce API surface and semantic compatibility with 1.9.x branch
			//	2. Improve the module's maintainability by reducing the storage
			//		paths to a single mechanism.
			//	3. Use the same single mechanism to support "private" and "user" data.
			//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
			//	5. Avoid exposing implementation details on user objects (eg. expando properties)
			//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

			var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			    rmultiDash = /[A-Z]/g;

			function getData(data) {
				if (data === "true") {
					return true;
				}

				if (data === "false") {
					return false;
				}

				if (data === "null") {
					return null;
				}

				// Only convert to a number if it doesn't change the string
				if (data === +data + "") {
					return +data;
				}

				if (rbrace.test(data)) {
					return JSON.parse(data);
				}

				return data;
			}

			function dataAttr(elem, key, data) {
				var name;

				// If nothing was found internally, try to fetch any
				// data from the HTML5 data-* attribute
				if (data === undefined && elem.nodeType === 1) {
					name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
					data = elem.getAttribute(name);

					if (typeof data === "string") {
						try {
							data = getData(data);
						} catch (e) {}

						// Make sure we set the data so it isn't changed later
						dataUser.set(elem, key, data);
					} else {
						data = undefined;
					}
				}
				return data;
			}

			jQuery.extend({
				hasData: function hasData(elem) {
					return dataUser.hasData(elem) || dataPriv.hasData(elem);
				},

				data: function data(elem, name, _data) {
					return dataUser.access(elem, name, _data);
				},

				removeData: function removeData(elem, name) {
					dataUser.remove(elem, name);
				},

				// TODO: Now that all calls to _data and _removeData have been replaced
				// with direct calls to dataPriv methods, these can be deprecated.
				_data: function _data(elem, name, data) {
					return dataPriv.access(elem, name, data);
				},

				_removeData: function _removeData(elem, name) {
					dataPriv.remove(elem, name);
				}
			});

			jQuery.fn.extend({
				data: function data(key, value) {
					var i,
					    name,
					    data,
					    elem = this[0],
					    attrs = elem && elem.attributes;

					// Gets all values
					if (key === undefined) {
						if (this.length) {
							data = dataUser.get(elem);

							if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
								i = attrs.length;
								while (i--) {

									// Support: IE 11 only
									// The attrs elements can be null (#14894)
									if (attrs[i]) {
										name = attrs[i].name;
										if (name.indexOf("data-") === 0) {
											name = camelCase(name.slice(5));
											dataAttr(elem, name, data[name]);
										}
									}
								}
								dataPriv.set(elem, "hasDataAttrs", true);
							}
						}

						return data;
					}

					// Sets multiple values
					if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === "object") {
						return this.each(function () {
							dataUser.set(this, key);
						});
					}

					return access(this, function (value) {
						var data;

						// The calling jQuery object (element matches) is not empty
						// (and therefore has an element appears at this[ 0 ]) and the
						// `value` parameter was not undefined. An empty jQuery object
						// will result in `undefined` for elem = this[ 0 ] which will
						// throw an exception if an attempt to read a data cache is made.
						if (elem && value === undefined) {

							// Attempt to get data from the cache
							// The key will always be camelCased in Data
							data = dataUser.get(elem, key);
							if (data !== undefined) {
								return data;
							}

							// Attempt to "discover" the data in
							// HTML5 custom data-* attrs
							data = dataAttr(elem, key);
							if (data !== undefined) {
								return data;
							}

							// We tried really hard, but the data doesn't exist.
							return;
						}

						// Set the data...
						this.each(function () {

							// We always store the camelCased key
							dataUser.set(this, key, value);
						});
					}, null, value, arguments.length > 1, null, true);
				},

				removeData: function removeData(key) {
					return this.each(function () {
						dataUser.remove(this, key);
					});
				}
			});

			jQuery.extend({
				queue: function queue(elem, type, data) {
					var queue;

					if (elem) {
						type = (type || "fx") + "queue";
						queue = dataPriv.get(elem, type);

						// Speed up dequeue by getting out quickly if this is just a lookup
						if (data) {
							if (!queue || Array.isArray(data)) {
								queue = dataPriv.access(elem, type, jQuery.makeArray(data));
							} else {
								queue.push(data);
							}
						}
						return queue || [];
					}
				},

				dequeue: function dequeue(elem, type) {
					type = type || "fx";

					var queue = jQuery.queue(elem, type),
					    startLength = queue.length,
					    fn = queue.shift(),
					    hooks = jQuery._queueHooks(elem, type),
					    next = function next() {
						jQuery.dequeue(elem, type);
					};

					// If the fx queue is dequeued, always remove the progress sentinel
					if (fn === "inprogress") {
						fn = queue.shift();
						startLength--;
					}

					if (fn) {

						// Add a progress sentinel to prevent the fx queue from being
						// automatically dequeued
						if (type === "fx") {
							queue.unshift("inprogress");
						}

						// Clear up the last queue stop function
						delete hooks.stop;
						fn.call(elem, next, hooks);
					}

					if (!startLength && hooks) {
						hooks.empty.fire();
					}
				},

				// Not public - generate a queueHooks object, or return the current one
				_queueHooks: function _queueHooks(elem, type) {
					var key = type + "queueHooks";
					return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
						empty: jQuery.Callbacks("once memory").add(function () {
							dataPriv.remove(elem, [type + "queue", key]);
						})
					});
				}
			});

			jQuery.fn.extend({
				queue: function queue(type, data) {
					var setter = 2;

					if (typeof type !== "string") {
						data = type;
						type = "fx";
						setter--;
					}

					if (arguments.length < setter) {
						return jQuery.queue(this[0], type);
					}

					return data === undefined ? this : this.each(function () {
						var queue = jQuery.queue(this, type, data);

						// Ensure a hooks for this queue
						jQuery._queueHooks(this, type);

						if (type === "fx" && queue[0] !== "inprogress") {
							jQuery.dequeue(this, type);
						}
					});
				},
				dequeue: function dequeue(type) {
					return this.each(function () {
						jQuery.dequeue(this, type);
					});
				},
				clearQueue: function clearQueue(type) {
					return this.queue(type || "fx", []);
				},

				// Get a promise resolved when queues of a certain type
				// are emptied (fx is the type by default)
				promise: function promise(type, obj) {
					var tmp,
					    count = 1,
					    defer = jQuery.Deferred(),
					    elements = this,
					    i = this.length,
					    resolve = function resolve() {
						if (! --count) {
							defer.resolveWith(elements, [elements]);
						}
					};

					if (typeof type !== "string") {
						obj = type;
						type = undefined;
					}
					type = type || "fx";

					while (i--) {
						tmp = dataPriv.get(elements[i], type + "queueHooks");
						if (tmp && tmp.empty) {
							count++;
							tmp.empty.add(resolve);
						}
					}
					resolve();
					return defer.promise(obj);
				}
			});
			var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

			var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

			var cssExpand = ["Top", "Right", "Bottom", "Left"];

			var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

				// isHiddenWithinTree might be called from jQuery#filter function;
				// in that case, element will be second argument
				elem = el || elem;

				// Inline style trumps all
				return elem.style.display === "none" || elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
			};

			var swap = function swap(elem, options, callback, args) {
				var ret,
				    name,
				    old = {};

				// Remember the old values, and insert the new ones
				for (name in options) {
					old[name] = elem.style[name];
					elem.style[name] = options[name];
				}

				ret = callback.apply(elem, args || []);

				// Revert the old values
				for (name in options) {
					elem.style[name] = old[name];
				}

				return ret;
			};

			function adjustCSS(elem, prop, valueParts, tween) {
				var adjusted,
				    scale,
				    maxIterations = 20,
				    currentValue = tween ? function () {
					return tween.cur();
				} : function () {
					return jQuery.css(elem, prop, "");
				},
				    initial = currentValue(),
				    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


				// Starting value computation is required for potential unit mismatches
				initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

				if (initialInUnit && initialInUnit[3] !== unit) {

					// Support: Firefox <=54
					// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
					initial = initial / 2;

					// Trust units reported by jQuery.css
					unit = unit || initialInUnit[3];

					// Iteratively approximate from a nonzero starting point
					initialInUnit = +initial || 1;

					while (maxIterations--) {

						// Evaluate and update our best guess (doubling guesses that zero out).
						// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
						jQuery.style(elem, prop, initialInUnit + unit);
						if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
							maxIterations = 0;
						}
						initialInUnit = initialInUnit / scale;
					}

					initialInUnit = initialInUnit * 2;
					jQuery.style(elem, prop, initialInUnit + unit);

					// Make sure we update the tween properties later on
					valueParts = valueParts || [];
				}

				if (valueParts) {
					initialInUnit = +initialInUnit || +initial || 0;

					// Apply relative offset (+=/-=) if specified
					adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
					if (tween) {
						tween.unit = unit;
						tween.start = initialInUnit;
						tween.end = adjusted;
					}
				}
				return adjusted;
			}

			var defaultDisplayMap = {};

			function getDefaultDisplay(elem) {
				var temp,
				    doc = elem.ownerDocument,
				    nodeName = elem.nodeName,
				    display = defaultDisplayMap[nodeName];

				if (display) {
					return display;
				}

				temp = doc.body.appendChild(doc.createElement(nodeName));
				display = jQuery.css(temp, "display");

				temp.parentNode.removeChild(temp);

				if (display === "none") {
					display = "block";
				}
				defaultDisplayMap[nodeName] = display;

				return display;
			}

			function showHide(elements, show) {
				var display,
				    elem,
				    values = [],
				    index = 0,
				    length = elements.length;

				// Determine new display value for elements that need to change
				for (; index < length; index++) {
					elem = elements[index];
					if (!elem.style) {
						continue;
					}

					display = elem.style.display;
					if (show) {

						// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
						// check is required in this first loop unless we have a nonempty display value (either
						// inline or about-to-be-restored)
						if (display === "none") {
							values[index] = dataPriv.get(elem, "display") || null;
							if (!values[index]) {
								elem.style.display = "";
							}
						}
						if (elem.style.display === "" && isHiddenWithinTree(elem)) {
							values[index] = getDefaultDisplay(elem);
						}
					} else {
						if (display !== "none") {
							values[index] = "none";

							// Remember what we're overwriting
							dataPriv.set(elem, "display", display);
						}
					}
				}

				// Set the display of the elements in a second loop to avoid constant reflow
				for (index = 0; index < length; index++) {
					if (values[index] != null) {
						elements[index].style.display = values[index];
					}
				}

				return elements;
			}

			jQuery.fn.extend({
				show: function show() {
					return showHide(this, true);
				},
				hide: function hide() {
					return showHide(this);
				},
				toggle: function toggle(state) {
					if (typeof state === "boolean") {
						return state ? this.show() : this.hide();
					}

					return this.each(function () {
						if (isHiddenWithinTree(this)) {
							jQuery(this).show();
						} else {
							jQuery(this).hide();
						}
					});
				}
			});
			var rcheckableType = /^(?:checkbox|radio)$/i;

			var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

			var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

			// We have to close these tags to support XHTML (#13200)
			var wrapMap = {

				// Support: IE <=9 only
				option: [1, "<select multiple='multiple'>", "</select>"],

				// XHTML parsers do not magically insert elements in the
				// same way that tag soup parsers do. So we cannot shorten
				// this by omitting <tbody> or other required elements.
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

				_default: [0, "", ""]
			};

			// Support: IE <=9 only
			wrapMap.optgroup = wrapMap.option;

			wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
			wrapMap.th = wrapMap.td;

			function getAll(context, tag) {

				// Support: IE <=9 - 11 only
				// Use typeof to avoid zero-argument method invocation on host objects (#15151)
				var ret;

				if (typeof context.getElementsByTagName !== "undefined") {
					ret = context.getElementsByTagName(tag || "*");
				} else if (typeof context.querySelectorAll !== "undefined") {
					ret = context.querySelectorAll(tag || "*");
				} else {
					ret = [];
				}

				if (tag === undefined || tag && nodeName(context, tag)) {
					return jQuery.merge([context], ret);
				}

				return ret;
			}

			// Mark scripts as having already been evaluated
			function setGlobalEval(elems, refElements) {
				var i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
				}
			}

			var rhtml = /<|&#?\w+;/;

			function buildFragment(elems, context, scripts, selection, ignored) {
				var elem,
				    tmp,
				    tag,
				    wrap,
				    contains,
				    j,
				    fragment = context.createDocumentFragment(),
				    nodes = [],
				    i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					elem = elems[i];

					if (elem || elem === 0) {

						// Add nodes directly
						if (toType(elem) === "object") {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

							// Convert non-html into a text node
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));

							// Convert html into DOM nodes
						} else {
							tmp = tmp || fragment.appendChild(context.createElement("div"));

							// Deserialize a standard representation
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
							tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

							// Descend through wrappers to the right content
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(nodes, tmp.childNodes);

							// Remember the top-level container
							tmp = fragment.firstChild;

							// Ensure the created nodes are orphaned (#12392)
							tmp.textContent = "";
						}
					}
				}

				// Remove wrapper from fragment
				fragment.textContent = "";

				i = 0;
				while (elem = nodes[i++]) {

					// Skip elements already in the context collection (trac-4087)
					if (selection && jQuery.inArray(elem, selection) > -1) {
						if (ignored) {
							ignored.push(elem);
						}
						continue;
					}

					contains = jQuery.contains(elem.ownerDocument, elem);

					// Append to fragment
					tmp = getAll(fragment.appendChild(elem), "script");

					// Preserve script evaluation history
					if (contains) {
						setGlobalEval(tmp);
					}

					// Capture executables
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}

				return fragment;
			}

			(function () {
				var fragment = document.createDocumentFragment(),
				    div = fragment.appendChild(document.createElement("div")),
				    input = document.createElement("input");

				// Support: Android 4.0 - 4.3 only
				// Check state lost if the name is set (#11217)
				// Support: Windows Web Apps (WWA)
				// `name` and `type` must use .setAttribute for WWA (#14901)
				input.setAttribute("type", "radio");
				input.setAttribute("checked", "checked");
				input.setAttribute("name", "t");

				div.appendChild(input);

				// Support: Android <=4.1 only
				// Older WebKit doesn't clone checked state correctly in fragments
				support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

				// Support: IE <=11 only
				// Make sure textarea (and checkbox) defaultValue is properly cloned
				div.innerHTML = "<textarea>x</textarea>";
				support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
			})();
			var documentElement = document.documentElement;

			var rkeyEvent = /^key/,
			    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

			function returnTrue() {
				return true;
			}

			function returnFalse() {
				return false;
			}

			// Support: IE <=9 only
			// See #13393 for more info
			function safeActiveElement() {
				try {
					return document.activeElement;
				} catch (err) {}
			}

			function _on(elem, types, selector, data, fn, one) {
				var origFn, type;

				// Types can be a map of types/handlers
				if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === "object") {

					// ( types-Object, selector, data )
					if (typeof selector !== "string") {

						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						_on(elem, type, selector, data, types[type], one);
					}
					return elem;
				}

				if (data == null && fn == null) {

					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {

						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {

						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return elem;
				}

				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {

						// Can use an empty set, since event contains the info
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};

					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return elem.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			}

			/*
    * Helper functions for managing events -- not part of the public interface.
    * Props to Dean Edwards' addEvent library for many of the ideas.
    */
			jQuery.event = {

				global: {},

				add: function add(elem, types, handler, data, selector) {

					var handleObjIn,
					    eventHandle,
					    tmp,
					    events,
					    t,
					    handleObj,
					    special,
					    handlers,
					    type,
					    namespaces,
					    origType,
					    elemData = dataPriv.get(elem);

					// Don't attach events to noData or text/comment nodes (but allow plain objects)
					if (!elemData) {
						return;
					}

					// Caller can pass in an object of custom data in lieu of the handler
					if (handler.handler) {
						handleObjIn = handler;
						handler = handleObjIn.handler;
						selector = handleObjIn.selector;
					}

					// Ensure that invalid selectors throw exceptions at attach time
					// Evaluate against documentElement in case elem is a non-element node (e.g., document)
					if (selector) {
						jQuery.find.matchesSelector(documentElement, selector);
					}

					// Make sure that the handler has a unique ID, used to find/remove it later
					if (!handler.guid) {
						handler.guid = jQuery.guid++;
					}

					// Init the element's event structure and main handler, if this is the first
					if (!(events = elemData.events)) {
						events = elemData.events = {};
					}
					if (!(eventHandle = elemData.handle)) {
						eventHandle = elemData.handle = function (e) {

							// Discard the second event of a jQuery.event.trigger() and
							// when an event is called after a page has unloaded
							return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
						};
					}

					// Handle multiple events separated by a space
					types = (types || "").match(rnothtmlwhite) || [""];
					t = types.length;
					while (t--) {
						tmp = rtypenamespace.exec(types[t]) || [];
						type = origType = tmp[1];
						namespaces = (tmp[2] || "").split(".").sort();

						// There *must* be a type, no attaching namespace-only handlers
						if (!type) {
							continue;
						}

						// If event changes its type, use the special event handlers for the changed type
						special = jQuery.event.special[type] || {};

						// If selector defined, determine special event api type, otherwise given type
						type = (selector ? special.delegateType : special.bindType) || type;

						// Update special based on newly reset type
						special = jQuery.event.special[type] || {};

						// handleObj is passed to all event handlers
						handleObj = jQuery.extend({
							type: type,
							origType: origType,
							data: data,
							handler: handler,
							guid: handler.guid,
							selector: selector,
							needsContext: selector && jQuery.expr.match.needsContext.test(selector),
							namespace: namespaces.join(".")
						}, handleObjIn);

						// Init the event handler queue if we're the first
						if (!(handlers = events[type])) {
							handlers = events[type] = [];
							handlers.delegateCount = 0;

							// Only use addEventListener if the special events handler returns false
							if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

								if (elem.addEventListener) {
									elem.addEventListener(type, eventHandle);
								}
							}
						}

						if (special.add) {
							special.add.call(elem, handleObj);

							if (!handleObj.handler.guid) {
								handleObj.handler.guid = handler.guid;
							}
						}

						// Add to the element's handler list, delegates in front
						if (selector) {
							handlers.splice(handlers.delegateCount++, 0, handleObj);
						} else {
							handlers.push(handleObj);
						}

						// Keep track of which events have ever been used, for event optimization
						jQuery.event.global[type] = true;
					}
				},

				// Detach an event or set of events from an element
				remove: function remove(elem, types, handler, selector, mappedTypes) {

					var j,
					    origCount,
					    tmp,
					    events,
					    t,
					    handleObj,
					    special,
					    handlers,
					    type,
					    namespaces,
					    origType,
					    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

					if (!elemData || !(events = elemData.events)) {
						return;
					}

					// Once for each type.namespace in types; type may be omitted
					types = (types || "").match(rnothtmlwhite) || [""];
					t = types.length;
					while (t--) {
						tmp = rtypenamespace.exec(types[t]) || [];
						type = origType = tmp[1];
						namespaces = (tmp[2] || "").split(".").sort();

						// Unbind all events (on this namespace, if provided) for the element
						if (!type) {
							for (type in events) {
								jQuery.event.remove(elem, type + types[t], handler, selector, true);
							}
							continue;
						}

						special = jQuery.event.special[type] || {};
						type = (selector ? special.delegateType : special.bindType) || type;
						handlers = events[type] || [];
						tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

						// Remove matching events
						origCount = j = handlers.length;
						while (j--) {
							handleObj = handlers[j];

							if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
								handlers.splice(j, 1);

								if (handleObj.selector) {
									handlers.delegateCount--;
								}
								if (special.remove) {
									special.remove.call(elem, handleObj);
								}
							}
						}

						// Remove generic event handler if we removed something and no more handlers exist
						// (avoids potential for endless recursion during removal of special event handlers)
						if (origCount && !handlers.length) {
							if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

								jQuery.removeEvent(elem, type, elemData.handle);
							}

							delete events[type];
						}
					}

					// Remove data and the expando if it's no longer used
					if (jQuery.isEmptyObject(events)) {
						dataPriv.remove(elem, "handle events");
					}
				},

				dispatch: function dispatch(nativeEvent) {

					// Make a writable jQuery.Event from the native event object
					var event = jQuery.event.fix(nativeEvent);

					var i,
					    j,
					    ret,
					    matched,
					    handleObj,
					    handlerQueue,
					    args = new Array(arguments.length),
					    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
					    special = jQuery.event.special[event.type] || {};

					// Use the fix-ed jQuery.Event rather than the (read-only) native event
					args[0] = event;

					for (i = 1; i < arguments.length; i++) {
						args[i] = arguments[i];
					}

					event.delegateTarget = this;

					// Call the preDispatch hook for the mapped type, and let it bail if desired
					if (special.preDispatch && special.preDispatch.call(this, event) === false) {
						return;
					}

					// Determine handlers
					handlerQueue = jQuery.event.handlers.call(this, event, handlers);

					// Run delegates first; they may want to stop propagation beneath us
					i = 0;
					while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
						event.currentTarget = matched.elem;

						j = 0;
						while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

							// Triggered event must either 1) have no namespace, or 2) have namespace(s)
							// a subset or equal to those in the bound event (both can have no namespace).
							if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

								event.handleObj = handleObj;
								event.data = handleObj.data;

								ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

								if (ret !== undefined) {
									if ((event.result = ret) === false) {
										event.preventDefault();
										event.stopPropagation();
									}
								}
							}
						}
					}

					// Call the postDispatch hook for the mapped type
					if (special.postDispatch) {
						special.postDispatch.call(this, event);
					}

					return event.result;
				},

				handlers: function handlers(event, _handlers) {
					var i,
					    handleObj,
					    sel,
					    matchedHandlers,
					    matchedSelectors,
					    handlerQueue = [],
					    delegateCount = _handlers.delegateCount,
					    cur = event.target;

					// Find delegate handlers
					if (delegateCount &&

					// Support: IE <=9
					// Black-hole SVG <use> instance trees (trac-13180)
					cur.nodeType &&

					// Support: Firefox <=42
					// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
					// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
					// Support: IE 11 only
					// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
					!(event.type === "click" && event.button >= 1)) {

						for (; cur !== this; cur = cur.parentNode || this) {

							// Don't check non-elements (#13208)
							// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
							if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
								matchedHandlers = [];
								matchedSelectors = {};
								for (i = 0; i < delegateCount; i++) {
									handleObj = _handlers[i];

									// Don't conflict with Object.prototype properties (#13203)
									sel = handleObj.selector + " ";

									if (matchedSelectors[sel] === undefined) {
										matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
									}
									if (matchedSelectors[sel]) {
										matchedHandlers.push(handleObj);
									}
								}
								if (matchedHandlers.length) {
									handlerQueue.push({ elem: cur, handlers: matchedHandlers });
								}
							}
						}
					}

					// Add the remaining (directly-bound) handlers
					cur = this;
					if (delegateCount < _handlers.length) {
						handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
					}

					return handlerQueue;
				},

				addProp: function addProp(name, hook) {
					Object.defineProperty(jQuery.Event.prototype, name, {
						enumerable: true,
						configurable: true,

						get: isFunction(hook) ? function () {
							if (this.originalEvent) {
								return hook(this.originalEvent);
							}
						} : function () {
							if (this.originalEvent) {
								return this.originalEvent[name];
							}
						},

						set: function set(value) {
							Object.defineProperty(this, name, {
								enumerable: true,
								configurable: true,
								writable: true,
								value: value
							});
						}
					});
				},

				fix: function fix(originalEvent) {
					return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
				},

				special: {
					load: {

						// Prevent triggered image.load events from bubbling to window.load
						noBubble: true
					},
					focus: {

						// Fire native event if possible so blur/focus sequence is correct
						trigger: function trigger() {
							if (this !== safeActiveElement() && this.focus) {
								this.focus();
								return false;
							}
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function trigger() {
							if (this === safeActiveElement() && this.blur) {
								this.blur();
								return false;
							}
						},
						delegateType: "focusout"
					},
					click: {

						// For checkbox, fire native event so checked state will be right
						trigger: function trigger() {
							if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
								this.click();
								return false;
							}
						},

						// For cross-browser consistency, don't fire native .click() on links
						_default: function _default(event) {
							return nodeName(event.target, "a");
						}
					},

					beforeunload: {
						postDispatch: function postDispatch(event) {

							// Support: Firefox 20+
							// Firefox doesn't alert if the returnValue field is not set.
							if (event.result !== undefined && event.originalEvent) {
								event.originalEvent.returnValue = event.result;
							}
						}
					}
				}
			};

			jQuery.removeEvent = function (elem, type, handle) {

				// This "if" is needed for plain objects
				if (elem.removeEventListener) {
					elem.removeEventListener(type, handle);
				}
			};

			jQuery.Event = function (src, props) {

				// Allow instantiation without the 'new' keyword
				if (!(this instanceof jQuery.Event)) {
					return new jQuery.Event(src, props);
				}

				// Event object
				if (src && src.type) {
					this.originalEvent = src;
					this.type = src.type;

					// Events bubbling up the document may have been marked as prevented
					// by a handler lower down the tree; reflect the correct value.
					this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ? returnTrue : returnFalse;

					// Create target properties
					// Support: Safari <=6 - 7 only
					// Target should not be a text node (#504, #13143)
					this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

					this.currentTarget = src.currentTarget;
					this.relatedTarget = src.relatedTarget;

					// Event type
				} else {
					this.type = src;
				}

				// Put explicitly provided properties onto the event object
				if (props) {
					jQuery.extend(this, props);
				}

				// Create a timestamp if incoming event doesn't have one
				this.timeStamp = src && src.timeStamp || Date.now();

				// Mark it as fixed
				this[jQuery.expando] = true;
			};

			// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
			// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
			jQuery.Event.prototype = {
				constructor: jQuery.Event,
				isDefaultPrevented: returnFalse,
				isPropagationStopped: returnFalse,
				isImmediatePropagationStopped: returnFalse,
				isSimulated: false,

				preventDefault: function preventDefault() {
					var e = this.originalEvent;

					this.isDefaultPrevented = returnTrue;

					if (e && !this.isSimulated) {
						e.preventDefault();
					}
				},
				stopPropagation: function stopPropagation() {
					var e = this.originalEvent;

					this.isPropagationStopped = returnTrue;

					if (e && !this.isSimulated) {
						e.stopPropagation();
					}
				},
				stopImmediatePropagation: function stopImmediatePropagation() {
					var e = this.originalEvent;

					this.isImmediatePropagationStopped = returnTrue;

					if (e && !this.isSimulated) {
						e.stopImmediatePropagation();
					}

					this.stopPropagation();
				}
			};

			// Includes all common event props including KeyEvent and MouseEvent specific props
			jQuery.each({
				altKey: true,
				bubbles: true,
				cancelable: true,
				changedTouches: true,
				ctrlKey: true,
				detail: true,
				eventPhase: true,
				metaKey: true,
				pageX: true,
				pageY: true,
				shiftKey: true,
				view: true,
				"char": true,
				charCode: true,
				key: true,
				keyCode: true,
				button: true,
				buttons: true,
				clientX: true,
				clientY: true,
				offsetX: true,
				offsetY: true,
				pointerId: true,
				pointerType: true,
				screenX: true,
				screenY: true,
				targetTouches: true,
				toElement: true,
				touches: true,

				which: function which(event) {
					var button = event.button;

					// Add which for key events
					if (event.which == null && rkeyEvent.test(event.type)) {
						return event.charCode != null ? event.charCode : event.keyCode;
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
						if (button & 1) {
							return 1;
						}

						if (button & 2) {
							return 3;
						}

						if (button & 4) {
							return 2;
						}

						return 0;
					}

					return event.which;
				}
			}, jQuery.event.addProp);

			// Create mouseenter/leave events using mouseover/out and event-time checks
			// so that event delegation works in jQuery.
			// Do the same for pointerenter/pointerleave and pointerover/pointerout
			//
			// Support: Safari 7 only
			// Safari sends mouseenter too often; see:
			// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
			// for the description of the bug (it existed in older Chrome versions as well).
			jQuery.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function (orig, fix) {
				jQuery.event.special[orig] = {
					delegateType: fix,
					bindType: fix,

					handle: function handle(event) {
						var ret,
						    target = this,
						    related = event.relatedTarget,
						    handleObj = event.handleObj;

						// For mouseenter/leave call the handler if related is outside the target.
						// NB: No relatedTarget if the mouse left/entered the browser window
						if (!related || related !== target && !jQuery.contains(target, related)) {
							event.type = handleObj.origType;
							ret = handleObj.handler.apply(this, arguments);
							event.type = fix;
						}
						return ret;
					}
				};
			});

			jQuery.fn.extend({

				on: function on(types, selector, data, fn) {
					return _on(this, types, selector, data, fn);
				},
				one: function one(types, selector, data, fn) {
					return _on(this, types, selector, data, fn, 1);
				},
				off: function off(types, selector, fn) {
					var handleObj, type;
					if (types && types.preventDefault && types.handleObj) {

						// ( event )  dispatched jQuery.Event
						handleObj = types.handleObj;
						jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
						return this;
					}
					if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === "object") {

						// ( types-object [, selector] )
						for (type in types) {
							this.off(type, selector, types[type]);
						}
						return this;
					}
					if (selector === false || typeof selector === "function") {

						// ( types [, fn] )
						fn = selector;
						selector = undefined;
					}
					if (fn === false) {
						fn = returnFalse;
					}
					return this.each(function () {
						jQuery.event.remove(this, types, fn, selector);
					});
				}
			});

			var

			/* eslint-disable max-len */

			// See https://github.com/eslint/eslint/issues/3229
			rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


			/* eslint-enable */

			// Support: IE <=10 - 11, Edge 12 - 13 only
			// In IE/Edge using regex groups here causes severe slowdowns.
			// See https://connect.microsoft.com/IE/feedback/details/1736512/
			rnoInnerhtml = /<script|<style|<link/i,


			// checked="checked" or checked
			rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
			    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

			// Prefer a tbody over its parent table for containing new rows
			function manipulationTarget(elem, content) {
				if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

					return jQuery(elem).children("tbody")[0] || elem;
				}

				return elem;
			}

			// Replace/restore the type attribute of script elements for safe DOM manipulation
			function disableScript(elem) {
				elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
				return elem;
			}
			function restoreScript(elem) {
				if ((elem.type || "").slice(0, 5) === "true/") {
					elem.type = elem.type.slice(5);
				} else {
					elem.removeAttribute("type");
				}

				return elem;
			}

			function cloneCopyEvent(src, dest) {
				var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

				if (dest.nodeType !== 1) {
					return;
				}

				// 1. Copy private data: events, handlers, etc.
				if (dataPriv.hasData(src)) {
					pdataOld = dataPriv.access(src);
					pdataCur = dataPriv.set(dest, pdataOld);
					events = pdataOld.events;

					if (events) {
						delete pdataCur.handle;
						pdataCur.events = {};

						for (type in events) {
							for (i = 0, l = events[type].length; i < l; i++) {
								jQuery.event.add(dest, type, events[type][i]);
							}
						}
					}
				}

				// 2. Copy user data
				if (dataUser.hasData(src)) {
					udataOld = dataUser.access(src);
					udataCur = jQuery.extend({}, udataOld);

					dataUser.set(dest, udataCur);
				}
			}

			// Fix IE bugs, see support tests
			function fixInput(src, dest) {
				var nodeName = dest.nodeName.toLowerCase();

				// Fails to persist the checked state of a cloned checkbox or radio button.
				if (nodeName === "input" && rcheckableType.test(src.type)) {
					dest.checked = src.checked;

					// Fails to return the selected option to the default selected state when cloning options
				} else if (nodeName === "input" || nodeName === "textarea") {
					dest.defaultValue = src.defaultValue;
				}
			}

			function domManip(collection, args, callback, ignored) {

				// Flatten any nested arrays
				args = concat.apply([], args);

				var fragment,
				    first,
				    scripts,
				    hasScripts,
				    node,
				    doc,
				    i = 0,
				    l = collection.length,
				    iNoClone = l - 1,
				    value = args[0],
				    valueIsFunction = isFunction(value);

				// We can't cloneNode fragments that contain checked, in WebKit
				if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return collection.each(function (index) {
						var self = collection.eq(index);
						if (valueIsFunction) {
							args[0] = value.call(this, index, self.html());
						}
						domManip(self, args, callback, ignored);
					});
				}

				if (l) {
					fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
					first = fragment.firstChild;

					if (fragment.childNodes.length === 1) {
						fragment = first;
					}

					// Require either new content or an interest in ignored elements to invoke the callback
					if (first || ignored) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;

						// Use the original fragment for the last item
						// instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for (; i < l; i++) {
							node = fragment;

							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);

								// Keep references to cloned scripts for later restoration
								if (hasScripts) {

									// Support: Android <=4.0 only, PhantomJS 1 only
									// push.apply(_, arraylike) throws on ancient WebKit
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}

							callback.call(collection[i], node, i);
						}

						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;

							// Reenable scripts
							jQuery.map(scripts, restoreScript);

							// Evaluate executable scripts on first document insertion
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

									if (node.src && (node.type || "").toLowerCase() !== "module") {

										// Optional AJAX dependency, but won't run scripts if not present
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
									}
								}
							}
						}
					}
				}

				return collection;
			}

			function _remove(elem, selector, keepData) {
				var node,
				    nodes = selector ? jQuery.filter(selector, elem) : elem,
				    i = 0;

				for (; (node = nodes[i]) != null; i++) {
					if (!keepData && node.nodeType === 1) {
						jQuery.cleanData(getAll(node));
					}

					if (node.parentNode) {
						if (keepData && jQuery.contains(node.ownerDocument, node)) {
							setGlobalEval(getAll(node, "script"));
						}
						node.parentNode.removeChild(node);
					}
				}

				return elem;
			}

			jQuery.extend({
				htmlPrefilter: function htmlPrefilter(html) {
					return html.replace(rxhtmlTag, "<$1></$2>");
				},

				clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
					var i,
					    l,
					    srcElements,
					    destElements,
					    clone = elem.cloneNode(true),
					    inPage = jQuery.contains(elem.ownerDocument, elem);

					// Fix IE cloning issues
					if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

						// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
						destElements = getAll(clone);
						srcElements = getAll(elem);

						for (i = 0, l = srcElements.length; i < l; i++) {
							fixInput(srcElements[i], destElements[i]);
						}
					}

					// Copy the events from the original to the clone
					if (dataAndEvents) {
						if (deepDataAndEvents) {
							srcElements = srcElements || getAll(elem);
							destElements = destElements || getAll(clone);

							for (i = 0, l = srcElements.length; i < l; i++) {
								cloneCopyEvent(srcElements[i], destElements[i]);
							}
						} else {
							cloneCopyEvent(elem, clone);
						}
					}

					// Preserve script evaluation history
					destElements = getAll(clone, "script");
					if (destElements.length > 0) {
						setGlobalEval(destElements, !inPage && getAll(elem, "script"));
					}

					// Return the cloned set
					return clone;
				},

				cleanData: function cleanData(elems) {
					var data,
					    elem,
					    type,
					    special = jQuery.event.special,
					    i = 0;

					for (; (elem = elems[i]) !== undefined; i++) {
						if (acceptData(elem)) {
							if (data = elem[dataPriv.expando]) {
								if (data.events) {
									for (type in data.events) {
										if (special[type]) {
											jQuery.event.remove(elem, type);

											// This is a shortcut to avoid jQuery.event.remove's overhead
										} else {
											jQuery.removeEvent(elem, type, data.handle);
										}
									}
								}

								// Support: Chrome <=35 - 45+
								// Assign undefined instead of using delete, see Data#remove
								elem[dataPriv.expando] = undefined;
							}
							if (elem[dataUser.expando]) {

								// Support: Chrome <=35 - 45+
								// Assign undefined instead of using delete, see Data#remove
								elem[dataUser.expando] = undefined;
							}
						}
					}
				}
			});

			jQuery.fn.extend({
				detach: function detach(selector) {
					return _remove(this, selector, true);
				},

				remove: function remove(selector) {
					return _remove(this, selector);
				},

				text: function text(value) {
					return access(this, function (value) {
						return value === undefined ? jQuery.text(this) : this.empty().each(function () {
							if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
								this.textContent = value;
							}
						});
					}, null, value, arguments.length);
				},

				append: function append() {
					return domManip(this, arguments, function (elem) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							var target = manipulationTarget(this, elem);
							target.appendChild(elem);
						}
					});
				},

				prepend: function prepend() {
					return domManip(this, arguments, function (elem) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							var target = manipulationTarget(this, elem);
							target.insertBefore(elem, target.firstChild);
						}
					});
				},

				before: function before() {
					return domManip(this, arguments, function (elem) {
						if (this.parentNode) {
							this.parentNode.insertBefore(elem, this);
						}
					});
				},

				after: function after() {
					return domManip(this, arguments, function (elem) {
						if (this.parentNode) {
							this.parentNode.insertBefore(elem, this.nextSibling);
						}
					});
				},

				empty: function empty() {
					var elem,
					    i = 0;

					for (; (elem = this[i]) != null; i++) {
						if (elem.nodeType === 1) {

							// Prevent memory leaks
							jQuery.cleanData(getAll(elem, false));

							// Remove any remaining nodes
							elem.textContent = "";
						}
					}

					return this;
				},

				clone: function clone(dataAndEvents, deepDataAndEvents) {
					dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
					deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

					return this.map(function () {
						return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
					});
				},

				html: function html(value) {
					return access(this, function (value) {
						var elem = this[0] || {},
						    i = 0,
						    l = this.length;

						if (value === undefined && elem.nodeType === 1) {
							return elem.innerHTML;
						}

						// See if we can take a shortcut and just use innerHTML
						if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

							value = jQuery.htmlPrefilter(value);

							try {
								for (; i < l; i++) {
									elem = this[i] || {};

									// Remove element nodes and prevent memory leaks
									if (elem.nodeType === 1) {
										jQuery.cleanData(getAll(elem, false));
										elem.innerHTML = value;
									}
								}

								elem = 0;

								// If using innerHTML throws an exception, use the fallback method
							} catch (e) {}
						}

						if (elem) {
							this.empty().append(value);
						}
					}, null, value, arguments.length);
				},

				replaceWith: function replaceWith() {
					var ignored = [];

					// Make the changes, replacing each non-ignored context element with the new content
					return domManip(this, arguments, function (elem) {
						var parent = this.parentNode;

						if (jQuery.inArray(this, ignored) < 0) {
							jQuery.cleanData(getAll(this));
							if (parent) {
								parent.replaceChild(elem, this);
							}
						}

						// Force callback invocation
					}, ignored);
				}
			});

			jQuery.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function (name, original) {
				jQuery.fn[name] = function (selector) {
					var elems,
					    ret = [],
					    insert = jQuery(selector),
					    last = insert.length - 1,
					    i = 0;

					for (; i <= last; i++) {
						elems = i === last ? this : this.clone(true);
						jQuery(insert[i])[original](elems);

						// Support: Android <=4.0 only, PhantomJS 1 only
						// .get() because push.apply(_, arraylike) throws on ancient WebKit
						push.apply(ret, elems.get());
					}

					return this.pushStack(ret);
				};
			});
			var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

			var getStyles = function getStyles(elem) {

				// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
				// IE throws on elements created in popups
				// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
				var view = elem.ownerDocument.defaultView;

				if (!view || !view.opener) {
					view = window;
				}

				return view.getComputedStyle(elem);
			};

			var rboxStyle = new RegExp(cssExpand.join("|"), "i");

			(function () {

				// Executing both pixelPosition & boxSizingReliable tests require only one layout
				// so they're executed at the same time to save the second computation.
				function computeStyleTests() {

					// This is a singleton, we need to execute it only once
					if (!div) {
						return;
					}

					container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
					div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
					documentElement.appendChild(container).appendChild(div);

					var divStyle = window.getComputedStyle(div);
					pixelPositionVal = divStyle.top !== "1%";

					// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
					reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

					// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
					// Some styles come back with percentage values, even though they shouldn't
					div.style.right = "60%";
					pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

					// Support: IE 9 - 11 only
					// Detect misreporting of content dimensions for box-sizing:border-box elements
					boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

					// Support: IE 9 only
					// Detect overflow:scroll screwiness (gh-3699)
					div.style.position = "absolute";
					scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

					documentElement.removeChild(container);

					// Nullify the div so it wouldn't be stored in the memory and
					// it will also be a sign that checks already performed
					div = null;
				}

				function roundPixelMeasures(measure) {
					return Math.round(parseFloat(measure));
				}

				var pixelPositionVal,
				    boxSizingReliableVal,
				    scrollboxSizeVal,
				    pixelBoxStylesVal,
				    reliableMarginLeftVal,
				    container = document.createElement("div"),
				    div = document.createElement("div");

				// Finish early in limited (non-browser) environments
				if (!div.style) {
					return;
				}

				// Support: IE <=9 - 11 only
				// Style of cloned element affects source element cloned (#8908)
				div.style.backgroundClip = "content-box";
				div.cloneNode(true).style.backgroundClip = "";
				support.clearCloneStyle = div.style.backgroundClip === "content-box";

				jQuery.extend(support, {
					boxSizingReliable: function boxSizingReliable() {
						computeStyleTests();
						return boxSizingReliableVal;
					},
					pixelBoxStyles: function pixelBoxStyles() {
						computeStyleTests();
						return pixelBoxStylesVal;
					},
					pixelPosition: function pixelPosition() {
						computeStyleTests();
						return pixelPositionVal;
					},
					reliableMarginLeft: function reliableMarginLeft() {
						computeStyleTests();
						return reliableMarginLeftVal;
					},
					scrollboxSize: function scrollboxSize() {
						computeStyleTests();
						return scrollboxSizeVal;
					}
				});
			})();

			function curCSS(elem, name, computed) {
				var width,
				    minWidth,
				    maxWidth,
				    ret,


				// Support: Firefox 51+
				// Retrieving style before computed somehow
				// fixes an issue with getting wrong values
				// on detached elements
				style = elem.style;

				computed = computed || getStyles(elem);

				// getPropertyValue is needed for:
				//   .css('filter') (IE 9 only, #12537)
				//   .css('--customProperty) (#3144)
				if (computed) {
					ret = computed.getPropertyValue(name) || computed[name];

					if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
						ret = jQuery.style(elem, name);
					}

					// A tribute to the "awesome hack by Dean Edwards"
					// Android Browser returns percentage for some values,
					// but width seems to be reliably pixels.
					// This is against the CSSOM draft spec:
					// https://drafts.csswg.org/cssom/#resolved-values
					if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;

						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;

						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}

				return ret !== undefined ?

				// Support: IE <=9 - 11 only
				// IE returns zIndex value as an integer.
				ret + "" : ret;
			}

			function addGetHookIf(conditionFn, hookFn) {

				// Define the hook, we'll check on the first run if it's really needed.
				return {
					get: function get() {
						if (conditionFn()) {

							// Hook not needed (or it's not possible to use it due
							// to missing dependency), remove it.
							delete this.get;
							return;
						}

						// Hook needed; redefine it so that the support test is not executed again.
						return (this.get = hookFn).apply(this, arguments);
					}
				};
			}

			var

			// Swappable if display is none or starts with table
			// except "table", "table-cell", or "table-caption"
			// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
			rdisplayswap = /^(none|table(?!-c[ea]).+)/,
			    rcustomProp = /^--/,
			    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
			    cssNormalTransform = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			    cssPrefixes = ["Webkit", "Moz", "ms"],
			    emptyStyle = document.createElement("div").style;

			// Return a css property mapped to a potentially vendor prefixed property
			function vendorPropName(name) {

				// Shortcut for names that are not vendor prefixed
				if (name in emptyStyle) {
					return name;
				}

				// Check for vendor prefixed names
				var capName = name[0].toUpperCase() + name.slice(1),
				    i = cssPrefixes.length;

				while (i--) {
					name = cssPrefixes[i] + capName;
					if (name in emptyStyle) {
						return name;
					}
				}
			}

			// Return a property mapped along what jQuery.cssProps suggests or to
			// a vendor prefixed property.
			function finalPropName(name) {
				var ret = jQuery.cssProps[name];
				if (!ret) {
					ret = jQuery.cssProps[name] = vendorPropName(name) || name;
				}
				return ret;
			}

			function setPositiveNumber(elem, value, subtract) {

				// Any relative (+/-) values have already been
				// normalized at this point
				var matches = rcssNum.exec(value);
				return matches ?

				// Guard against undefined "subtract", e.g., when used as in cssHooks
				Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
			}

			function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
				var i = dimension === "width" ? 1 : 0,
				    extra = 0,
				    delta = 0;

				// Adjustment may not be necessary
				if (box === (isBorderBox ? "border" : "content")) {
					return 0;
				}

				for (; i < 4; i += 2) {

					// Both box models exclude margin
					if (box === "margin") {
						delta += jQuery.css(elem, box + cssExpand[i], true, styles);
					}

					// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
					if (!isBorderBox) {

						// Add padding
						delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

						// For "border" or "margin", add border
						if (box !== "padding") {
							delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

							// But still keep track of it otherwise
						} else {
							extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
						}

						// If we get here with a border-box (content + padding + border), we're seeking "content" or
						// "padding" or "margin"
					} else {

						// For "content", subtract padding
						if (box === "content") {
							delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
						}

						// For "content" or "padding", subtract border
						if (box !== "margin") {
							delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
						}
					}
				}

				// Account for positive content-box scroll gutter when requested by providing computedVal
				if (!isBorderBox && computedVal >= 0) {

					// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
					// Assuming integer scroll gutter, subtract the rest and round down
					delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
				}

				return delta;
			}

			function getWidthOrHeight(elem, dimension, extra) {

				// Start with computed style
				var styles = getStyles(elem),
				    val = curCSS(elem, dimension, styles),
				    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
				    valueIsBorderBox = isBorderBox;

				// Support: Firefox <=54
				// Return a confounding non-pixel value or feign ignorance, as appropriate.
				if (rnumnonpx.test(val)) {
					if (!extra) {
						return val;
					}
					val = "auto";
				}

				// Check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]);

				// Fall back to offsetWidth/offsetHeight when value is "auto"
				// This happens for inline elements with no explicit setting (gh-3571)
				// Support: Android <=4.1 - 4.3 only
				// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
				if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {

					val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];

					// offsetWidth/offsetHeight provide border-box values
					valueIsBorderBox = true;
				}

				// Normalize "" and auto
				val = parseFloat(val) || 0;

				// Adjust for the element's box model
				return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val) + "px";
			}

			jQuery.extend({

				// Add in style property hooks for overriding the default
				// behavior of getting and setting a style property
				cssHooks: {
					opacity: {
						get: function get(elem, computed) {
							if (computed) {

								// We should always get a number back from opacity
								var ret = curCSS(elem, "opacity");
								return ret === "" ? "1" : ret;
							}
						}
					}
				},

				// Don't automatically add "px" to these possibly-unitless properties
				cssNumber: {
					"animationIterationCount": true,
					"columnCount": true,
					"fillOpacity": true,
					"flexGrow": true,
					"flexShrink": true,
					"fontWeight": true,
					"lineHeight": true,
					"opacity": true,
					"order": true,
					"orphans": true,
					"widows": true,
					"zIndex": true,
					"zoom": true
				},

				// Add in properties whose names you wish to fix before
				// setting or getting the value
				cssProps: {},

				// Get and set the style property on a DOM Node
				style: function style(elem, name, value, extra) {

					// Don't set styles on text and comment nodes
					if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
						return;
					}

					// Make sure that we're working with the right name
					var ret,
					    type,
					    hooks,
					    origName = camelCase(name),
					    isCustomProp = rcustomProp.test(name),
					    style = elem.style;

					// Make sure that we're working with the right name. We don't
					// want to query the value if it is a CSS custom property
					// since they are user-defined.
					if (!isCustomProp) {
						name = finalPropName(origName);
					}

					// Gets hook for the prefixed version, then unprefixed version
					hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

					// Check if we're setting a value
					if (value !== undefined) {
						type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

						// Convert "+=" or "-=" to relative numbers (#7345)
						if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
							value = adjustCSS(elem, name, ret);

							// Fixes bug #9237
							type = "number";
						}

						// Make sure that null and NaN values aren't set (#7116)
						if (value == null || value !== value) {
							return;
						}

						// If a number was passed in, add the unit (except for certain CSS properties)
						if (type === "number") {
							value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
						}

						// background-* props affect original clone's values
						if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
							style[name] = "inherit";
						}

						// If a hook was provided, use that value, otherwise just set the specified value
						if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

							if (isCustomProp) {
								style.setProperty(name, value);
							} else {
								style[name] = value;
							}
						}
					} else {

						// If a hook was provided get the non-computed value from there
						if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

							return ret;
						}

						// Otherwise just get the value from the style object
						return style[name];
					}
				},

				css: function css(elem, name, extra, styles) {
					var val,
					    num,
					    hooks,
					    origName = camelCase(name),
					    isCustomProp = rcustomProp.test(name);

					// Make sure that we're working with the right name. We don't
					// want to modify the value if it is a CSS custom property
					// since they are user-defined.
					if (!isCustomProp) {
						name = finalPropName(origName);
					}

					// Try prefixed name followed by the unprefixed name
					hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

					// If a hook was provided get the computed value from there
					if (hooks && "get" in hooks) {
						val = hooks.get(elem, true, extra);
					}

					// Otherwise, if a way to get the computed value exists, use that
					if (val === undefined) {
						val = curCSS(elem, name, styles);
					}

					// Convert "normal" to computed value
					if (val === "normal" && name in cssNormalTransform) {
						val = cssNormalTransform[name];
					}

					// Make numeric if forced or a qualifier was provided and val looks numeric
					if (extra === "" || extra) {
						num = parseFloat(val);
						return extra === true || isFinite(num) ? num || 0 : val;
					}

					return val;
				}
			});

			jQuery.each(["height", "width"], function (i, dimension) {
				jQuery.cssHooks[dimension] = {
					get: function get(elem, computed, extra) {
						if (computed) {

							// Certain elements can have dimension info if we invisibly show them
							// but it must have a current display style that would benefit
							return rdisplayswap.test(jQuery.css(elem, "display")) && (

							// Support: Safari 8+
							// Table columns in Safari have non-zero offsetWidth & zero
							// getBoundingClientRect().width unless display is changed.
							// Support: IE <=11 only
							// Running getBoundingClientRect on a disconnected node
							// in IE throws an error.
							!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
								return getWidthOrHeight(elem, dimension, extra);
							}) : getWidthOrHeight(elem, dimension, extra);
						}
					},

					set: function set(elem, value, extra) {
						var matches,
						    styles = getStyles(elem),
						    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
						    subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);

						// Account for unreliable border-box dimensions by comparing offset* to computed and
						// faking a content-box to get border and padding (gh-3699)
						if (isBorderBox && support.scrollboxSize() === styles.position) {
							subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
						}

						// Convert to pixels if value adjustment is needed
						if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

							elem.style[dimension] = value;
							value = jQuery.css(elem, dimension);
						}

						return setPositiveNumber(elem, value, subtract);
					}
				};
			});

			jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
				if (computed) {
					return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
						return elem.getBoundingClientRect().left;
					})) + "px";
				}
			});

			// These hooks are used by animate to expand properties
			jQuery.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function (prefix, suffix) {
				jQuery.cssHooks[prefix + suffix] = {
					expand: function expand(value) {
						var i = 0,
						    expanded = {},


						// Assumes a single number if not a string
						parts = typeof value === "string" ? value.split(" ") : [value];

						for (; i < 4; i++) {
							expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
						}

						return expanded;
					}
				};

				if (prefix !== "margin") {
					jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
				}
			});

			jQuery.fn.extend({
				css: function css(name, value) {
					return access(this, function (elem, name, value) {
						var styles,
						    len,
						    map = {},
						    i = 0;

						if (Array.isArray(name)) {
							styles = getStyles(elem);
							len = name.length;

							for (; i < len; i++) {
								map[name[i]] = jQuery.css(elem, name[i], false, styles);
							}

							return map;
						}

						return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
					}, name, value, arguments.length > 1);
				}
			});

			function Tween(elem, options, prop, end, easing) {
				return new Tween.prototype.init(elem, options, prop, end, easing);
			}
			jQuery.Tween = Tween;

			Tween.prototype = {
				constructor: Tween,
				init: function init(elem, options, prop, end, easing, unit) {
					this.elem = elem;
					this.prop = prop;
					this.easing = easing || jQuery.easing._default;
					this.options = options;
					this.start = this.now = this.cur();
					this.end = end;
					this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
				},
				cur: function cur() {
					var hooks = Tween.propHooks[this.prop];

					return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
				},
				run: function run(percent) {
					var eased,
					    hooks = Tween.propHooks[this.prop];

					if (this.options.duration) {
						this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
					} else {
						this.pos = eased = percent;
					}
					this.now = (this.end - this.start) * eased + this.start;

					if (this.options.step) {
						this.options.step.call(this.elem, this.now, this);
					}

					if (hooks && hooks.set) {
						hooks.set(this);
					} else {
						Tween.propHooks._default.set(this);
					}
					return this;
				}
			};

			Tween.prototype.init.prototype = Tween.prototype;

			Tween.propHooks = {
				_default: {
					get: function get(tween) {
						var result;

						// Use a property on the element directly when it is not a DOM element,
						// or when there is no matching style property that exists.
						if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
							return tween.elem[tween.prop];
						}

						// Passing an empty string as a 3rd parameter to .css will automatically
						// attempt a parseFloat and fallback to a string if the parse fails.
						// Simple values such as "10px" are parsed to Float;
						// complex values such as "rotate(1rad)" are returned as-is.
						result = jQuery.css(tween.elem, tween.prop, "");

						// Empty strings, null, undefined and "auto" are converted to 0.
						return !result || result === "auto" ? 0 : result;
					},
					set: function set(tween) {

						// Use step hook for back compat.
						// Use cssHook if its there.
						// Use .style if available and use plain properties where available.
						if (jQuery.fx.step[tween.prop]) {
							jQuery.fx.step[tween.prop](tween);
						} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
							jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
						} else {
							tween.elem[tween.prop] = tween.now;
						}
					}
				}
			};

			// Support: IE <=9 only
			// Panic based approach to setting things on disconnected nodes
			Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
				set: function set(tween) {
					if (tween.elem.nodeType && tween.elem.parentNode) {
						tween.elem[tween.prop] = tween.now;
					}
				}
			};

			jQuery.easing = {
				linear: function linear(p) {
					return p;
				},
				swing: function swing(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				_default: "swing"
			};

			jQuery.fx = Tween.prototype.init;

			// Back compat <1.8 extension point
			jQuery.fx.step = {};

			var fxNow,
			    inProgress,
			    rfxtypes = /^(?:toggle|show|hide)$/,
			    rrun = /queueHooks$/;

			function schedule() {
				if (inProgress) {
					if (document.hidden === false && window.requestAnimationFrame) {
						window.requestAnimationFrame(schedule);
					} else {
						window.setTimeout(schedule, jQuery.fx.interval);
					}

					jQuery.fx.tick();
				}
			}

			// Animations created synchronously will run synchronously
			function createFxNow() {
				window.setTimeout(function () {
					fxNow = undefined;
				});
				return fxNow = Date.now();
			}

			// Generate parameters to create a standard animation
			function genFx(type, includeWidth) {
				var which,
				    i = 0,
				    attrs = { height: type };

				// If we include width, step value is 1 to do all cssExpand values,
				// otherwise step value is 2 to skip over Left and Right
				includeWidth = includeWidth ? 1 : 0;
				for (; i < 4; i += 2 - includeWidth) {
					which = cssExpand[i];
					attrs["margin" + which] = attrs["padding" + which] = type;
				}

				if (includeWidth) {
					attrs.opacity = attrs.width = type;
				}

				return attrs;
			}

			function createTween(value, prop, animation) {
				var tween,
				    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
				    index = 0,
				    length = collection.length;
				for (; index < length; index++) {
					if (tween = collection[index].call(animation, prop, value)) {

						// We're done with this property
						return tween;
					}
				}
			}

			function defaultPrefilter(elem, props, opts) {
				var prop,
				    value,
				    toggle,
				    hooks,
				    oldfire,
				    propTween,
				    restoreDisplay,
				    display,
				    isBox = "width" in props || "height" in props,
				    anim = this,
				    orig = {},
				    style = elem.style,
				    hidden = elem.nodeType && isHiddenWithinTree(elem),
				    dataShow = dataPriv.get(elem, "fxshow");

				// Queue-skipping animations hijack the fx hooks
				if (!opts.queue) {
					hooks = jQuery._queueHooks(elem, "fx");
					if (hooks.unqueued == null) {
						hooks.unqueued = 0;
						oldfire = hooks.empty.fire;
						hooks.empty.fire = function () {
							if (!hooks.unqueued) {
								oldfire();
							}
						};
					}
					hooks.unqueued++;

					anim.always(function () {

						// Ensure the complete handler is called before this completes
						anim.always(function () {
							hooks.unqueued--;
							if (!jQuery.queue(elem, "fx").length) {
								hooks.empty.fire();
							}
						});
					});
				}

				// Detect show/hide animations
				for (prop in props) {
					value = props[prop];
					if (rfxtypes.test(value)) {
						delete props[prop];
						toggle = toggle || value === "toggle";
						if (value === (hidden ? "hide" : "show")) {

							// Pretend to be hidden if this is a "show" and
							// there is still data from a stopped show/hide
							if (value === "show" && dataShow && dataShow[prop] !== undefined) {
								hidden = true;

								// Ignore all other no-op show/hide data
							} else {
								continue;
							}
						}
						orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
					}
				}

				// Bail out if this is a no-op like .hide().hide()
				propTween = !jQuery.isEmptyObject(props);
				if (!propTween && jQuery.isEmptyObject(orig)) {
					return;
				}

				// Restrict "overflow" and "display" styles during box animations
				if (isBox && elem.nodeType === 1) {

					// Support: IE <=9 - 11, Edge 12 - 15
					// Record all 3 overflow attributes because IE does not infer the shorthand
					// from identically-valued overflowX and overflowY and Edge just mirrors
					// the overflowX value there.
					opts.overflow = [style.overflow, style.overflowX, style.overflowY];

					// Identify a display type, preferring old show/hide data over the CSS cascade
					restoreDisplay = dataShow && dataShow.display;
					if (restoreDisplay == null) {
						restoreDisplay = dataPriv.get(elem, "display");
					}
					display = jQuery.css(elem, "display");
					if (display === "none") {
						if (restoreDisplay) {
							display = restoreDisplay;
						} else {

							// Get nonempty value(s) by temporarily forcing visibility
							showHide([elem], true);
							restoreDisplay = elem.style.display || restoreDisplay;
							display = jQuery.css(elem, "display");
							showHide([elem]);
						}
					}

					// Animate inline elements as inline-block
					if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
						if (jQuery.css(elem, "float") === "none") {

							// Restore the original display value at the end of pure show/hide animations
							if (!propTween) {
								anim.done(function () {
									style.display = restoreDisplay;
								});
								if (restoreDisplay == null) {
									display = style.display;
									restoreDisplay = display === "none" ? "" : display;
								}
							}
							style.display = "inline-block";
						}
					}
				}

				if (opts.overflow) {
					style.overflow = "hidden";
					anim.always(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}

				// Implement show/hide animations
				propTween = false;
				for (prop in orig) {

					// General show/hide setup for this element animation
					if (!propTween) {
						if (dataShow) {
							if ("hidden" in dataShow) {
								hidden = dataShow.hidden;
							}
						} else {
							dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
						}

						// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
						if (toggle) {
							dataShow.hidden = !hidden;
						}

						// Show elements before animating them
						if (hidden) {
							showHide([elem], true);
						}

						/* eslint-disable no-loop-func */

						anim.done(function () {

							/* eslint-enable no-loop-func */

							// The final step of a "hide" animation is actually hiding the element
							if (!hidden) {
								showHide([elem]);
							}
							dataPriv.remove(elem, "fxshow");
							for (prop in orig) {
								jQuery.style(elem, prop, orig[prop]);
							}
						});
					}

					// Per-property setup
					propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
					if (!(prop in dataShow)) {
						dataShow[prop] = propTween.start;
						if (hidden) {
							propTween.end = propTween.start;
							propTween.start = 0;
						}
					}
				}
			}

			function propFilter(props, specialEasing) {
				var index, name, easing, value, hooks;

				// camelCase, specialEasing and expand cssHook pass
				for (index in props) {
					name = camelCase(index);
					easing = specialEasing[name];
					value = props[index];
					if (Array.isArray(value)) {
						easing = value[1];
						value = props[index] = value[0];
					}

					if (index !== name) {
						props[name] = value;
						delete props[index];
					}

					hooks = jQuery.cssHooks[name];
					if (hooks && "expand" in hooks) {
						value = hooks.expand(value);
						delete props[name];

						// Not quite $.extend, this won't overwrite existing keys.
						// Reusing 'index' because we have the correct "name"
						for (index in value) {
							if (!(index in props)) {
								props[index] = value[index];
								specialEasing[index] = easing;
							}
						}
					} else {
						specialEasing[name] = easing;
					}
				}
			}

			function Animation(elem, properties, options) {
				var result,
				    stopped,
				    index = 0,
				    length = Animation.prefilters.length,
				    deferred = jQuery.Deferred().always(function () {

					// Don't match elem in the :animated selector
					delete tick.elem;
				}),
				    tick = function tick() {
					if (stopped) {
						return false;
					}
					var currentTime = fxNow || createFxNow(),
					    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					    percent = 1 - temp,
					    index = 0,
					    length = animation.tweens.length;

					for (; index < length; index++) {
						animation.tweens[index].run(percent);
					}

					deferred.notifyWith(elem, [animation, percent, remaining]);

					// If there's more to do, yield
					if (percent < 1 && length) {
						return remaining;
					}

					// If this was an empty animation, synthesize a final progress notification
					if (!length) {
						deferred.notifyWith(elem, [animation, 1, 0]);
					}

					// Resolve the animation and report its conclusion
					deferred.resolveWith(elem, [animation]);
					return false;
				},
				    animation = deferred.promise({
					elem: elem,
					props: jQuery.extend({}, properties),
					opts: jQuery.extend(true, {
						specialEasing: {},
						easing: jQuery.easing._default
					}, options),
					originalProperties: properties,
					originalOptions: options,
					startTime: fxNow || createFxNow(),
					duration: options.duration,
					tweens: [],
					createTween: function createTween(prop, end) {
						var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
						animation.tweens.push(tween);
						return tween;
					},
					stop: function stop(gotoEnd) {
						var index = 0,


						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
						if (stopped) {
							return this;
						}
						stopped = true;
						for (; index < length; index++) {
							animation.tweens[index].run(1);
						}

						// Resolve when we played the last frame; otherwise, reject
						if (gotoEnd) {
							deferred.notifyWith(elem, [animation, 1, 0]);
							deferred.resolveWith(elem, [animation, gotoEnd]);
						} else {
							deferred.rejectWith(elem, [animation, gotoEnd]);
						}
						return this;
					}
				}),
				    props = animation.props;

				propFilter(props, animation.opts.specialEasing);

				for (; index < length; index++) {
					result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
					if (result) {
						if (isFunction(result.stop)) {
							jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
						}
						return result;
					}
				}

				jQuery.map(props, createTween, animation);

				if (isFunction(animation.opts.start)) {
					animation.opts.start.call(elem, animation);
				}

				// Attach callbacks from options
				animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

				jQuery.fx.timer(jQuery.extend(tick, {
					elem: elem,
					anim: animation,
					queue: animation.opts.queue
				}));

				return animation;
			}

			jQuery.Animation = jQuery.extend(Animation, {

				tweeners: {
					"*": [function (prop, value) {
						var tween = this.createTween(prop, value);
						adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
						return tween;
					}]
				},

				tweener: function tweener(props, callback) {
					if (isFunction(props)) {
						callback = props;
						props = ["*"];
					} else {
						props = props.match(rnothtmlwhite);
					}

					var prop,
					    index = 0,
					    length = props.length;

					for (; index < length; index++) {
						prop = props[index];
						Animation.tweeners[prop] = Animation.tweeners[prop] || [];
						Animation.tweeners[prop].unshift(callback);
					}
				},

				prefilters: [defaultPrefilter],

				prefilter: function prefilter(callback, prepend) {
					if (prepend) {
						Animation.prefilters.unshift(callback);
					} else {
						Animation.prefilters.push(callback);
					}
				}
			});

			jQuery.speed = function (speed, easing, fn) {
				var opt = speed && (typeof speed === 'undefined' ? 'undefined' : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
					complete: fn || !fn && easing || isFunction(speed) && speed,
					duration: speed,
					easing: fn && easing || easing && !isFunction(easing) && easing
				};

				// Go to the end state if fx are off
				if (jQuery.fx.off) {
					opt.duration = 0;
				} else {
					if (typeof opt.duration !== "number") {
						if (opt.duration in jQuery.fx.speeds) {
							opt.duration = jQuery.fx.speeds[opt.duration];
						} else {
							opt.duration = jQuery.fx.speeds._default;
						}
					}
				}

				// Normalize opt.queue - true/undefined/null -> "fx"
				if (opt.queue == null || opt.queue === true) {
					opt.queue = "fx";
				}

				// Queueing
				opt.old = opt.complete;

				opt.complete = function () {
					if (isFunction(opt.old)) {
						opt.old.call(this);
					}

					if (opt.queue) {
						jQuery.dequeue(this, opt.queue);
					}
				};

				return opt;
			};

			jQuery.fn.extend({
				fadeTo: function fadeTo(speed, to, easing, callback) {

					// Show any hidden elements after setting opacity to 0
					return this.filter(isHiddenWithinTree).css("opacity", 0).show()

					// Animate to the value specified
					.end().animate({ opacity: to }, speed, easing, callback);
				},
				animate: function animate(prop, speed, easing, callback) {
					var empty = jQuery.isEmptyObject(prop),
					    optall = jQuery.speed(speed, easing, callback),
					    doAnimation = function doAnimation() {

						// Operate on a copy of prop so per-property easing won't be lost
						var anim = Animation(this, jQuery.extend({}, prop), optall);

						// Empty animations, or finishing resolves immediately
						if (empty || dataPriv.get(this, "finish")) {
							anim.stop(true);
						}
					};
					doAnimation.finish = doAnimation;

					return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
				},
				stop: function stop(type, clearQueue, gotoEnd) {
					var stopQueue = function stopQueue(hooks) {
						var stop = hooks.stop;
						delete hooks.stop;
						stop(gotoEnd);
					};

					if (typeof type !== "string") {
						gotoEnd = clearQueue;
						clearQueue = type;
						type = undefined;
					}
					if (clearQueue && type !== false) {
						this.queue(type || "fx", []);
					}

					return this.each(function () {
						var dequeue = true,
						    index = type != null && type + "queueHooks",
						    timers = jQuery.timers,
						    data = dataPriv.get(this);

						if (index) {
							if (data[index] && data[index].stop) {
								stopQueue(data[index]);
							}
						} else {
							for (index in data) {
								if (data[index] && data[index].stop && rrun.test(index)) {
									stopQueue(data[index]);
								}
							}
						}

						for (index = timers.length; index--;) {
							if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

								timers[index].anim.stop(gotoEnd);
								dequeue = false;
								timers.splice(index, 1);
							}
						}

						// Start the next in the queue if the last step wasn't forced.
						// Timers currently will call their complete callbacks, which
						// will dequeue but only if they were gotoEnd.
						if (dequeue || !gotoEnd) {
							jQuery.dequeue(this, type);
						}
					});
				},
				finish: function finish(type) {
					if (type !== false) {
						type = type || "fx";
					}
					return this.each(function () {
						var index,
						    data = dataPriv.get(this),
						    queue = data[type + "queue"],
						    hooks = data[type + "queueHooks"],
						    timers = jQuery.timers,
						    length = queue ? queue.length : 0;

						// Enable finishing flag on private data
						data.finish = true;

						// Empty the queue first
						jQuery.queue(this, type, []);

						if (hooks && hooks.stop) {
							hooks.stop.call(this, true);
						}

						// Look for any active animations, and finish them
						for (index = timers.length; index--;) {
							if (timers[index].elem === this && timers[index].queue === type) {
								timers[index].anim.stop(true);
								timers.splice(index, 1);
							}
						}

						// Look for any animations in the old queue and finish them
						for (index = 0; index < length; index++) {
							if (queue[index] && queue[index].finish) {
								queue[index].finish.call(this);
							}
						}

						// Turn off finishing flag
						delete data.finish;
					});
				}
			});

			jQuery.each(["toggle", "show", "hide"], function (i, name) {
				var cssFn = jQuery.fn[name];
				jQuery.fn[name] = function (speed, easing, callback) {
					return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
				};
			});

			// Generate shortcuts for custom animations
			jQuery.each({
				slideDown: genFx("show"),
				slideUp: genFx("hide"),
				slideToggle: genFx("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" }
			}, function (name, props) {
				jQuery.fn[name] = function (speed, easing, callback) {
					return this.animate(props, speed, easing, callback);
				};
			});

			jQuery.timers = [];
			jQuery.fx.tick = function () {
				var timer,
				    i = 0,
				    timers = jQuery.timers;

				fxNow = Date.now();

				for (; i < timers.length; i++) {
					timer = timers[i];

					// Run the timer and safely remove it when done (allowing for external removal)
					if (!timer() && timers[i] === timer) {
						timers.splice(i--, 1);
					}
				}

				if (!timers.length) {
					jQuery.fx.stop();
				}
				fxNow = undefined;
			};

			jQuery.fx.timer = function (timer) {
				jQuery.timers.push(timer);
				jQuery.fx.start();
			};

			jQuery.fx.interval = 13;
			jQuery.fx.start = function () {
				if (inProgress) {
					return;
				}

				inProgress = true;
				schedule();
			};

			jQuery.fx.stop = function () {
				inProgress = null;
			};

			jQuery.fx.speeds = {
				slow: 600,
				fast: 200,

				// Default speed
				_default: 400
			};

			// Based off of the plugin by Clint Helfers, with permission.
			// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
			jQuery.fn.delay = function (time, type) {
				time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
				type = type || "fx";

				return this.queue(type, function (next, hooks) {
					var timeout = window.setTimeout(next, time);
					hooks.stop = function () {
						window.clearTimeout(timeout);
					};
				});
			};

			(function () {
				var input = document.createElement("input"),
				    select = document.createElement("select"),
				    opt = select.appendChild(document.createElement("option"));

				input.type = "checkbox";

				// Support: Android <=4.3 only
				// Default value for a checkbox should be "on"
				support.checkOn = input.value !== "";

				// Support: IE <=11 only
				// Must access selectedIndex to make default options select
				support.optSelected = opt.selected;

				// Support: IE <=11 only
				// An input loses its value after becoming a radio
				input = document.createElement("input");
				input.value = "t";
				input.type = "radio";
				support.radioValue = input.value === "t";
			})();

			var boolHook,
			    attrHandle = jQuery.expr.attrHandle;

			jQuery.fn.extend({
				attr: function attr(name, value) {
					return access(this, jQuery.attr, name, value, arguments.length > 1);
				},

				removeAttr: function removeAttr(name) {
					return this.each(function () {
						jQuery.removeAttr(this, name);
					});
				}
			});

			jQuery.extend({
				attr: function attr(elem, name, value) {
					var ret,
					    hooks,
					    nType = elem.nodeType;

					// Don't get/set attributes on text, comment and attribute nodes
					if (nType === 3 || nType === 8 || nType === 2) {
						return;
					}

					// Fallback to prop when attributes are not supported
					if (typeof elem.getAttribute === "undefined") {
						return jQuery.prop(elem, name, value);
					}

					// Attribute hooks are determined by the lowercase version
					// Grab necessary hook if one is defined
					if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
						hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
					}

					if (value !== undefined) {
						if (value === null) {
							jQuery.removeAttr(elem, name);
							return;
						}

						if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
							return ret;
						}

						elem.setAttribute(name, value + "");
						return value;
					}

					if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
						return ret;
					}

					ret = jQuery.find.attr(elem, name);

					// Non-existent attributes return null, we normalize to undefined
					return ret == null ? undefined : ret;
				},

				attrHooks: {
					type: {
						set: function set(elem, value) {
							if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
								var val = elem.value;
								elem.setAttribute("type", value);
								if (val) {
									elem.value = val;
								}
								return value;
							}
						}
					}
				},

				removeAttr: function removeAttr(elem, value) {
					var name,
					    i = 0,


					// Attribute names can contain non-HTML whitespace characters
					// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
					attrNames = value && value.match(rnothtmlwhite);

					if (attrNames && elem.nodeType === 1) {
						while (name = attrNames[i++]) {
							elem.removeAttribute(name);
						}
					}
				}
			});

			// Hooks for boolean attributes
			boolHook = {
				set: function set(elem, value, name) {
					if (value === false) {

						// Remove boolean attributes when set to false
						jQuery.removeAttr(elem, name);
					} else {
						elem.setAttribute(name, name);
					}
					return name;
				}
			};

			jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
				var getter = attrHandle[name] || jQuery.find.attr;

				attrHandle[name] = function (elem, name, isXML) {
					var ret,
					    handle,
					    lowercaseName = name.toLowerCase();

					if (!isXML) {

						// Avoid an infinite loop by temporarily removing this function from the getter
						handle = attrHandle[lowercaseName];
						attrHandle[lowercaseName] = ret;
						ret = getter(elem, name, isXML) != null ? lowercaseName : null;
						attrHandle[lowercaseName] = handle;
					}
					return ret;
				};
			});

			var rfocusable = /^(?:input|select|textarea|button)$/i,
			    rclickable = /^(?:a|area)$/i;

			jQuery.fn.extend({
				prop: function prop(name, value) {
					return access(this, jQuery.prop, name, value, arguments.length > 1);
				},

				removeProp: function removeProp(name) {
					return this.each(function () {
						delete this[jQuery.propFix[name] || name];
					});
				}
			});

			jQuery.extend({
				prop: function prop(elem, name, value) {
					var ret,
					    hooks,
					    nType = elem.nodeType;

					// Don't get/set properties on text, comment and attribute nodes
					if (nType === 3 || nType === 8 || nType === 2) {
						return;
					}

					if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

						// Fix name and attach hooks
						name = jQuery.propFix[name] || name;
						hooks = jQuery.propHooks[name];
					}

					if (value !== undefined) {
						if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
							return ret;
						}

						return elem[name] = value;
					}

					if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
						return ret;
					}

					return elem[name];
				},

				propHooks: {
					tabIndex: {
						get: function get(elem) {

							// Support: IE <=9 - 11 only
							// elem.tabIndex doesn't always return the
							// correct value when it hasn't been explicitly set
							// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
							// Use proper attribute retrieval(#12072)
							var tabindex = jQuery.find.attr(elem, "tabindex");

							if (tabindex) {
								return parseInt(tabindex, 10);
							}

							if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
								return 0;
							}

							return -1;
						}
					}
				},

				propFix: {
					"for": "htmlFor",
					"class": "className"
				}
			});

			// Support: IE <=11 only
			// Accessing the selectedIndex property
			// forces the browser to respect setting selected
			// on the option
			// The getter ensures a default option is selected
			// when in an optgroup
			// eslint rule "no-unused-expressions" is disabled for this code
			// since it considers such accessions noop
			if (!support.optSelected) {
				jQuery.propHooks.selected = {
					get: function get(elem) {

						/* eslint no-unused-expressions: "off" */

						var parent = elem.parentNode;
						if (parent && parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
						return null;
					},
					set: function set(elem) {

						/* eslint no-unused-expressions: "off" */

						var parent = elem.parentNode;
						if (parent) {
							parent.selectedIndex;

							if (parent.parentNode) {
								parent.parentNode.selectedIndex;
							}
						}
					}
				};
			}

			jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
				jQuery.propFix[this.toLowerCase()] = this;
			});

			// Strip and collapse whitespace according to HTML spec
			// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
			function stripAndCollapse(value) {
				var tokens = value.match(rnothtmlwhite) || [];
				return tokens.join(" ");
			}

			function getClass(elem) {
				return elem.getAttribute && elem.getAttribute("class") || "";
			}

			function classesToArray(value) {
				if (Array.isArray(value)) {
					return value;
				}
				if (typeof value === "string") {
					return value.match(rnothtmlwhite) || [];
				}
				return [];
			}

			jQuery.fn.extend({
				addClass: function addClass(value) {
					var classes,
					    elem,
					    cur,
					    curValue,
					    clazz,
					    j,
					    finalValue,
					    i = 0;

					if (isFunction(value)) {
						return this.each(function (j) {
							jQuery(this).addClass(value.call(this, j, getClass(this)));
						});
					}

					classes = classesToArray(value);

					if (classes.length) {
						while (elem = this[i++]) {
							curValue = getClass(elem);
							cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

							if (cur) {
								j = 0;
								while (clazz = classes[j++]) {
									if (cur.indexOf(" " + clazz + " ") < 0) {
										cur += clazz + " ";
									}
								}

								// Only assign if different to avoid unneeded rendering.
								finalValue = stripAndCollapse(cur);
								if (curValue !== finalValue) {
									elem.setAttribute("class", finalValue);
								}
							}
						}
					}

					return this;
				},

				removeClass: function removeClass(value) {
					var classes,
					    elem,
					    cur,
					    curValue,
					    clazz,
					    j,
					    finalValue,
					    i = 0;

					if (isFunction(value)) {
						return this.each(function (j) {
							jQuery(this).removeClass(value.call(this, j, getClass(this)));
						});
					}

					if (!arguments.length) {
						return this.attr("class", "");
					}

					classes = classesToArray(value);

					if (classes.length) {
						while (elem = this[i++]) {
							curValue = getClass(elem);

							// This expression is here for better compressibility (see addClass)
							cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

							if (cur) {
								j = 0;
								while (clazz = classes[j++]) {

									// Remove *all* instances
									while (cur.indexOf(" " + clazz + " ") > -1) {
										cur = cur.replace(" " + clazz + " ", " ");
									}
								}

								// Only assign if different to avoid unneeded rendering.
								finalValue = stripAndCollapse(cur);
								if (curValue !== finalValue) {
									elem.setAttribute("class", finalValue);
								}
							}
						}
					}

					return this;
				},

				toggleClass: function toggleClass(value, stateVal) {
					var type = typeof value === 'undefined' ? 'undefined' : _typeof(value),
					    isValidValue = type === "string" || Array.isArray(value);

					if (typeof stateVal === "boolean" && isValidValue) {
						return stateVal ? this.addClass(value) : this.removeClass(value);
					}

					if (isFunction(value)) {
						return this.each(function (i) {
							jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
						});
					}

					return this.each(function () {
						var className, i, self, classNames;

						if (isValidValue) {

							// Toggle individual class names
							i = 0;
							self = jQuery(this);
							classNames = classesToArray(value);

							while (className = classNames[i++]) {

								// Check each className given, space separated list
								if (self.hasClass(className)) {
									self.removeClass(className);
								} else {
									self.addClass(className);
								}
							}

							// Toggle whole class name
						} else if (value === undefined || type === "boolean") {
							className = getClass(this);
							if (className) {

								// Store className if set
								dataPriv.set(this, "__className__", className);
							}

							// If the element has a class name or if we're passed `false`,
							// then remove the whole classname (if there was one, the above saved it).
							// Otherwise bring back whatever was previously saved (if anything),
							// falling back to the empty string if nothing was stored.
							if (this.setAttribute) {
								this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
							}
						}
					});
				},

				hasClass: function hasClass(selector) {
					var className,
					    elem,
					    i = 0;

					className = " " + selector + " ";
					while (elem = this[i++]) {
						if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
							return true;
						}
					}

					return false;
				}
			});

			var rreturn = /\r/g;

			jQuery.fn.extend({
				val: function val(value) {
					var hooks,
					    ret,
					    valueIsFunction,
					    elem = this[0];

					if (!arguments.length) {
						if (elem) {
							hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

							if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
								return ret;
							}

							ret = elem.value;

							// Handle most common string cases
							if (typeof ret === "string") {
								return ret.replace(rreturn, "");
							}

							// Handle cases where value is null/undef or number
							return ret == null ? "" : ret;
						}

						return;
					}

					valueIsFunction = isFunction(value);

					return this.each(function (i) {
						var val;

						if (this.nodeType !== 1) {
							return;
						}

						if (valueIsFunction) {
							val = value.call(this, i, jQuery(this).val());
						} else {
							val = value;
						}

						// Treat null/undefined as ""; convert numbers to string
						if (val == null) {
							val = "";
						} else if (typeof val === "number") {
							val += "";
						} else if (Array.isArray(val)) {
							val = jQuery.map(val, function (value) {
								return value == null ? "" : value + "";
							});
						}

						hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

						// If set returns undefined, fall back to normal setting
						if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
							this.value = val;
						}
					});
				}
			});

			jQuery.extend({
				valHooks: {
					option: {
						get: function get(elem) {

							var val = jQuery.find.attr(elem, "value");
							return val != null ? val :

							// Support: IE <=10 - 11 only
							// option.text throws exceptions (#14686, #14858)
							// Strip and collapse whitespace
							// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
							stripAndCollapse(jQuery.text(elem));
						}
					},
					select: {
						get: function get(elem) {
							var value,
							    option,
							    i,
							    options = elem.options,
							    index = elem.selectedIndex,
							    one = elem.type === "select-one",
							    values = one ? null : [],
							    max = one ? index + 1 : options.length;

							if (index < 0) {
								i = max;
							} else {
								i = one ? index : 0;
							}

							// Loop through all the selected options
							for (; i < max; i++) {
								option = options[i];

								// Support: IE <=9 only
								// IE8-9 doesn't update selected after form reset (#2551)
								if ((option.selected || i === index) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

									// Get the specific value for the option
									value = jQuery(option).val();

									// We don't need an array for one selects
									if (one) {
										return value;
									}

									// Multi-Selects return an array
									values.push(value);
								}
							}

							return values;
						},

						set: function set(elem, value) {
							var optionSet,
							    option,
							    options = elem.options,
							    values = jQuery.makeArray(value),
							    i = options.length;

							while (i--) {
								option = options[i];

								/* eslint-disable no-cond-assign */

								if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
									optionSet = true;
								}

								/* eslint-enable no-cond-assign */
							}

							// Force browsers to behave consistently when non-matching value is set
							if (!optionSet) {
								elem.selectedIndex = -1;
							}
							return values;
						}
					}
				}
			});

			// Radios and checkboxes getter/setter
			jQuery.each(["radio", "checkbox"], function () {
				jQuery.valHooks[this] = {
					set: function set(elem, value) {
						if (Array.isArray(value)) {
							return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
						}
					}
				};
				if (!support.checkOn) {
					jQuery.valHooks[this].get = function (elem) {
						return elem.getAttribute("value") === null ? "on" : elem.value;
					};
				}
			});

			// Return jQuery for attributes-only inclusion


			support.focusin = "onfocusin" in window;

			var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
			    stopPropagationCallback = function stopPropagationCallback(e) {
				e.stopPropagation();
			};

			jQuery.extend(jQuery.event, {

				trigger: function trigger(event, data, elem, onlyHandlers) {

					var i,
					    cur,
					    tmp,
					    bubbleType,
					    ontype,
					    handle,
					    special,
					    lastElement,
					    eventPath = [elem || document],
					    type = hasOwn.call(event, "type") ? event.type : event,
					    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

					cur = lastElement = tmp = elem = elem || document;

					// Don't do events on text and comment nodes
					if (elem.nodeType === 3 || elem.nodeType === 8) {
						return;
					}

					// focus/blur morphs to focusin/out; ensure we're not firing them right now
					if (rfocusMorph.test(type + jQuery.event.triggered)) {
						return;
					}

					if (type.indexOf(".") > -1) {

						// Namespaced trigger; create a regexp to match event type in handle()
						namespaces = type.split(".");
						type = namespaces.shift();
						namespaces.sort();
					}
					ontype = type.indexOf(":") < 0 && "on" + type;

					// Caller can pass in a jQuery.Event object, Object, or just an event type string
					event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === 'undefined' ? 'undefined' : _typeof(event)) === "object" && event);

					// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
					event.isTrigger = onlyHandlers ? 2 : 3;
					event.namespace = namespaces.join(".");
					event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

					// Clean up the event in case it is being reused
					event.result = undefined;
					if (!event.target) {
						event.target = elem;
					}

					// Clone any incoming data and prepend the event, creating the handler arg list
					data = data == null ? [event] : jQuery.makeArray(data, [event]);

					// Allow special events to draw outside the lines
					special = jQuery.event.special[type] || {};
					if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
						return;
					}

					// Determine event propagation path in advance, per W3C events spec (#9951)
					// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
					if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

						bubbleType = special.delegateType || type;
						if (!rfocusMorph.test(bubbleType + type)) {
							cur = cur.parentNode;
						}
						for (; cur; cur = cur.parentNode) {
							eventPath.push(cur);
							tmp = cur;
						}

						// Only add window if we got to document (e.g., not plain obj or detached DOM)
						if (tmp === (elem.ownerDocument || document)) {
							eventPath.push(tmp.defaultView || tmp.parentWindow || window);
						}
					}

					// Fire handlers on the event path
					i = 0;
					while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
						lastElement = cur;
						event.type = i > 1 ? bubbleType : special.bindType || type;

						// jQuery handler
						handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
						if (handle) {
							handle.apply(cur, data);
						}

						// Native handler
						handle = ontype && cur[ontype];
						if (handle && handle.apply && acceptData(cur)) {
							event.result = handle.apply(cur, data);
							if (event.result === false) {
								event.preventDefault();
							}
						}
					}
					event.type = type;

					// If nobody prevented the default action, do it now
					if (!onlyHandlers && !event.isDefaultPrevented()) {

						if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

							// Call a native DOM method on the target with the same name as the event.
							// Don't do default actions on window, that's where global variables be (#6170)
							if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

								// Don't re-trigger an onFOO event when we call its FOO() method
								tmp = elem[ontype];

								if (tmp) {
									elem[ontype] = null;
								}

								// Prevent re-triggering of the same event, since we already bubbled it above
								jQuery.event.triggered = type;

								if (event.isPropagationStopped()) {
									lastElement.addEventListener(type, stopPropagationCallback);
								}

								elem[type]();

								if (event.isPropagationStopped()) {
									lastElement.removeEventListener(type, stopPropagationCallback);
								}

								jQuery.event.triggered = undefined;

								if (tmp) {
									elem[ontype] = tmp;
								}
							}
						}
					}

					return event.result;
				},

				// Piggyback on a donor event to simulate a different one
				// Used only for `focus(in | out)` events
				simulate: function simulate(type, elem, event) {
					var e = jQuery.extend(new jQuery.Event(), event, {
						type: type,
						isSimulated: true
					});

					jQuery.event.trigger(e, null, elem);
				}

			});

			jQuery.fn.extend({

				trigger: function trigger(type, data) {
					return this.each(function () {
						jQuery.event.trigger(type, data, this);
					});
				},
				triggerHandler: function triggerHandler(type, data) {
					var elem = this[0];
					if (elem) {
						return jQuery.event.trigger(type, data, elem, true);
					}
				}
			});

			// Support: Firefox <=44
			// Firefox doesn't have focus(in | out) events
			// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
			//
			// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
			// focus(in | out) events fire after focus & blur events,
			// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
			// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
			if (!support.focusin) {
				jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

					// Attach a single capturing handler on the document while someone wants focusin/focusout
					var handler = function handler(event) {
						jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
					};

					jQuery.event.special[fix] = {
						setup: function setup() {
							var doc = this.ownerDocument || this,
							    attaches = dataPriv.access(doc, fix);

							if (!attaches) {
								doc.addEventListener(orig, handler, true);
							}
							dataPriv.access(doc, fix, (attaches || 0) + 1);
						},
						teardown: function teardown() {
							var doc = this.ownerDocument || this,
							    attaches = dataPriv.access(doc, fix) - 1;

							if (!attaches) {
								doc.removeEventListener(orig, handler, true);
								dataPriv.remove(doc, fix);
							} else {
								dataPriv.access(doc, fix, attaches);
							}
						}
					};
				});
			}
			var location = window.location;

			var nonce = Date.now();

			var rquery = /\?/;

			// Cross-browser xml parsing
			jQuery.parseXML = function (data) {
				var xml;
				if (!data || typeof data !== "string") {
					return null;
				}

				// Support: IE 9 - 11 only
				// IE throws on parseFromString with invalid input.
				try {
					xml = new window.DOMParser().parseFromString(data, "text/xml");
				} catch (e) {
					xml = undefined;
				}

				if (!xml || xml.getElementsByTagName("parsererror").length) {
					jQuery.error("Invalid XML: " + data);
				}
				return xml;
			};

			var rbracket = /\[\]$/,
			    rCRLF = /\r?\n/g,
			    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
			    rsubmittable = /^(?:input|select|textarea|keygen)/i;

			function buildParams(prefix, obj, traditional, add) {
				var name;

				if (Array.isArray(obj)) {

					// Serialize array item.
					jQuery.each(obj, function (i, v) {
						if (traditional || rbracket.test(prefix)) {

							// Treat each array item as a scalar.
							add(prefix, v);
						} else {

							// Item is non-scalar (array or object), encode its numeric index.
							buildParams(prefix + "[" + ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
						}
					});
				} else if (!traditional && toType(obj) === "object") {

					// Serialize object item.
					for (name in obj) {
						buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
					}
				} else {

					// Serialize scalar item.
					add(prefix, obj);
				}
			}

			// Serialize an array of form elements or a set of
			// key/values into a query string
			jQuery.param = function (a, traditional) {
				var prefix,
				    s = [],
				    add = function add(key, valueOrFunction) {

					// If value is a function, invoke it and use its return value
					var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

					s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
				};

				// If an array was passed in, assume that it is an array of form elements.
				if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

					// Serialize the form elements
					jQuery.each(a, function () {
						add(this.name, this.value);
					});
				} else {

					// If traditional, encode the "old" way (the way 1.3.2 or older
					// did it), otherwise encode params recursively.
					for (prefix in a) {
						buildParams(prefix, a[prefix], traditional, add);
					}
				}

				// Return the resulting serialization
				return s.join("&");
			};

			jQuery.fn.extend({
				serialize: function serialize() {
					return jQuery.param(this.serializeArray());
				},
				serializeArray: function serializeArray() {
					return this.map(function () {

						// Can add propHook for "elements" to filter or add form elements
						var elements = jQuery.prop(this, "elements");
						return elements ? jQuery.makeArray(elements) : this;
					}).filter(function () {
						var type = this.type;

						// Use .is( ":disabled" ) so that fieldset[disabled] works
						return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
					}).map(function (i, elem) {
						var val = jQuery(this).val();

						if (val == null) {
							return null;
						}

						if (Array.isArray(val)) {
							return jQuery.map(val, function (val) {
								return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
							});
						}

						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}).get();
				}
			});

			var r20 = /%20/g,
			    rhash = /#.*$/,
			    rantiCache = /([?&])_=[^&]*/,
			    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


			// #7653, #8125, #8152: local protocol detection
			rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			    rnoContent = /^(?:GET|HEAD)$/,
			    rprotocol = /^\/\//,


			/* Prefilters
    * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
    * 2) These are called:
    *    - BEFORE asking for a transport
    *    - AFTER param serialization (s.data is a string if s.processData is true)
    * 3) key is the dataType
    * 4) the catchall symbol "*" can be used
    * 5) execution will start with transport dataType and THEN continue down to "*" if needed
    */
			prefilters = {},


			/* Transports bindings
    * 1) key is the dataType
    * 2) the catchall symbol "*" can be used
    * 3) selection will start with transport dataType and THEN go to "*" if needed
    */
			transports = {},


			// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
			allTypes = "*/".concat("*"),


			// Anchor tag for parsing the document origin
			originAnchor = document.createElement("a");
			originAnchor.href = location.href;

			// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
			function addToPrefiltersOrTransports(structure) {

				// dataTypeExpression is optional and defaults to "*"
				return function (dataTypeExpression, func) {

					if (typeof dataTypeExpression !== "string") {
						func = dataTypeExpression;
						dataTypeExpression = "*";
					}

					var dataType,
					    i = 0,
					    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

					if (isFunction(func)) {

						// For each dataType in the dataTypeExpression
						while (dataType = dataTypes[i++]) {

							// Prepend if requested
							if (dataType[0] === "+") {
								dataType = dataType.slice(1) || "*";
								(structure[dataType] = structure[dataType] || []).unshift(func);

								// Otherwise append
							} else {
								(structure[dataType] = structure[dataType] || []).push(func);
							}
						}
					}
				};
			}

			// Base inspection function for prefilters and transports
			function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

				var inspected = {},
				    seekingTransport = structure === transports;

				function inspect(dataType) {
					var selected;
					inspected[dataType] = true;
					jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
						var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
						if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

							options.dataTypes.unshift(dataTypeOrTransport);
							inspect(dataTypeOrTransport);
							return false;
						} else if (seekingTransport) {
							return !(selected = dataTypeOrTransport);
						}
					});
					return selected;
				}

				return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
			}

			// A special extend for ajax options
			// that takes "flat" options (not to be deep extended)
			// Fixes #9887
			function ajaxExtend(target, src) {
				var key,
				    deep,
				    flatOptions = jQuery.ajaxSettings.flatOptions || {};

				for (key in src) {
					if (src[key] !== undefined) {
						(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
					}
				}
				if (deep) {
					jQuery.extend(true, target, deep);
				}

				return target;
			}

			/* Handles responses to an ajax request:
    * - finds the right dataType (mediates between content-type and expected dataType)
    * - returns the corresponding response
    */
			function ajaxHandleResponses(s, jqXHR, responses) {

				var ct,
				    type,
				    finalDataType,
				    firstDataType,
				    contents = s.contents,
				    dataTypes = s.dataTypes;

				// Remove auto dataType and get content-type in the process
				while (dataTypes[0] === "*") {
					dataTypes.shift();
					if (ct === undefined) {
						ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
					}
				}

				// Check if we're dealing with a known content-type
				if (ct) {
					for (type in contents) {
						if (contents[type] && contents[type].test(ct)) {
							dataTypes.unshift(type);
							break;
						}
					}
				}

				// Check to see if we have a response for the expected dataType
				if (dataTypes[0] in responses) {
					finalDataType = dataTypes[0];
				} else {

					// Try convertible dataTypes
					for (type in responses) {
						if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
							finalDataType = type;
							break;
						}
						if (!firstDataType) {
							firstDataType = type;
						}
					}

					// Or just use first one
					finalDataType = finalDataType || firstDataType;
				}

				// If we found a dataType
				// We add the dataType to the list if needed
				// and return the corresponding response
				if (finalDataType) {
					if (finalDataType !== dataTypes[0]) {
						dataTypes.unshift(finalDataType);
					}
					return responses[finalDataType];
				}
			}

			/* Chain conversions given the request and the original response
    * Also sets the responseXXX fields on the jqXHR instance
    */
			function ajaxConvert(s, response, jqXHR, isSuccess) {
				var conv2,
				    current,
				    conv,
				    tmp,
				    prev,
				    converters = {},


				// Work with a copy of dataTypes in case we need to modify it for conversion
				dataTypes = s.dataTypes.slice();

				// Create converters map with lowercased keys
				if (dataTypes[1]) {
					for (conv in s.converters) {
						converters[conv.toLowerCase()] = s.converters[conv];
					}
				}

				current = dataTypes.shift();

				// Convert to each sequential dataType
				while (current) {

					if (s.responseFields[current]) {
						jqXHR[s.responseFields[current]] = response;
					}

					// Apply the dataFilter if provided
					if (!prev && isSuccess && s.dataFilter) {
						response = s.dataFilter(response, s.dataType);
					}

					prev = current;
					current = dataTypes.shift();

					if (current) {

						// There's only work to do if current dataType is non-auto
						if (current === "*") {

							current = prev;

							// Convert response if prev dataType is non-auto and differs from current
						} else if (prev !== "*" && prev !== current) {

							// Seek a direct converter
							conv = converters[prev + " " + current] || converters["* " + current];

							// If none found, seek a pair
							if (!conv) {
								for (conv2 in converters) {

									// If conv2 outputs current
									tmp = conv2.split(" ");
									if (tmp[1] === current) {

										// If prev can be converted to accepted input
										conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
										if (conv) {

											// Condense equivalence converters
											if (conv === true) {
												conv = converters[conv2];

												// Otherwise, insert the intermediate dataType
											} else if (converters[conv2] !== true) {
												current = tmp[0];
												dataTypes.unshift(tmp[1]);
											}
											break;
										}
									}
								}
							}

							// Apply converter (if not an equivalence)
							if (conv !== true) {

								// Unless errors are allowed to bubble, catch and return them
								if (conv && s.throws) {
									response = conv(response);
								} else {
									try {
										response = conv(response);
									} catch (e) {
										return {
											state: "parsererror",
											error: conv ? e : "No conversion from " + prev + " to " + current
										};
									}
								}
							}
						}
					}
				}

				return { state: "success", data: response };
			}

			jQuery.extend({

				// Counter for holding the number of active queries
				active: 0,

				// Last-Modified header cache for next request
				lastModified: {},
				etag: {},

				ajaxSettings: {
					url: location.href,
					type: "GET",
					isLocal: rlocalProtocol.test(location.protocol),
					global: true,
					processData: true,
					async: true,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",

					/*
     timeout: 0,
     data: null,
     dataType: null,
     username: null,
     password: null,
     cache: null,
     throws: false,
     traditional: false,
     headers: {},
     */

					accepts: {
						"*": allTypes,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},

					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},

					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},

					// Data converters
					// Keys separate source (or catchall "*") and destination types with a single space
					converters: {

						// Convert anything to text
						"* text": String,

						// Text to html (true = no transformation)
						"text html": true,

						// Evaluate text as a json expression
						"text json": JSON.parse,

						// Parse text as xml
						"text xml": jQuery.parseXML
					},

					// For options that shouldn't be deep extended:
					// you can add your own custom options here if
					// and when you create one that shouldn't be
					// deep extended (see ajaxExtend)
					flatOptions: {
						url: true,
						context: true
					}
				},

				// Creates a full fledged settings object into target
				// with both ajaxSettings and settings fields.
				// If target is omitted, writes into ajaxSettings.
				ajaxSetup: function ajaxSetup(target, settings) {
					return settings ?

					// Building a settings object
					ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

					// Extending ajaxSettings
					ajaxExtend(jQuery.ajaxSettings, target);
				},

				ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
				ajaxTransport: addToPrefiltersOrTransports(transports),

				// Main method
				ajax: function ajax(url, options) {

					// If url is an object, simulate pre-1.5 signature
					if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === "object") {
						options = url;
						url = undefined;
					}

					// Force options to be an object
					options = options || {};

					var transport,


					// URL without anti-cache param
					cacheURL,


					// Response headers
					responseHeadersString,
					    responseHeaders,


					// timeout handle
					timeoutTimer,


					// Url cleanup var
					urlAnchor,


					// Request state (becomes false upon send and true upon completion)
					completed,


					// To know if global events are to be dispatched
					fireGlobals,


					// Loop variable
					i,


					// uncached part of the url
					uncached,


					// Create the final options object
					s = jQuery.ajaxSetup({}, options),


					// Callbacks context
					callbackContext = s.context || s,


					// Context for global events is callbackContext if it is a DOM node or jQuery collection
					globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


					// Deferreds
					deferred = jQuery.Deferred(),
					    completeDeferred = jQuery.Callbacks("once memory"),


					// Status-dependent callbacks
					_statusCode = s.statusCode || {},


					// Headers (they are sent all at once)
					requestHeaders = {},
					    requestHeadersNames = {},


					// Default abort message
					strAbort = "canceled",


					// Fake xhr
					jqXHR = {
						readyState: 0,

						// Builds headers hashtable if needed
						getResponseHeader: function getResponseHeader(key) {
							var match;
							if (completed) {
								if (!responseHeaders) {
									responseHeaders = {};
									while (match = rheaders.exec(responseHeadersString)) {
										responseHeaders[match[1].toLowerCase()] = match[2];
									}
								}
								match = responseHeaders[key.toLowerCase()];
							}
							return match == null ? null : match;
						},

						// Raw string
						getAllResponseHeaders: function getAllResponseHeaders() {
							return completed ? responseHeadersString : null;
						},

						// Caches the header
						setRequestHeader: function setRequestHeader(name, value) {
							if (completed == null) {
								name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
								requestHeaders[name] = value;
							}
							return this;
						},

						// Overrides response content-type header
						overrideMimeType: function overrideMimeType(type) {
							if (completed == null) {
								s.mimeType = type;
							}
							return this;
						},

						// Status-dependent callbacks
						statusCode: function statusCode(map) {
							var code;
							if (map) {
								if (completed) {

									// Execute the appropriate callbacks
									jqXHR.always(map[jqXHR.status]);
								} else {

									// Lazy-add the new callbacks in a way that preserves old ones
									for (code in map) {
										_statusCode[code] = [_statusCode[code], map[code]];
									}
								}
							}
							return this;
						},

						// Cancel the request
						abort: function abort(statusText) {
							var finalText = statusText || strAbort;
							if (transport) {
								transport.abort(finalText);
							}
							done(0, finalText);
							return this;
						}
					};

					// Attach deferreds
					deferred.promise(jqXHR);

					// Add protocol if not provided (prefilters might expect it)
					// Handle falsy url in the settings object (#10093: consistency with old signature)
					// We also use the url parameter if available
					s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

					// Alias method option to type as per ticket #12004
					s.type = options.method || options.type || s.method || s.type;

					// Extract dataTypes list
					s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

					// A cross-domain request is in order when the origin doesn't match the current origin.
					if (s.crossDomain == null) {
						urlAnchor = document.createElement("a");

						// Support: IE <=8 - 11, Edge 12 - 15
						// IE throws exception on accessing the href property if url is malformed,
						// e.g. http://example.com:80x/
						try {
							urlAnchor.href = s.url;

							// Support: IE <=8 - 11 only
							// Anchor's host property isn't correctly set when s.url is relative
							urlAnchor.href = urlAnchor.href;
							s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
						} catch (e) {

							// If there is an error parsing the URL, assume it is crossDomain,
							// it can be rejected by the transport if it is invalid
							s.crossDomain = true;
						}
					}

					// Convert data if not already a string
					if (s.data && s.processData && typeof s.data !== "string") {
						s.data = jQuery.param(s.data, s.traditional);
					}

					// Apply prefilters
					inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

					// If request was aborted inside a prefilter, stop there
					if (completed) {
						return jqXHR;
					}

					// We can fire global events as of now if asked to
					// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
					fireGlobals = jQuery.event && s.global;

					// Watch for a new set of requests
					if (fireGlobals && jQuery.active++ === 0) {
						jQuery.event.trigger("ajaxStart");
					}

					// Uppercase the type
					s.type = s.type.toUpperCase();

					// Determine if request has content
					s.hasContent = !rnoContent.test(s.type);

					// Save the URL in case we're toying with the If-Modified-Since
					// and/or If-None-Match header later on
					// Remove hash to simplify url manipulation
					cacheURL = s.url.replace(rhash, "");

					// More options handling for requests with no content
					if (!s.hasContent) {

						// Remember the hash so we can put it back
						uncached = s.url.slice(cacheURL.length);

						// If data is available and should be processed, append data to url
						if (s.data && (s.processData || typeof s.data === "string")) {
							cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

							// #9682: remove data so that it's not used in an eventual retry
							delete s.data;
						}

						// Add or update anti-cache param if needed
						if (s.cache === false) {
							cacheURL = cacheURL.replace(rantiCache, "$1");
							uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
						}

						// Put hash and anti-cache on the URL that will be requested (gh-1732)
						s.url = cacheURL + uncached;

						// Change '%20' to '+' if this is encoded form body content (gh-2658)
					} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
						s.data = s.data.replace(r20, "+");
					}

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						if (jQuery.lastModified[cacheURL]) {
							jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
						}
						if (jQuery.etag[cacheURL]) {
							jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
						}
					}

					// Set the correct header, if data is being sent
					if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
						jqXHR.setRequestHeader("Content-Type", s.contentType);
					}

					// Set the Accepts header for the server, depending on the dataType
					jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

					// Check for headers option
					for (i in s.headers) {
						jqXHR.setRequestHeader(i, s.headers[i]);
					}

					// Allow custom headers/mimetypes and early abort
					if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

						// Abort if not done already and return
						return jqXHR.abort();
					}

					// Aborting is no longer a cancellation
					strAbort = "abort";

					// Install callbacks on deferreds
					completeDeferred.add(s.complete);
					jqXHR.done(s.success);
					jqXHR.fail(s.error);

					// Get transport
					transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

					// If no transport, we auto-abort
					if (!transport) {
						done(-1, "No Transport");
					} else {
						jqXHR.readyState = 1;

						// Send global event
						if (fireGlobals) {
							globalEventContext.trigger("ajaxSend", [jqXHR, s]);
						}

						// If request was aborted inside ajaxSend, stop there
						if (completed) {
							return jqXHR;
						}

						// Timeout
						if (s.async && s.timeout > 0) {
							timeoutTimer = window.setTimeout(function () {
								jqXHR.abort("timeout");
							}, s.timeout);
						}

						try {
							completed = false;
							transport.send(requestHeaders, done);
						} catch (e) {

							// Rethrow post-completion exceptions
							if (completed) {
								throw e;
							}

							// Propagate others as results
							done(-1, e);
						}
					}

					// Callback for when everything is done
					function done(status, nativeStatusText, responses, headers) {
						var isSuccess,
						    success,
						    error,
						    response,
						    modified,
						    statusText = nativeStatusText;

						// Ignore repeat invocations
						if (completed) {
							return;
						}

						completed = true;

						// Clear timeout if it exists
						if (timeoutTimer) {
							window.clearTimeout(timeoutTimer);
						}

						// Dereference transport for early garbage collection
						// (no matter how long the jqXHR object will be used)
						transport = undefined;

						// Cache response headers
						responseHeadersString = headers || "";

						// Set readyState
						jqXHR.readyState = status > 0 ? 4 : 0;

						// Determine if successful
						isSuccess = status >= 200 && status < 300 || status === 304;

						// Get response data
						if (responses) {
							response = ajaxHandleResponses(s, jqXHR, responses);
						}

						// Convert no matter what (that way responseXXX fields are always set)
						response = ajaxConvert(s, response, jqXHR, isSuccess);

						// If successful, handle type chaining
						if (isSuccess) {

							// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
							if (s.ifModified) {
								modified = jqXHR.getResponseHeader("Last-Modified");
								if (modified) {
									jQuery.lastModified[cacheURL] = modified;
								}
								modified = jqXHR.getResponseHeader("etag");
								if (modified) {
									jQuery.etag[cacheURL] = modified;
								}
							}

							// if no content
							if (status === 204 || s.type === "HEAD") {
								statusText = "nocontent";

								// if not modified
							} else if (status === 304) {
								statusText = "notmodified";

								// If we have data, let's convert it
							} else {
								statusText = response.state;
								success = response.data;
								error = response.error;
								isSuccess = !error;
							}
						} else {

							// Extract error from statusText and normalize for non-aborts
							error = statusText;
							if (status || !statusText) {
								statusText = "error";
								if (status < 0) {
									status = 0;
								}
							}
						}

						// Set data for the fake xhr object
						jqXHR.status = status;
						jqXHR.statusText = (nativeStatusText || statusText) + "";

						// Success/Error
						if (isSuccess) {
							deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
						} else {
							deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
						}

						// Status-dependent callbacks
						jqXHR.statusCode(_statusCode);
						_statusCode = undefined;

						if (fireGlobals) {
							globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
						}

						// Complete
						completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

						if (fireGlobals) {
							globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

							// Handle the global AJAX counter
							if (! --jQuery.active) {
								jQuery.event.trigger("ajaxStop");
							}
						}
					}

					return jqXHR;
				},

				getJSON: function getJSON(url, data, callback) {
					return jQuery.get(url, data, callback, "json");
				},

				getScript: function getScript(url, callback) {
					return jQuery.get(url, undefined, callback, "script");
				}
			});

			jQuery.each(["get", "post"], function (i, method) {
				jQuery[method] = function (url, data, callback, type) {

					// Shift arguments if data argument was omitted
					if (isFunction(data)) {
						type = type || callback;
						callback = data;
						data = undefined;
					}

					// The url can be an options object (which then must have .url)
					return jQuery.ajax(jQuery.extend({
						url: url,
						type: method,
						dataType: type,
						data: data,
						success: callback
					}, jQuery.isPlainObject(url) && url));
				};
			});

			jQuery._evalUrl = function (url) {
				return jQuery.ajax({
					url: url,

					// Make this explicit, since user can override this through ajaxSetup (#11264)
					type: "GET",
					dataType: "script",
					cache: true,
					async: false,
					global: false,
					"throws": true
				});
			};

			jQuery.fn.extend({
				wrapAll: function wrapAll(html) {
					var wrap;

					if (this[0]) {
						if (isFunction(html)) {
							html = html.call(this[0]);
						}

						// The elements to wrap the target around
						wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

						if (this[0].parentNode) {
							wrap.insertBefore(this[0]);
						}

						wrap.map(function () {
							var elem = this;

							while (elem.firstElementChild) {
								elem = elem.firstElementChild;
							}

							return elem;
						}).append(this);
					}

					return this;
				},

				wrapInner: function wrapInner(html) {
					if (isFunction(html)) {
						return this.each(function (i) {
							jQuery(this).wrapInner(html.call(this, i));
						});
					}

					return this.each(function () {
						var self = jQuery(this),
						    contents = self.contents();

						if (contents.length) {
							contents.wrapAll(html);
						} else {
							self.append(html);
						}
					});
				},

				wrap: function wrap(html) {
					var htmlIsFunction = isFunction(html);

					return this.each(function (i) {
						jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
					});
				},

				unwrap: function unwrap(selector) {
					this.parent(selector).not("body").each(function () {
						jQuery(this).replaceWith(this.childNodes);
					});
					return this;
				}
			});

			jQuery.expr.pseudos.hidden = function (elem) {
				return !jQuery.expr.pseudos.visible(elem);
			};
			jQuery.expr.pseudos.visible = function (elem) {
				return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
			};

			jQuery.ajaxSettings.xhr = function () {
				try {
					return new window.XMLHttpRequest();
				} catch (e) {}
			};

			var xhrSuccessStatus = {

				// File protocol always yields status code 0, assume 200
				0: 200,

				// Support: IE <=9 only
				// #1450: sometimes IE returns 1223 when it should be 204
				1223: 204
			},
			    xhrSupported = jQuery.ajaxSettings.xhr();

			support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
			support.ajax = xhrSupported = !!xhrSupported;

			jQuery.ajaxTransport(function (options) {
				var _callback, errorCallback;

				// Cross domain only allowed if supported through XMLHttpRequest
				if (support.cors || xhrSupported && !options.crossDomain) {
					return {
						send: function send(headers, complete) {
							var i,
							    xhr = options.xhr();

							xhr.open(options.type, options.url, options.async, options.username, options.password);

							// Apply custom fields if provided
							if (options.xhrFields) {
								for (i in options.xhrFields) {
									xhr[i] = options.xhrFields[i];
								}
							}

							// Override mime type if needed
							if (options.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(options.mimeType);
							}

							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if (!options.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}

							// Set headers
							for (i in headers) {
								xhr.setRequestHeader(i, headers[i]);
							}

							// Callback
							_callback = function callback(type) {
								return function () {
									if (_callback) {
										_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

										if (type === "abort") {
											xhr.abort();
										} else if (type === "error") {

											// Support: IE <=9 only
											// On a manual native abort, IE9 throws
											// errors on any property access that is not readyState
											if (typeof xhr.status !== "number") {
												complete(0, "error");
											} else {
												complete(

												// File: protocol always yields status 0; see #8605, #14207
												xhr.status, xhr.statusText);
											}
										} else {
											complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

											// Support: IE <=9 only
											// IE9 has no XHR2 but throws on binary (trac-11426)
											// For XHR2 non-text, let the caller handle it (gh-2498)
											(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
										}
									}
								};
							};

							// Listen to events
							xhr.onload = _callback();
							errorCallback = xhr.onerror = xhr.ontimeout = _callback("error");

							// Support: IE 9 only
							// Use onreadystatechange to replace onabort
							// to handle uncaught aborts
							if (xhr.onabort !== undefined) {
								xhr.onabort = errorCallback;
							} else {
								xhr.onreadystatechange = function () {

									// Check readyState before timeout as it changes
									if (xhr.readyState === 4) {

										// Allow onerror to be called first,
										// but that will not handle a native abort
										// Also, save errorCallback to a variable
										// as xhr.onerror cannot be accessed
										window.setTimeout(function () {
											if (_callback) {
												errorCallback();
											}
										});
									}
								};
							}

							// Create the abort callback
							_callback = _callback("abort");

							try {

								// Do send the request (this may raise an exception)
								xhr.send(options.hasContent && options.data || null);
							} catch (e) {

								// #14683: Only rethrow if this hasn't been notified as an error yet
								if (_callback) {
									throw e;
								}
							}
						},

						abort: function abort() {
							if (_callback) {
								_callback();
							}
						}
					};
				}
			});

			// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
			jQuery.ajaxPrefilter(function (s) {
				if (s.crossDomain) {
					s.contents.script = false;
				}
			});

			// Install script dataType
			jQuery.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function textScript(text) {
						jQuery.globalEval(text);
						return text;
					}
				}
			});

			// Handle cache's special case and crossDomain
			jQuery.ajaxPrefilter("script", function (s) {
				if (s.cache === undefined) {
					s.cache = false;
				}
				if (s.crossDomain) {
					s.type = "GET";
				}
			});

			// Bind script tag hack transport
			jQuery.ajaxTransport("script", function (s) {

				// This transport only deals with cross domain requests
				if (s.crossDomain) {
					var script, _callback2;
					return {
						send: function send(_, complete) {
							script = jQuery("<script>").prop({
								charset: s.scriptCharset,
								src: s.url
							}).on("load error", _callback2 = function callback(evt) {
								script.remove();
								_callback2 = null;
								if (evt) {
									complete(evt.type === "error" ? 404 : 200, evt.type);
								}
							});

							// Use native DOM manipulation to avoid our domManip AJAX trickery
							document.head.appendChild(script[0]);
						},
						abort: function abort() {
							if (_callback2) {
								_callback2();
							}
						}
					};
				}
			});

			var oldCallbacks = [],
			    rjsonp = /(=)\?(?=&|$)|\?\?/;

			// Default jsonp settings
			jQuery.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function jsonpCallback() {
					var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
					this[callback] = true;
					return callback;
				}
			});

			// Detect, normalize options and install callbacks for jsonp requests
			jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

				var callbackName,
				    overwritten,
				    responseContainer,
				    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

				// Handle iff the expected data type is "jsonp" or we have a parameter to set
				if (jsonProp || s.dataTypes[0] === "jsonp") {

					// Get callback name, remembering preexisting value associated with it
					callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

					// Insert callback into url or form data
					if (jsonProp) {
						s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
					} else if (s.jsonp !== false) {
						s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
					}

					// Use data converter to retrieve json after script execution
					s.converters["script json"] = function () {
						if (!responseContainer) {
							jQuery.error(callbackName + " was not called");
						}
						return responseContainer[0];
					};

					// Force json dataType
					s.dataTypes[0] = "json";

					// Install callback
					overwritten = window[callbackName];
					window[callbackName] = function () {
						responseContainer = arguments;
					};

					// Clean-up function (fires after converters)
					jqXHR.always(function () {

						// If previous value didn't exist - remove it
						if (overwritten === undefined) {
							jQuery(window).removeProp(callbackName);

							// Otherwise restore preexisting value
						} else {
							window[callbackName] = overwritten;
						}

						// Save back as free
						if (s[callbackName]) {

							// Make sure that re-using the options doesn't screw things around
							s.jsonpCallback = originalSettings.jsonpCallback;

							// Save the callback name for future use
							oldCallbacks.push(callbackName);
						}

						// Call if it was a function and we have a response
						if (responseContainer && isFunction(overwritten)) {
							overwritten(responseContainer[0]);
						}

						responseContainer = overwritten = undefined;
					});

					// Delegate to script
					return "script";
				}
			});

			// Support: Safari 8 only
			// In Safari 8 documents created via document.implementation.createHTMLDocument
			// collapse sibling forms: the second one becomes a child of the first one.
			// Because of that, this security measure has to be disabled in Safari 8.
			// https://bugs.webkit.org/show_bug.cgi?id=137337
			support.createHTMLDocument = function () {
				var body = document.implementation.createHTMLDocument("").body;
				body.innerHTML = "<form></form><form></form>";
				return body.childNodes.length === 2;
			}();

			// Argument "data" should be string of html
			// context (optional): If specified, the fragment will be created in this context,
			// defaults to document
			// keepScripts (optional): If true, will include scripts passed in the html string
			jQuery.parseHTML = function (data, context, keepScripts) {
				if (typeof data !== "string") {
					return [];
				}
				if (typeof context === "boolean") {
					keepScripts = context;
					context = false;
				}

				var base, parsed, scripts;

				if (!context) {

					// Stop scripts or inline event handlers from being executed immediately
					// by using document.implementation
					if (support.createHTMLDocument) {
						context = document.implementation.createHTMLDocument("");

						// Set the base href for the created document
						// so any parsed elements with URLs
						// are based on the document's URL (gh-2965)
						base = context.createElement("base");
						base.href = document.location.href;
						context.head.appendChild(base);
					} else {
						context = document;
					}
				}

				parsed = rsingleTag.exec(data);
				scripts = !keepScripts && [];

				// Single tag
				if (parsed) {
					return [context.createElement(parsed[1])];
				}

				parsed = buildFragment([data], context, scripts);

				if (scripts && scripts.length) {
					jQuery(scripts).remove();
				}

				return jQuery.merge([], parsed.childNodes);
			};

			/**
    * Load a url into a page
    */
			jQuery.fn.load = function (url, params, callback) {
				var selector,
				    type,
				    response,
				    self = this,
				    off = url.indexOf(" ");

				if (off > -1) {
					selector = stripAndCollapse(url.slice(off));
					url = url.slice(0, off);
				}

				// If it's a function
				if (isFunction(params)) {

					// We assume that it's the callback
					callback = params;
					params = undefined;

					// Otherwise, build a param string
				} else if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === "object") {
					type = "POST";
				}

				// If we have elements to modify, make the request
				if (self.length > 0) {
					jQuery.ajax({
						url: url,

						// If "type" variable is undefined, then "GET" method will be used.
						// Make value of this field explicit since
						// user can override it through ajaxSetup method
						type: type || "GET",
						dataType: "html",
						data: params
					}).done(function (responseText) {

						// Save response for use in complete callback
						response = arguments;

						self.html(selector ?

						// If a selector was specified, locate the right elements in a dummy div
						// Exclude scripts to avoid IE 'Permission Denied' errors
						jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

						// Otherwise use the full result
						responseText);

						// If the request succeeds, this function gets "data", "status", "jqXHR"
						// but they are ignored because response was set above.
						// If it fails, this function gets "jqXHR", "status", "error"
					}).always(callback && function (jqXHR, status) {
						self.each(function () {
							callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
						});
					});
				}

				return this;
			};

			// Attach a bunch of functions for handling common AJAX events
			jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
				jQuery.fn[type] = function (fn) {
					return this.on(type, fn);
				};
			});

			jQuery.expr.pseudos.animated = function (elem) {
				return jQuery.grep(jQuery.timers, function (fn) {
					return elem === fn.elem;
				}).length;
			};

			jQuery.offset = {
				setOffset: function setOffset(elem, options, i) {
					var curPosition,
					    curLeft,
					    curCSSTop,
					    curTop,
					    curOffset,
					    curCSSLeft,
					    calculatePosition,
					    position = jQuery.css(elem, "position"),
					    curElem = jQuery(elem),
					    props = {};

					// Set position first, in-case top/left are set even on static elem
					if (position === "static") {
						elem.style.position = "relative";
					}

					curOffset = curElem.offset();
					curCSSTop = jQuery.css(elem, "top");
					curCSSLeft = jQuery.css(elem, "left");
					calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

					// Need to be able to calculate position if either
					// top or left is auto and position is either absolute or fixed
					if (calculatePosition) {
						curPosition = curElem.position();
						curTop = curPosition.top;
						curLeft = curPosition.left;
					} else {
						curTop = parseFloat(curCSSTop) || 0;
						curLeft = parseFloat(curCSSLeft) || 0;
					}

					if (isFunction(options)) {

						// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
						options = options.call(elem, i, jQuery.extend({}, curOffset));
					}

					if (options.top != null) {
						props.top = options.top - curOffset.top + curTop;
					}
					if (options.left != null) {
						props.left = options.left - curOffset.left + curLeft;
					}

					if ("using" in options) {
						options.using.call(elem, props);
					} else {
						curElem.css(props);
					}
				}
			};

			jQuery.fn.extend({

				// offset() relates an element's border box to the document origin
				offset: function offset(options) {

					// Preserve chaining for setter
					if (arguments.length) {
						return options === undefined ? this : this.each(function (i) {
							jQuery.offset.setOffset(this, options, i);
						});
					}

					var rect,
					    win,
					    elem = this[0];

					if (!elem) {
						return;
					}

					// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
					// Support: IE <=11 only
					// Running getBoundingClientRect on a
					// disconnected node in IE throws an error
					if (!elem.getClientRects().length) {
						return { top: 0, left: 0 };
					}

					// Get document-relative position by adding viewport scroll to viewport-relative gBCR
					rect = elem.getBoundingClientRect();
					win = elem.ownerDocument.defaultView;
					return {
						top: rect.top + win.pageYOffset,
						left: rect.left + win.pageXOffset
					};
				},

				// position() relates an element's margin box to its offset parent's padding box
				// This corresponds to the behavior of CSS absolute positioning
				position: function position() {
					if (!this[0]) {
						return;
					}

					var offsetParent,
					    offset,
					    doc,
					    elem = this[0],
					    parentOffset = { top: 0, left: 0 };

					// position:fixed elements are offset from the viewport, which itself always has zero offset
					if (jQuery.css(elem, "position") === "fixed") {

						// Assume position:fixed implies availability of getBoundingClientRect
						offset = elem.getBoundingClientRect();
					} else {
						offset = this.offset();

						// Account for the *real* offset parent, which can be the document or its root element
						// when a statically positioned element is identified
						doc = elem.ownerDocument;
						offsetParent = elem.offsetParent || doc.documentElement;
						while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {

							offsetParent = offsetParent.parentNode;
						}
						if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

							// Incorporate borders into its offset, since they are outside its content origin
							parentOffset = jQuery(offsetParent).offset();
							parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
							parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
						}
					}

					// Subtract parent offsets and element margins
					return {
						top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
						left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
					};
				},

				// This method will return documentElement in the following cases:
				// 1) For the element inside the iframe without offsetParent, this method will return
				//    documentElement of the parent window
				// 2) For the hidden or detached element
				// 3) For body or html element, i.e. in case of the html node - it will return itself
				//
				// but those exceptions were never presented as a real life use-cases
				// and might be considered as more preferable results.
				//
				// This logic, however, is not guaranteed and can change at any point in the future
				offsetParent: function offsetParent() {
					return this.map(function () {
						var offsetParent = this.offsetParent;

						while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
							offsetParent = offsetParent.offsetParent;
						}

						return offsetParent || documentElement;
					});
				}
			});

			// Create scrollLeft and scrollTop methods
			jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
				var top = "pageYOffset" === prop;

				jQuery.fn[method] = function (val) {
					return access(this, function (elem, method, val) {

						// Coalesce documents and windows
						var win;
						if (isWindow(elem)) {
							win = elem;
						} else if (elem.nodeType === 9) {
							win = elem.defaultView;
						}

						if (val === undefined) {
							return win ? win[prop] : elem[method];
						}

						if (win) {
							win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
						} else {
							elem[method] = val;
						}
					}, method, val, arguments.length);
				};
			});

			// Support: Safari <=7 - 9.1, Chrome <=37 - 49
			// Add the top/left cssHooks using jQuery.fn.position
			// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
			// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
			// getComputedStyle returns percent when specified for top/left/bottom/right;
			// rather than make the css module depend on the offset module, just check for it here
			jQuery.each(["top", "left"], function (i, prop) {
				jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
					if (computed) {
						computed = curCSS(elem, prop);

						// If curCSS returns percentage, fallback to offset
						return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
					}
				});
			});

			// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
			jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
				jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

					// Margin is only for outerHeight, outerWidth
					jQuery.fn[funcName] = function (margin, value) {
						var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
						    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

						return access(this, function (elem, type, value) {
							var doc;

							if (isWindow(elem)) {

								// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
								return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
							}

							// Get document width or height
							if (elem.nodeType === 9) {
								doc = elem.documentElement;

								// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
								// whichever is greatest
								return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
							}

							return value === undefined ?

							// Get width or height on the element, requesting but not forcing parseFloat
							jQuery.css(elem, type, extra) :

							// Set width or height on the element
							jQuery.style(elem, type, value, extra);
						}, type, chainable ? margin : undefined, chainable);
					};
				});
			});

			jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

				// Handle event binding
				jQuery.fn[name] = function (data, fn) {
					return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
				};
			});

			jQuery.fn.extend({
				hover: function hover(fnOver, fnOut) {
					return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
				}
			});

			jQuery.fn.extend({

				bind: function bind(types, data, fn) {
					return this.on(types, null, data, fn);
				},
				unbind: function unbind(types, fn) {
					return this.off(types, null, fn);
				},

				delegate: function delegate(selector, types, data, fn) {
					return this.on(types, selector, data, fn);
				},
				undelegate: function undelegate(selector, types, fn) {

					// ( namespace ) or ( selector, types [, fn] )
					return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
				}
			});

			// Bind a function to a context, optionally partially applying any
			// arguments.
			// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
			// However, it is not slated for removal any time soon
			jQuery.proxy = function (fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			};

			jQuery.holdReady = function (hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			};
			jQuery.isArray = Array.isArray;
			jQuery.parseJSON = JSON.parse;
			jQuery.nodeName = nodeName;
			jQuery.isFunction = isFunction;
			jQuery.isWindow = isWindow;
			jQuery.camelCase = camelCase;
			jQuery.type = toType;

			jQuery.now = Date.now;

			jQuery.isNumeric = function (obj) {

				// As of jQuery 3.0, isNumeric is limited to
				// strings and numbers (primitives or objects)
				// that can be coerced to finite numbers (gh-2662)
				var type = jQuery.type(obj);
				return (type === "number" || type === "string") &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN(obj - parseFloat(obj));
			};

			// Register as a named AMD module, since jQuery can be concatenated with other
			// files that may use define, but not via a proper concatenation script that
			// understands anonymous AMD modules. A named AMD is safest and most robust
			// way to register. Lowercase jquery is used because AMD module names are
			// derived from file names, and jQuery is normally delivered in a lowercase
			// file name. Do this after creating the global so that if an AMD module wants
			// to call noConflict to hide this version of jQuery, it will work.

			// Note that for maximum portability, libraries that are not jQuery should
			// declare themselves as anonymous modules, and avoid setting a global if an
			// AMD loader is present. jQuery is a special case. For more information, see
			// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return jQuery;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			}

			var

			// Map over jQuery in case of overwrite
			_jQuery = window.jQuery,


			// Map over the $ in case of overwrite
			_$ = window.$;

			jQuery.noConflict = function (deep) {
				if (window.$ === jQuery) {
					window.$ = _$;
				}

				if (deep && window.jQuery === jQuery) {
					window.jQuery = _jQuery;
				}

				return jQuery;
			};

			// Expose jQuery and $ identifiers, even in AMD
			// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
			// and CommonJS for browser emulators (#13566)
			if (!noGlobal) {
				window.jQuery = window.$ = jQuery;
			}

			return jQuery;
		});

		/***/
	},

	/***/"./node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js":
	/*!***********************************************************************!*\
   !*** ./node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js ***!
   \***********************************************************************/
	/*! no static exports found */
	/***/function node_modulesPageScrollToIdJqueryMalihuPageScroll2idJs(module, exports) {

		/*
  == Page scroll to id == 
  Version: 1.5.9 
  Plugin URI: http://manos.malihu.gr/page-scroll-to-id/
  Author: malihu
  Author URI: http://manos.malihu.gr
  License: MIT License (MIT)
  */

		/*
  Copyright 2013  malihu  (email: manos@malihu.gr)
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */

		;(function ($, window, document, undefined) {

			/* plugin namespace, prefix, default selector(s) */

			var pluginNS = "mPageScroll2id",
			    pluginPfx = "mPS2id",
			    defaultSelector = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",


			/* default options */

			defaults = {
				/* scroll animation speed in milliseconds: Integer */
				scrollSpeed: 1000,
				/* auto-adjust animation speed (according to target element position and window scroll): Boolean */
				autoScrollSpeed: true,
				/* scroll animation easing when page is idle: String */
				scrollEasing: "easeInOutQuint",
				/* scroll animation easing while page is scrolling: String */
				scrollingEasing: "easeOutQuint",
				/* end of page "smooth scrolling" (auto-adjust the scroll-to position when bottom elements are too short): Boolean */
				pageEndSmoothScroll: true,
				/* 
    page layout defines scrolling direction: String 
    values: "vertical", "horizontal", "auto" 
    */
				layout: "vertical",
				/* extra space in pixels for the target element position: Integer */
				offset: 0,
				/* highlight the main/default selectors or insert a different set: Boolean, String */
				highlightSelector: false,
				/* class of the clicked element: String */
				clickedClass: pluginPfx + "-clicked",
				/* class of the current target element: String */
				targetClass: pluginPfx + "-target",
				/* class of the highlighted element: String */
				highlightClass: pluginPfx + "-highlight",
				/* force a single highlighted element each time: Boolean */
				forceSingleHighlight: false,
				/* keep element highlighted until next (one element always stays highlighted): boolean */
				keepHighlightUntilNext: false,
				/* highlight elements according to their target and next target position (useful when targets have zero dimensions). Non "auto" layouts only: boolean */
				highlightByNextTarget: false,
				/* disable plugin below [x,y] screen size: boolean, integer, array ([x,y]) */
				disablePluginBelow: false,
				/* enable/disable click events for all selectors */
				clickEvents: true,
				/* append hash to URL/address bar */
				appendHash: false,
				/* user callback functions: fn */
				onStart: function onStart() {},
				onComplete: function onComplete() {},
				/* enable/disable the default selector: Boolean */
				defaultSelector: false,
				/* highlight elements now and in the future */
				live: true,
				/* set specific live selector(s): String */
				liveSelector: false
			},


			/* vars, constants */

			selector,
			    opt,
			    _init,
			    _trigger,
			    _clicked,
			    _target,
			    _to,
			    _axis,
			    _offset,
			    _dataOffset,
			    _totalInstances = 0,
			    _liveTimer,
			    _speed,


			/* 
   ---------------
   methods 
   ---------------
   */

			methods = {

				/* plugin initialization method */

				init: function init(options) {

					/* extend options, store each option in jquery data */

					var options = $.extend(true, {}, defaults, options);

					$(document).data(pluginPfx, options);
					opt = $(document).data(pluginPfx);

					/* check/set jquery (deprecated) selector property if not defined */
					if (!this.selector) {
						var selectorClass = "__" + pluginPfx;
						this.each(function () {
							var el = $(this);
							if (!el.hasClass(selectorClass)) {
								el.addClass(selectorClass);
							}
						});
						this.selector = "." + selectorClass;
					}

					/* live selector */

					if (opt.liveSelector) this.selector += "," + opt.liveSelector;

					/* set selector */

					selector = !selector ? this.selector : selector + "," + this.selector;

					if (opt.defaultSelector) {
						if (_typeof($(selector)) !== "object" || $(selector).length === 0) {
							selector = defaultSelector;
						}
					}

					/* plugin events */

					if (opt.clickEvents) {
						$(document).undelegate("." + pluginPfx).delegate(selector, "click." + pluginPfx, function (e) {
							if (functions._isDisabled.call(null)) {
								functions._removeClasses.call(null);
								return;
							}
							var $this = $(this),
							    href = $this.attr("href"),
							    hrefProp = $this.prop("href").baseVal || $this.prop("href");
							if (href && href.indexOf("#/") !== -1) {
								return;
							}
							functions._reset.call(null);
							_dataOffset = $this.data("ps2id-offset") || 0;
							if (functions._isValid.call(null, href, hrefProp) && functions._findTarget.call(null, href)) {
								e.preventDefault();
								_trigger = "selector";
								_clicked = $this;
								functions._setClasses.call(null, true);
								functions._scrollTo.call(null);
							}
						});
					}

					$(window).unbind("." + pluginPfx).bind("scroll." + pluginPfx + " resize." + pluginPfx, function () {
						if (functions._isDisabled.call(null)) {
							functions._removeClasses.call(null);
							return;
						}
						var targets = $("._" + pluginPfx + "-t");
						targets.each(function (i) {
							var t = $(this),
							    id = t.attr("id"),
							    h = functions._findHighlight.call(null, id);
							functions._setClasses.call(null, false, t, h);
							if (i == targets.length - 1) {
								functions._extendClasses.call(null);
							}
						});
					});

					/* plugin has initialized */

					_init = true;

					/* setup selectors, target elements, basic plugin classes etc. */

					functions._setup.call(null);

					/* 
     monitor for elements matching the current highlight selector and call plugin setup when found (now and in the future) 
     to manually enable/disable: $(document).data("mPS2id").live=boolean 
     */

					functions._live.call(null);
				},

				/* scrollTo method */

				scrollTo: function scrollTo(id, options) {
					if (functions._isDisabled.call(null)) {
						functions._removeClasses.call(null);
						return;
					}
					if (id && typeof id !== "undefined") {
						functions._isInit.call(null);
						var defaults = {
							layout: opt.layout,
							offset: opt.offset,
							clicked: false
						},
						    options = $.extend(true, {}, defaults, options);
						functions._reset.call(null);
						_axis = options.layout;
						_offset = options.offset;
						id = id.indexOf("#") !== -1 ? id : "#" + id;
						if (functions._isValid.call(null, id) && functions._findTarget.call(null, id)) {
							_trigger = "scrollTo";
							_clicked = options.clicked;
							if (_clicked) {
								functions._setClasses.call(null, true);
							}
							functions._scrollTo.call(null);
						}
					}
				},

				/* destroy method */

				destroy: function destroy() {
					$(window).unbind("." + pluginPfx);
					$(document).undelegate("." + pluginPfx).removeData(pluginPfx);
					$("._" + pluginPfx + "-t").removeData(pluginPfx);
					functions._removeClasses.call(null, true);
				}
			},


			/* 
   ---------------
   functions
   ---------------
   */

			functions = {

				/* checks if screen size ([x,y]) is below the value(s) set in disablePluginBelow option */

				_isDisabled: function _isDisabled() {
					var e = window,
					    a = "inner",
					    val = opt.disablePluginBelow instanceof Array ? [opt.disablePluginBelow[0] || 0, opt.disablePluginBelow[1] || 0] : [opt.disablePluginBelow || 0, 0];
					if (!("innerWidth" in window)) {
						a = "client";
						e = document.documentElement || document.body;
					}
					return e[a + "Width"] <= val[0] || e[a + "Height"] <= val[1];
				},

				/* checks if href attribute is valid */

				_isValid: function _isValid(href, hrefProp) {
					if (!href) {
						return;
					}
					hrefProp = !hrefProp ? href : hrefProp;
					var str = hrefProp.indexOf("#/") !== -1 ? hrefProp.split("#/")[0] : hrefProp.split("#")[0],
					    loc = window.location.toString().split("#")[0];
					return href !== "#" && href.indexOf("#") !== -1 && (str === "" || decodeURIComponent(str) === decodeURIComponent(loc));
				},

				/* setup selectors, target elements, basic plugin classes etc. */

				_setup: function _setup() {
					var el = functions._highlightSelector(),
					    i = 1,
					    tp = 0;
					return $(el).each(function () {
						var $this = $(this),
						    href = $this.attr("href"),
						    hrefProp = $this.prop("href").baseVal || $this.prop("href");
						if (functions._isValid.call(null, href, hrefProp)) {
							var id = href.indexOf("#/") !== -1 ? href.split("#/")[1] : href.split("#")[1],
							    t = $("#" + id);
							if (t.length > 0) {
								if (opt.highlightByNextTarget) {
									if (t !== tp) {
										if (!tp) {
											t.data(pluginPfx, { tn: "0" });
										} else {
											tp.data(pluginPfx, { tn: t });
										}
										tp = t;
									}
								}
								if (!t.hasClass("_" + pluginPfx + "-t")) {
									t.addClass("_" + pluginPfx + "-t");
								}
								t.data(pluginPfx, { i: i });
								if (!$this.hasClass("_" + pluginPfx + "-h")) {
									$this.addClass("_" + pluginPfx + "-h");
								}
								var h = functions._findHighlight.call(null, id);
								functions._setClasses.call(null, false, t, h);
								_totalInstances = i;
								i++;
								if (i == $(el).length) {
									functions._extendClasses.call(null);
								}
							}
						}
					});
				},

				/* returns the highlight selector */

				_highlightSelector: function _highlightSelector() {
					return opt.highlightSelector && opt.highlightSelector !== "" ? opt.highlightSelector : selector;
				},

				/* finds the target element */

				_findTarget: function _findTarget(str) {
					var val = str.indexOf("#/") !== -1 ? str.split("#/")[1] : str.split("#")[1],
					    el = $("#" + val);
					if (el.length < 1 || el.css("position") === "fixed") {
						if (val === "top") {
							el = $("body");
						} else {
							return;
						}
					}
					_target = el;
					if (!_axis) {
						_axis = opt.layout;
					}
					_offset = functions._setOffset.call(null);
					_to = [(el.offset().top - _offset[0]).toString(), (el.offset().left - _offset[1]).toString()];
					_to[0] = _to[0] < 0 ? 0 : _to[0];
					_to[1] = _to[1] < 0 ? 0 : _to[1];
					return _to;
				},

				/* sets the offset value (pixels, objects etc.) */

				_setOffset: function _setOffset() {
					if (!_offset) {
						_offset = opt.offset ? opt.offset : 0;
					}
					if (_dataOffset) {
						_offset = _dataOffset;
					}
					var val, obj, y, x;
					switch (typeof _offset === 'undefined' ? 'undefined' : _typeof(_offset)) {
						case "object":
						case "string":
							val = [_offset["y"] ? _offset["y"] : _offset, _offset["x"] ? _offset["x"] : _offset];
							obj = [val[0] instanceof jQuery ? val[0] : $(val[0]), val[1] instanceof jQuery ? val[1] : $(val[1])];
							if (obj[0].length > 0) {
								// js/jquery object
								y = obj[0].height();
								if (obj[0].css("position") === "fixed") {
									// include position for fixed elements
									y += obj[0][0].offsetTop;
								}
							} else if (!isNaN(parseFloat(val[0])) && isFinite(val[0])) {
								// numeric string
								y = parseInt(val[0]);
							} else {
								y = 0; // non-existing value
							}
							if (obj[1].length > 0) {
								// js/jquery object
								x = obj[1].width();
								if (obj[1].css("position") === "fixed") {
									// include position for fixed elements
									x += obj[1][0].offsetLeft;
								}
							} else if (!isNaN(parseFloat(val[1])) && isFinite(val[1])) {
								// numeric string
								x = parseInt(val[1]);
							} else {
								x = 0; // non-existing value
							}
							break;
						case "function":
							val = _offset.call(null); // function (single value or array)
							if (val instanceof Array) {
								y = val[0];
								x = val[1];
							} else {
								y = x = val;
							}
							break;
						default:
							y = x = parseInt(_offset); // number
					}
					return [y, x];
				},

				/* finds the element that should be highlighted */

				_findHighlight: function _findHighlight(id) {
					var wLoc = window.location,
					    loc = wLoc.toString().split("#")[0],
					    locPath = wLoc.pathname;
					return $("._" + pluginPfx + "-h[href='#" + id + "'],._" + pluginPfx + "-h[href='" + loc + "#" + id + "'],._" + pluginPfx + "-h[href='" + locPath + "#" + id + "'],._" + pluginPfx + "-h[href='#/" + id + "'],._" + pluginPfx + "-h[href='" + loc + "#/" + id + "'],._" + pluginPfx + "-h[href='" + locPath + "#/" + id + "']");
				},

				/* sets plugin classes */

				_setClasses: function _setClasses(c, t, h) {
					var cc = opt.clickedClass,
					    tc = opt.targetClass,
					    hc = opt.highlightClass;
					if (c && cc && cc !== "") {
						$("." + cc).removeClass(cc);
						_clicked.addClass(cc);
					} else if (t && tc && tc !== "" && h && hc && hc !== "") {
						if (functions._currentTarget.call(null, t)) {
							t.addClass(tc);
							h.addClass(hc);
						} else {
							if (!opt.keepHighlightUntilNext || $("." + hc).length > 1) {
								t.removeClass(tc);
								h.removeClass(hc);
							}
						}
					}
				},

				/* extends plugin classes */

				_extendClasses: function _extendClasses() {
					var tc = opt.targetClass,
					    hc = opt.highlightClass,
					    $tc = $("." + tc),
					    $hc = $("." + hc),
					    ftc = tc + "-first",
					    ltc = tc + "-last",
					    fhc = hc + "-first",
					    lhc = hc + "-last";
					$("._" + pluginPfx + "-t").removeClass(ftc + " " + ltc);
					$("._" + pluginPfx + "-h").removeClass(fhc + " " + lhc);
					if (!opt.forceSingleHighlight) {
						$tc.slice(0, 1).addClass(ftc).end().slice(-1).addClass(ltc);
						$hc.slice(0, 1).addClass(fhc).end().slice(-1).addClass(lhc);
					} else {
						if (opt.keepHighlightUntilNext && $tc.length > 1) {
							$tc.slice(0, 1).removeClass(tc);$hc.slice(0, 1).removeClass(hc);
						} else {
							$tc.slice(1).removeClass(tc);$hc.slice(1).removeClass(hc);
						}
					}
				},

				/* removes plugin classes */

				_removeClasses: function _removeClasses(destroy) {
					$("." + opt.clickedClass).removeClass(opt.clickedClass);
					$("." + opt.targetClass).removeClass(opt.targetClass + " " + opt.targetClass + "-first " + opt.targetClass + "-last");
					$("." + opt.highlightClass).removeClass(opt.highlightClass + " " + opt.highlightClass + "-first " + opt.highlightClass + "-last");
					if (destroy) {
						$("._" + pluginPfx + "-t").removeClass("_" + pluginPfx + "-t");
						$("._" + pluginPfx + "-h").removeClass("_" + pluginPfx + "-h");
					}
				},

				/* checks if target element is in viewport */

				_currentTarget: function _currentTarget(t) {
					var o = opt["target_" + t.data(pluginPfx).i],
					    dataTarget = t.data("ps2id-target"),
					    rect = dataTarget && $(dataTarget)[0] ? $(dataTarget)[0].getBoundingClientRect() : t[0].getBoundingClientRect();
					if (typeof o !== "undefined") {
						var y = t.offset().top,
						    x = t.offset().left,
						    from = o.from ? o.from + y : y,
						    to = o.to ? o.to + y : y,
						    fromX = o.fromX ? o.fromX + x : x,
						    toX = o.toX ? o.toX + x : x;
						return rect.top >= to && rect.top <= from && rect.left >= toX && rect.left <= fromX;
					} else {
						var wh = $(window).height(),
						    ww = $(window).width(),
						    th = dataTarget ? $(dataTarget).height() : t.height(),
						    tw = dataTarget ? $(dataTarget).width() : t.width(),
						    base = 1 + th / wh,
						    top = base,
						    bottom = th < wh ? base * (wh / th) : base,
						    baseX = 1 + tw / ww,
						    left = baseX,
						    right = tw < ww ? baseX * (ww / tw) : baseX,
						    val = [rect.top <= wh / top, rect.bottom >= wh / bottom, rect.left <= ww / left, rect.right >= ww / right];
						if (opt.highlightByNextTarget) {
							var tn = t.data(pluginPfx).tn;
							if (tn) {
								var rectn = tn[0].getBoundingClientRect();
								if (opt.layout === "vertical") {
									val = [rect.top <= wh / 2, rectn.top > wh / 2, 1, 1];
								} else if (opt.layout === "horizontal") {
									val = [1, 1, rect.left <= ww / 2, rectn.left > ww / 2];
								}
							}
						}
						return val[0] && val[1] && val[2] && val[3];
					}
				},

				/* scrolls the page */

				_scrollTo: function _scrollTo() {
					_speed = functions._scrollSpeed.call(null);
					_to = opt.pageEndSmoothScroll ? functions._pageEndSmoothScroll.call(null) : _to;
					var _scrollable = $("html,body"),
					    speed = opt.autoScrollSpeed ? functions._autoScrollSpeed.call(null) : _speed,
					    easing = _scrollable.is(":animated") ? opt.scrollingEasing : opt.scrollEasing,
					    _t = $(window).scrollTop(),
					    _l = $(window).scrollLeft();
					switch (_axis) {
						case "horizontal":
							if (_l != _to[1]) {
								functions._callbacks.call(null, "onStart");
								_scrollable.stop().animate({ scrollLeft: _to[1] }, speed, easing).promise().then(function () {
									functions._callbacks.call(null, "onComplete");
								});
							}
							break;
						case "auto":
							if (_t != _to[0] || _l != _to[1]) {
								functions._callbacks.call(null, "onStart");
								if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
									// mobile fix
									var left;
									_scrollable.stop().animate({ pageYOffset: _to[0], pageXOffset: _to[1] }, {
										duration: speed,
										easing: easing,
										step: function step(now, fx) {
											if (fx.prop == 'pageXOffset') {
												left = now;
											} else if (fx.prop == 'pageYOffset') {
												window.scrollTo(left, now);
											}
										}
									}).promise().then(function () {
										functions._callbacks.call(null, "onComplete");
									});
								} else {
									_scrollable.stop().animate({ scrollTop: _to[0], scrollLeft: _to[1] }, speed, easing).promise().then(function () {
										functions._callbacks.call(null, "onComplete");
									});
								}
							}
							break;
						default:
							if (_t != _to[0]) {
								functions._callbacks.call(null, "onStart");
								_scrollable.stop().animate({ scrollTop: _to[0] }, speed, easing).promise().then(function () {
									functions._callbacks.call(null, "onComplete");
								});
							}
					}
				},

				/* sets end of page "smooth scrolling" position */

				_pageEndSmoothScroll: function _pageEndSmoothScroll() {
					var _dh = $(document).height(),
					    _dw = $(document).width(),
					    _wh = $(window).height(),
					    _ww = $(window).width();
					return [_dh - _to[0] < _wh ? _dh - _wh : _to[0], _dw - _to[1] < _ww ? _dw - _ww : _to[1]];
				},

				/* sets animation speed (link-specific speed via ps2id-speed-VALUE class on link or link's parent) */

				_scrollSpeed: function _scrollSpeed() {
					var speed = opt.scrollSpeed;
					if (_clicked && _clicked.length) {
						_clicked.add(_clicked.parent()).each(function () {
							var $this = $(this);
							if ($this.attr("class")) {
								var clickedClasses = $this.attr("class").split(" ");
								for (var index in clickedClasses) {
									if (String(clickedClasses[index]).match(/^ps2id-speed-\d+$/)) {
										speed = clickedClasses[index].split("ps2id-speed-")[1];
										break;
									}
								}
							}
						});
					}
					return parseInt(speed);
				},

				/* sets the auto-adjusted animation speed */

				_autoScrollSpeed: function _autoScrollSpeed() {
					var _t = $(window).scrollTop(),
					    _l = $(window).scrollLeft(),
					    _h = $(document).height(),
					    _w = $(document).width(),
					    val = [_speed + _speed * Math.floor(Math.abs(_to[0] - _t) / _h * 100) / 100, _speed + _speed * Math.floor(Math.abs(_to[1] - _l) / _w * 100) / 100];
					return Math.max.apply(Math, val);
				},

				/* user callback functions */

				_callbacks: function _callbacks(c) {
					if (!opt) {
						return;
					}
					this[pluginPfx] = {
						trigger: _trigger, clicked: _clicked, target: _target, scrollTo: { y: _to[0], x: _to[1] }
					};
					switch (c) {
						case "onStart":
							//append hash to URL/address bar
							if (opt.appendHash && window.history && window.history.pushState && _clicked && _clicked.length) {
								var h = "#" + _clicked.attr("href").split("#")[1];
								if (h !== window.location.hash) history.pushState("", "", h);
							}
							opt.onStart.call(null, this[pluginPfx]);
							break;
						case "onComplete":
							opt.onComplete.call(null, this[pluginPfx]);
							break;
					}
				},

				/* resets/clears vars and constants */

				_reset: function _reset() {
					_axis = _offset = _dataOffset = false;
				},

				/* checks if plugin has initialized */

				_isInit: function _isInit() {
					if (!_init) {
						methods.init.apply(this);
					}
				},

				/* live fn */

				_live: function _live() {
					_liveTimer = setTimeout(function () {
						if (opt.live) {
							if ($(functions._highlightSelector()).length !== _totalInstances) {
								functions._setup.call(null);
							}
						} else {
							if (_liveTimer) {
								clearTimeout(_liveTimer);
							}
						}
						functions._live.call(null);
					}, 1000);
				},

				/* extends jquery with custom easings (as jquery ui) */

				_easing: function _easing() {
					$.easing.easeInQuad = $.easing.easeInQuad || function (x) {
						return x * x;
					};
					$.easing.easeOutQuad = $.easing.easeOutQuad || function (x) {
						return 1 - (1 - x) * (1 - x);
					};
					$.easing.easeInOutQuad = $.easing.easeInOutQuad || function (x) {
						return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
					};
					$.easing.easeInCubic = $.easing.easeInCubic || function (x) {
						return x * x * x;
					};
					$.easing.easeOutCubic = $.easing.easeOutCubic || function (x) {
						return 1 - Math.pow(1 - x, 3);
					};
					$.easing.easeInOutCubic = $.easing.easeInOutCubic || function (x) {
						return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
					};
					$.easing.easeInQuart = $.easing.easeInQuart || function (x) {
						return x * x * x * x;
					};
					$.easing.easeOutQuart = $.easing.easeOutQuart || function (x) {
						return 1 - Math.pow(1 - x, 4);
					};
					$.easing.easeInOutQuart = $.easing.easeInOutQuart || function (x) {
						return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
					};
					$.easing.easeInQuint = $.easing.easeInQuint || function (x) {
						return x * x * x * x * x;
					};
					$.easing.easeOutQuint = $.easing.easeOutQuint || function (x) {
						return 1 - Math.pow(1 - x, 5);
					};
					$.easing.easeInOutQuint = $.easing.easeInOutQuint || function (x) {
						return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
					};
					$.easing.easeInExpo = $.easing.easeInExpo || function (x) {
						return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
					};
					$.easing.easeOutExpo = $.easing.easeOutExpo || function (x) {
						return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
					};
					$.easing.easeInOutExpo = $.easing.easeInOutExpo || function (x) {
						return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
					};
					$.easing.easeInSine = $.easing.easeInSine || function (x) {
						return 1 - Math.cos(x * Math.PI / 2);
					};
					$.easing.easeOutSine = $.easing.easeOutSine || function (x) {
						return Math.sin(x * Math.PI / 2);
					};
					$.easing.easeInOutSine = $.easing.easeInOutSine || function (x) {
						return -(Math.cos(Math.PI * x) - 1) / 2;
					};
					$.easing.easeInCirc = $.easing.easeInCirc || function (x) {
						return 1 - Math.sqrt(1 - Math.pow(x, 2));
					};
					$.easing.easeOutCirc = $.easing.easeOutCirc || function (x) {
						return Math.sqrt(1 - Math.pow(x - 1, 2));
					};
					$.easing.easeInOutCirc = $.easing.easeInOutCirc || function (x) {
						return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
					};
					$.easing.easeInElastic = $.easing.easeInElastic || function (x) {
						return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * (2 * Math.PI / 3));
					};
					$.easing.easeOutElastic = $.easing.easeOutElastic || function (x) {
						return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * (2 * Math.PI / 3)) + 1;
					};
					$.easing.easeInOutElastic = $.easing.easeInOutElastic || function (x) {
						return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * (2 * Math.PI / 4.5))) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * (2 * Math.PI / 4.5)) / 2 + 1;
					};
					$.easing.easeInBack = $.easing.easeInBack || function (x) {
						return (1.70158 + 1) * x * x * x - 1.70158 * x * x;
					};
					$.easing.easeOutBack = $.easing.easeOutBack || function (x) {
						return 1 + (1.70158 + 1) * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);
					};
					$.easing.easeInOutBack = $.easing.easeInOutBack || function (x) {
						return x < 0.5 ? Math.pow(2 * x, 2) * ((1.70158 * 1.525 + 1) * 2 * x - 1.70158 * 1.525) / 2 : (Math.pow(2 * x - 2, 2) * ((1.70158 * 1.525 + 1) * (x * 2 - 2) + 1.70158 * 1.525) + 2) / 2;
					};
					$.easing.easeInBounce = $.easing.easeInBounce || function (x) {
						return 1 - __bounceOut(1 - x);
					};
					$.easing.easeOutBounce = $.easing.easeOutBounce || __bounceOut;
					$.easing.easeInOutBounce = $.easing.easeInOutBounce || function (x) {
						return x < 0.5 ? (1 - __bounceOut(1 - 2 * x)) / 2 : (1 + __bounceOut(2 * x - 1)) / 2;
					};
					function __bounceOut(x) {
						var n1 = 7.5625,
						    d1 = 2.75;
						if (x < 1 / d1) {
							return n1 * x * x;
						} else if (x < 2 / d1) {
							return n1 * (x -= 1.5 / d1) * x + .75;
						} else if (x < 2.5 / d1) {
							return n1 * (x -= 2.25 / d1) * x + .9375;
						} else {
							return n1 * (x -= 2.625 / d1) * x + .984375;
						}
					}
				}

				/* 
    ---------------
    plugin setup 
    ---------------
    */

				/* extend jquery with custom easings */

			};functions._easing.call();

			/* plugin constructor functions */

			$.fn[pluginNS] = function (method) {
				if (methods[method]) {
					return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
				} else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === "object" || !method) {
					return methods.init.apply(this, arguments);
				} else {
					$.error("Method " + method + " does not exist");
				}
			};
			$[pluginNS] = function (method) {
				if (methods[method]) {
					return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
				} else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === "object" || !method) {
					return methods.init.apply(this, arguments);
				} else {
					$.error("Method " + method + " does not exist");
				}
			};

			/* 
   allow setting plugin default options. 
   example: $.plugin_name.defaults.option_name="option_value"; 
   */

			$[pluginNS].defaults = defaults;
		})(jQuery, window, document);

		/***/
	},

	/***/"./node_modules/smartscroll/smartscroll.js":
	/*!*************************************************!*\
   !*** ./node_modules/smartscroll/smartscroll.js ***!
   \*************************************************/
	/*! no static exports found */
	/***/function node_modulesSmartscrollSmartscrollJs(module, exports) {

		(function ($) {
			// eslint-disable-line func-names
			/**
    * CONSTANTS
    */

			var MOUSE_EVENTS_STRING = 'mousewheel DOMMouseScroll wheel MozMousePixelScroll';

			/**
    * DEPENDENCIES
    */

			// Register lethargy as a soft dependency
			var lethargy;
			if (typeof Lethargy !== 'undefined' && Lethargy !== null) {
				lethargy = new Lethargy();
			}

			/**
    * FUNCTIONS
    */

			var getWindowTop = function getWindowTop() {
				// jQuery uses only window.pageYOffset
				// https://github.com/jquery/jquery/blob/29370190605ed5ddf5d0371c6ad886a4a4b5e0f9/src/offset.js#L184
				return Math.max(
				// Does not work for IE8 or below
				// Alias for window.scrollY
				// https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
				window.pageYOffset,

				// Does not work for IE versions below Edge
				// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
				//
				// window.scrollY,

				// Caters for quirks mode
				// Deprecated in ES5 strict mode
				// so for standards mode use document.documentElement.scrollTop instead
				//
				window.document.body.scrollTop,

				// Caters for standards mode
				// Should be the same as `window.pageYOffset`
				window.document.documentElement.scrollTop);
			};

			$.smartscroll = function smartscroll(overrides) {
				// eslint-disable-line no-param-reassign
				/**
     * OPTIONS
     */

				// Replace defaults with user-specified options
				// Properties that are `null` or `undefined` are ignored - https://api.jquery.com/jquery.extend/
				var options = $.extend({}, $.smartscroll.defaults, overrides);

				// If `options.sectionSelector` is not set, use `options.sectionClass`
				if (!options.sectionSelector) {
					options.sectionSelector = '.' + options.sectionClass;
				}

				// Invalidate eventEmitter if:
				if (
				// EventEmitter is not available / loaded,
				typeof EventEmitter === 'undefined' || EventEmitter === null
				// or the property of options.eventEmitter it is not an EventEmitter instance
				|| options.eventEmitter && options.eventEmitter.constructor !== EventEmitter) {
					options.eventEmitter = null;
				}

				if (options.bindSwipe) {
					// Adapted from http://stackoverflow.com/a/23230280/2317532,
					// licensed under cc by-sa 3.0 with attribution required
					// http://creativecommons.org/licenses/by-sa/3.0/
					// (Might want to checkout http://stackoverflow.com/a/17567696/2317532 when time permits)
					var xDown = null;
					var yDown = null;

					var handleTouchStart = function handleTouchStart(event) {
						var e = event.originalEvent || event;
						xDown = e.touches[0].clientX;
						yDown = e.touches[0].clientY;
					};

					var handleTouchMove = function handleTouchMove(event) {
						var e = event.originalEvent || event;
						if (!xDown || !yDown) {
							return;
						}

						var xUp = e.touches[0].clientX;
						var yUp = e.touches[0].clientY;

						var xDiff = xDown - xUp;
						var yDiff = yDown - yUp;

						if (Math.abs(xDiff) > Math.abs(yDiff)) {
							if (xDiff > 0) {
								options.eventEmitter.emitEvent('swipeLeft');
							} else {
								options.eventEmitter.emitEvent('swipeRight');
							}
						} else if (yDiff > 0) {
							options.eventEmitter.emitEvent('swipeUp');
						} else {
							options.eventEmitter.emitEvent('swipeDown');
						}
						/* reset values */
						xDown = null;
						yDown = null;
					};
				}

				/**
     * RUNTIME VARIABLES
     */

				// Whether jQuery is currently animating the scroll event
				var isScrolling = false;

				var sections = [];

				var sectionWrapperTop;
				var sectionWrapperBottom;

				var validBreakPoint = false;
				var belowBreakpoint = false;

				var currentHash = window.location.hash;

				// Store the current section wrapper method for later use
				var sectionWrapper = $(options.sectionWrapperSelector + ':first');

				/**
     * FUNCTIONS
     */

				// Check if the view is currently within the section wrapper
				var sectionWrapperIsVisible = function sectionWrapperIsVisible() {
					var windowTop = getWindowTop();
					var windowBottom = windowTop + $(window).height();
					// Only affect scrolling if within the sectionWrapper area
					if (windowBottom > sectionWrapperTop && windowTop <= sectionWrapperBottom) {
						return true;
					}
					return false;
				};

				// Update the values for `sections`
				var calculateSectionBottoms = function calculateSectionBottoms() {
					var tmpSections = [];
					sectionWrapperTop = Math.round(sectionWrapper.position().top + parseInt(sectionWrapper.css('paddingTop'), 10) + parseInt(sectionWrapper.css('borderTopWidth'), 10) + parseInt(sectionWrapper.css('marginTop'), 10));

					// We use `height()` instead of `innerHeight()` or `outerHeight()`
					// because we don't care about the padding in the sectionWrapper at the bottom
					sectionWrapperBottom = Math.round(sectionWrapperTop + sectionWrapper.height(), 10);
					tmpSections.push(sectionWrapperTop);
					$(options.sectionSelector).each(function (i, el) {
						// eslint-disable-line func-names
						tmpSections.push(Math.round(sectionWrapperTop + $(el).position().top // This will be relative to the sectionWrapper
						+ $(el).outerHeight()));
					});
					sections = tmpSections;
				};

				// Given the event object, determines if it's up or down,
				// or invalid according to lethargy
				var getScrollAction = function getScrollAction(e) {
					// Always register the action with lethargy
					var validScroll;
					if (lethargy) {
						validScroll = lethargy.check(e);
					}
					// Do nothing if it is already scrolling
					if (!isScrolling) {
						if (lethargy) {
							if (validScroll === 1) {
								return 'up';
							} else if (validScroll === -1) {
								return 'down';
							}
						} else if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
							return 'up';
						} else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
							return 'down';
						}
					}
					return false;
				};

				// Checks the slide that is occupying the position specified
				var getSectionIndexAt = function getSectionIndexAt(position) {
					for (var i = 0; i < sections.length; i += 1) {
						if (position <= sections[i]) {
							return i;
						}
					}
					return sections.length;
				};

				// Change the hash (and also record history depending on options)
				var autoHash = function autoHash() {
					var newHash;
					// If the middle of the screen is above the top of the section wrapper
					// Set the hash to the header's hash
					if (getWindowTop() + $(window).height() / 2 < sectionWrapperTop) {
						newHash = options.headerHash;
					} else {
						// Otherwise, get the index of the section at the middle of the screen
						var slideIndex = getSectionIndexAt(getWindowTop() + $(window).height() / 2);
						if (slideIndex !== undefined) {
							// And get the data-hash attribute of the section
							newHash = $(options.sectionSelector + ':nth-of-type(' + slideIndex + ')').data('hash');
						}
					}
					if (typeof newHash === 'undefined' || !(window.location.hash === '#' + newHash)) {
						if (typeof newHash === 'undefined') {
							newHash = options.headerHash;
						}
						if (!options.keepHistory) {
							window.location.replace(window.location.href.split('#')[0] + '#' + newHash);
						} else {
							window.location.hash = newHash;
						}
					}
				};

				// Animates the scroll to the pixel specified
				// at the speed (milisseconds) specified
				var scrollToPixel = function scrollToPixel(pixel, speed) {
					if (isScrolling) {
						return;
					}
					isScrolling = true;
					$('body,html').stop(true, true).animate({
						scrollTop: pixel
					}, speed, function () {
						// eslint-disable-line func-names
						isScrolling = false;
						if (options.eventEmitter) {
							options.eventEmitter.emitEvent('scrollEnd');
						}
					});
				};

				// Make this public
				this.scroll = function scroll(down) {
					if (sections) {
						var windowTop = getWindowTop();
						if (options.eventEmitter) {
							var sectionIndexAtWindowMiddle = getSectionIndexAt(windowTop + $(window).height() / 2);
							var nextSlideNumber = down ? sectionIndexAtWindowMiddle + 1 : sectionIndexAtWindowMiddle - 1;
							options.eventEmitter.emitEvent('scrollStart', [nextSlideNumber]);
						}
						for (var i = 0; i < sections.length; i += 1) {
							if (windowTop < sections[i]) {
								if (down) {
									scrollToPixel(sections[i], 700);
								} else {
									scrollToPixel(sections[i - 1] - $(window).height(), 700);
								}
								if (options.eventEmitter) {
									options.eventEmitter.emitEvent('scrollEnd');
								}
								return false;
							}
						}
					}
					return undefined;
				};

				// Bind scroll events and perform scrolljacking
				var bindScroll = function bindScroll() {
					$(window).bind(MOUSE_EVENTS_STRING, function (e) {
						// eslint-disable-line func-names
						var scrollAction = getScrollAction(e);
						if (options.dynamicHeight) {
							calculateSectionBottoms();
						}
						var windowTop = getWindowTop();
						var windowBottom = windowTop + $(window).height();
						// Only affect scrolling if within the sectionWrapper area
						if (windowBottom > sectionWrapperTop && windowTop <= sectionWrapperBottom) {
							// Only hijack the scroll when windowTop and windowBottom are touching different slides
							// `!==` instead of `<` caters for when `getSectionIndexAtWindowBottom` is `undefined`
							// (at the end of the area)
							var sectionIndexAtWindowTop = getSectionIndexAt(windowTop);
							var sectionIndexAtWindowMiddle = getSectionIndexAt(windowTop + $(window).height() / 2);
							var sectionIndexAtWindowBottom = getSectionIndexAt(windowBottom);
							if (sectionIndexAtWindowTop !== sectionIndexAtWindowBottom || !options.innerSectionScroll) {
								e.preventDefault();
								e.stopPropagation();
								if (scrollAction) {
									if (scrollAction === 'up') {
										if (options.toptotop) {
											scrollToPixel(sections[sectionIndexAtWindowMiddle - 2] + 1, options.animationSpeed);
										} else {
											scrollToPixel(sections[sectionIndexAtWindowMiddle - 1] - $(window).height(), options.animationSpeed);
										}
										if (options.eventEmitter) {
											options.eventEmitter.emitEvent('scrollStart', [sectionIndexAtWindowMiddle - 1]);
										}
									} else if (scrollAction === 'down') {
										scrollToPixel(sections[sectionIndexAtWindowMiddle] + 1, options.animationSpeed);
										if (options.eventEmitter) {
											options.eventEmitter.emitEvent('scrollStart', [sectionIndexAtWindowMiddle + 1]);
										}
									}
								}
							}
						}
					});
				};

				// Remove all functions bound to mouse events
				var unbindScroll = function unbindScroll() {
					$(window).unbind(MOUSE_EVENTS_STRING);
				};

				/**
     * INITIAL SETUP
     */

				sectionWrapper.css({
					position: 'relative'
				});

				// Need to wait until content and CSS has been parsed
				// So the height is accurate
				setTimeout(function () {
					// eslint-disable-line func-names
					calculateSectionBottoms();

					// autoHash

					if (options.autoHash) {
						if (options.eventEmitter !== null && !options.hashContinuousUpdate) {
							options.eventEmitter.addListener('scrollEnd', autoHash);
						} else {
							// Fallback with binding scroll events.
							// Many scroll events are fired and so is very resource-intensive
							$(window).bind('scroll', autoHash);
						}
					}

					// Scroll to hash

					if (options.initialScroll && currentHash.length > 0) {
						// Remove the '#' from the hash and use jQuery to check
						// if an element exists with that hash in the 'data-hash' attribute
						var matchedObject = $('[data-hash="' + currentHash.substr(1) + '"]');
						// If there is a matched element, scroll to the first element at time 0 (immediately)
						if (matchedObject.length > 0) {
							scrollToPixel(matchedObject[0].offsetTop + sectionWrapperTop, 0);
						}
					}
				}, 50);

				$(window).bind('resize', calculateSectionBottoms);

				// Breakpoint

				// If options.breakpoint is a valid value,
				// set this.validBreakPoint to true
				if (options.breakpoint !== null && options.breakpoint === parseInt(options.breakpoint, 10) && options.breakpoint > 0) {
					validBreakPoint = true;
				}

				// Mode

				// If the mode is set to vp (viewpoint),
				// make the height of each section the same as the viewport
				if (options.mode === 'vp') {
					// IE8 does not support viewport
					// http://caniuse.com/#feat=viewport-units
					if (options.ie8) {
						var resizeToVP = function resizeToVP() {
							$(options.sectionSelector).css({
								height: $(window).height()
							});
						};

						// Initial resizing on load
						resizeToVP();

						// Run resizeToVP whenever the window resizes
						$(window).bind('resize', resizeToVP);
					} else {
						// Use viewport to avoid binding to resize events
						$(options.sectionSelector).css({
							height: '100vh'
						});
					}
				}

				// Scrolljacking
				if (options.sectionScroll) {
					// If the breakpoint option is set
					if (validBreakPoint) {
						// Run the following whenever the window is resized
						$(window).bind('resize', function () {
							// eslint-disable-line func-names
							// If the window width is below the breakpoint,
							// Unbind scroll
							if ($(window).width() < options.breakpoint) {
								// Only unbind once (minimize resource usage)
								if (!belowBreakpoint) {
									unbindScroll();
									// Set belowBreakpoint to true to prevent further unbinding events
									belowBreakpoint = true;
									return false;
								}
							} else if (belowBreakpoint) {
								// If the screen width is currently equal to or above the breakpoint
								// Bind scroll only if it's not bound already
								bindScroll();
								belowBreakpoint = false;
							}
							return undefined;
						});
					}
					bindScroll();
				}

				if (options.bindSwipe) {
					$(window).on('touchstart', handleTouchStart); // eslint-disable-line block-scoped-var
					$(window).on('touchmove', handleTouchMove); // eslint-disable-line block-scoped-var
				}
				if (options.bindKeyboard) {
					var handleKeydown = function handleKeydown(event) {
						var e = event.originalEvent || event;
						if (options.dynamicHeight) {
							calculateSectionBottoms();
						}
						var windowTop = getWindowTop();
						var windowBottom = windowTop + $(window).height();
						// Only affect scrolling if within the sectionWrapper area
						if (sectionWrapperIsVisible()) {
							// Only hijack the scroll when windowTop and windowBottom are touching different slides
							// `!==` instead of `<` caters for when `getSectionIndexAtWindowBottom` is `undefined`
							// (at the end of the area)
							var sectionIndexAtWindowTop = getSectionIndexAt(windowTop);
							var sectionIndexAtWindowMiddle = getSectionIndexAt(windowTop + $(window).height() / 2);
							var sectionIndexAtWindowBottom = getSectionIndexAt(windowBottom);
							if (sectionIndexAtWindowTop !== sectionIndexAtWindowBottom || !options.innerSectionScroll) {
								switch (e.which) {
									// up arrow
									case 38:
										e.preventDefault();
										e.stopPropagation();
										if (options.toptotop) {
											scrollToPixel(sections[sectionIndexAtWindowMiddle - 2] + 1, options.animationSpeed);
										} else {
											scrollToPixel(sections[sectionIndexAtWindowMiddle - 1] - $(window).height(), options.animationSpeed);
										}
										if (options.eventEmitter) {
											options.eventEmitter.emitEvent('scrollStart', [sectionIndexAtWindowMiddle - 1]);
										}
										break;
									// down arrow
									case 40:
										e.preventDefault();
										e.stopPropagation();
										scrollToPixel(sections[sectionIndexAtWindowMiddle] + 1, options.animationSpeed);
										if (options.eventEmitter) {
											options.eventEmitter.emitEvent('scrollStart', [sectionIndexAtWindowMiddle + 1]);
										}
										break;

									default:
								}
							}
						}
					};
					$(window).on('keydown', handleKeydown);
				}
				return this;
			};

			// Set default options
			$.smartscroll.defaults = { // eslint-disable-line no-param-reassign
				animationSpeed: 700,
				autoHash: true,
				breakpoint: null,
				initialScroll: true,
				headerHash: 'header',
				keepHistory: false,
				mode: 'vp', // "vp", "set"
				sectionClass: 'section',
				sectionSelector: null,
				sectionScroll: true,
				sectionWrapperSelector: '.section-wrapper',
				eventEmitter: null,
				dynamicHeight: false,
				ie8: false,
				hashContinuousUpdate: true,
				innerSectionScroll: true,
				toptotop: false,
				bindSwipe: true,
				bindKeyboard: true
			};
		})(jQuery);

		/***/
	},

	/***/"./website/src/js/_form.js":
	/*!*********************************!*\
   !*** ./website/src/js/_form.js ***!
   \*********************************/
	/*! no exports provided */
	/***/function websiteSrcJs_formJs(module, __webpack_exports__, __webpack_require__) {

		"use strict";

		__webpack_require__.r(__webpack_exports__);
		/* harmony import */var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery-mask-plugin */"./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
		/* harmony import */var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__);
		/* harmony import */var jquery_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! jquery-modal */"./node_modules/jquery-modal/jquery.modal.js");
		/* harmony import */var jquery_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_modal__WEBPACK_IMPORTED_MODULE_1__);
		/* harmony import */var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery-validation */"./node_modules/jquery-validation/dist/jquery.validate.js");
		/* harmony import */var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
		/* global $ */
		/* global jQuery */

		window.$ = $;
		window.jQuery = jQuery;

		$(document).ready(function () {
			$('.modal__close').modal({ closeClass: '', closeText: '' });

			$('.input--phone').mask('+7(999) 999 99-99');

			//  Form
			$('.form').validate({
				element: '.input__text',
				errorClass: 'input--error',
				validClass: 'input--valid',
				errorElement: 'span',
				submitHandler: function submitHandler(form) {
					$('#js-modal-success').modal();
				}
			});

			$('.input').on('blur keyup', function () {
				if ($('.form').valid()) {
					$('#js-form-submit').prop('disabled', false);
				} else {
					$('#js-form-submit').prop('disabled', 'disabled');
				}
			});

			jQuery.extend(jQuery.validator.messages, { required: 'Поле должно быть заполнено.' });
			// Form End

			$('#js-modal-success').on($.modal.BEFORE_CLOSE, function (event, modal) {
				$('.btn--order').attr('href', '#js-modal-success');
			});
		});

		/***/
	},

	/***/"./website/src/js/_scroll.js":
	/*!***********************************!*\
   !*** ./website/src/js/_scroll.js ***!
   \***********************************/
	/*! no exports provided */
	/***/function websiteSrcJs_scrollJs(module, __webpack_exports__, __webpack_require__) {

		"use strict";

		__webpack_require__.r(__webpack_exports__);
		/* harmony import */var _vendor_EventEmitter_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./vendor/EventEmitter.min */"./website/src/js/vendor/EventEmitter.min.js");
		/* harmony import */var _vendor_EventEmitter_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_EventEmitter_min__WEBPACK_IMPORTED_MODULE_0__);
		/* harmony import */var _vendor_lethargy_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./vendor/lethargy.min */"./website/src/js/vendor/lethargy.min.js");
		/* harmony import */var _vendor_lethargy_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_lethargy_min__WEBPACK_IMPORTED_MODULE_1__);
		/* harmony import */var smartscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! smartscroll */"./node_modules/smartscroll/smartscroll.js");
		/* harmony import */var smartscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smartscroll__WEBPACK_IMPORTED_MODULE_2__);
		/* harmony import */var jquery_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! jquery.scrollbar */"./node_modules/jquery.scrollbar/index.js");
		/* harmony import */var jquery_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
		/* harmony import */var page_scroll_to_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! page-scroll-to-id */"./node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js");
		/* harmony import */var page_scroll_to_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(page_scroll_to_id__WEBPACK_IMPORTED_MODULE_4__);
		/* global $ */
		/* global EventEmitter */

		window.$ = $;
		window.jQuery = jQuery;

		var ee = new EventEmitter();

		var scrollStartListenerIndex = function scrollStartListenerIndex(slideNumber) {
			$('.sidebar').removeClass('sidebar--active');
			if (slideNumber === 0 && slideNumber === 1) {
				$('#svg-figure').css('stroke', '#fff');
				$('#svg-text').css('fill', '#fff');
				$('.nav__item--top').removeClass('nav__item--top-scroll');
			} else if (slideNumber % 2 === 0 || slideNumber > 4) {
				$('#svg-figure').css('stroke', '#323232');
				$('#svg-text').css('fill', '#323232');
				$('.nav__item--top').addClass('nav__item--top-scroll');
			} else if (slideNumber % 3 === 0) {
				$('#svg-figure').css('stroke', '#fff');
				$('#svg-text').css('fill', '#fff');
			} else {
				$('#svg-figure').css('stroke', '#fff');
				$('#svg-text').css('fill', '#fff');
				$('.nav__item--top').removeClass('nav__item--top-scroll');
			}
		};

		var scrollStartListener = function scrollStartListener(slideNumber) {
			$('.sidebar').removeClass('sidebar--active');
		};
		var scrollEndListener = function scrollEndListener() {};

		if ($('.main').is('.main--index')) {
			ee.addListener('scrollStart', scrollStartListenerIndex);
		} else {
			ee.addListener('scrollStart', scrollStartListener);
		}
		ee.addListener('scrollEnd', scrollEndListener);

		$(document).ready(function () {
			var resizing = false;

			function checkMQ() {
				var dw = $('.page').outerWidth();

				if (dw >= 1200) {
					return 'desktop';
				}
				return 'mobile';
			}

			$(".nav__item--submenu .link--nav[href*='#']").mPageScroll2id();
			$('.nav__item--submenu .link--nav').click(function (event) {
				var mq = checkMQ();
				if (mq === 'mobile') {
					$(this).parent().addClass('nav__item--active').siblings().removeClass('nav__item--active');
				}
			});

			if ($('.wrap').is('.scrollbar-rail')) {
				$('.scrollbar-rail').scrollbar();
			}

			var subnav = $('.nav--submenu-first');

			function toggleHeaderFloating() {
				if (window.scrollY > 140) {
					subnav.addClass('nav--subheader-sticky');
				} else {
					subnav.removeClass('nav--subheader-sticky');
				}
			}

			function scrollInit() {
				var mq = checkMQ();

				if (mq !== 'mobile') {
					$.smartscroll({
						autoHash: false,
						sectionScroll: true,
						sectionWrapperSelector: '.main',
						sectionClass: 'slide',
						eventEmitter: ee,
						bindSwipe: true
					});
				} else {
					var rafTimer = void 0;

					window.onscroll = function (event) {
						cancelAnimationFrame(rafTimer);
						rafTimer = requestAnimationFrame(toggleHeaderFloating);
					};
				}
				resizing = false;
			}

			scrollInit();
			$(window).on('resize', function () {
				if (!resizing) {
					!window.requestAnimationFrame ? setTimeout(scrollInit, 300) : window.requestAnimationFrame(scrollInit);
					resizing = true;
				}
			});
		});

		/***/
	},

	/***/"./website/src/js/_sidebar.js":
	/*!************************************!*\
   !*** ./website/src/js/_sidebar.js ***!
   \************************************/
	/*! no static exports found */
	/***/function websiteSrcJs_sidebarJs(module, exports) {

		/* global $ */
		$(document).ready(function () {
			var topNav = $('.nav--top');
			var sidebar = $('.sidebar');
			var sidebarInner = $('.sidebar__inner');
			var topPanelInner = $('.top-panel').find('.col--center');

			$('#js-sidebar-trigger').click(function () {
				$(this).toggleClass('btn--active');
				sidebar.toggleClass('sidebar--active');
			});

			var resizing = false;

			function checkMQ() {
				var dw = $('.page').outerWidth();

				if (dw >= 1200) {
					return 'desktop';
				}
				return 'mobile';
			}

			function detachElements() {
				topNav.detach();
			}

			function moveElements() {
				var mq = checkMQ();
				// var dw = $('.page').outerWidth()

				if (mq === 'mobile') {
					detachElements();
					topNav.prependTo(sidebarInner);
				} else if (mq === 'desktop') {
					detachElements();
					topNav.prependTo(topPanelInner);
				}
				// checkSelected(mq);
				resizing = false;
			}

			moveElements();
			$(window).on('resize', function () {
				if (!resizing) {
					!window.requestAnimationFrame ? setTimeout(moveElements, 300) : window.requestAnimationFrame(moveElements);
					resizing = true;
				}
			});
		});

		/***/
	},

	/***/"./website/src/js/common.js":
	/*!**********************************!*\
   !*** ./website/src/js/common.js ***!
   \**********************************/
	/*! no exports provided */
	/***/function websiteSrcJsCommonJs(module, __webpack_exports__, __webpack_require__) {

		"use strict";

		__webpack_require__.r(__webpack_exports__);
		/* harmony import */var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./_sidebar */"./website/src/js/_sidebar.js");
		/* harmony import */var _sidebar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar__WEBPACK_IMPORTED_MODULE_0__);
		/* harmony import */var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./_scroll */"./website/src/js/_scroll.js");
		/* harmony import */var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./_form */"./website/src/js/_form.js");

		/***/
	},

	/***/"./website/src/js/vendor/EventEmitter.min.js":
	/*!***************************************************!*\
   !*** ./website/src/js/vendor/EventEmitter.min.js ***!
   \***************************************************/
	/*! no static exports found */
	/***/function websiteSrcJsVendorEventEmitterMinJs(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                     * EventEmitter v4.2.11 - git.io/ee
                                     * Unlicense - http://unlicense.org/
                                     * Oliver Caldwell - http://oli.me.uk/
                                     * @preserve
                                     */
		(function () {
			'use strict';
			function t() {}function i(t, n) {
				for (var e = t.length; e--;) {
					if (t[e].listener === n) return e;
				}return -1;
			}function n(e) {
				return function () {
					return this[e].apply(this, arguments);
				};
			}var e = t.prototype,
			    r = this,
			    s = r.EventEmitter;e.getListeners = function (n) {
				var r,
				    e,
				    t = this._getEvents();if (n instanceof RegExp) {
					r = {};for (e in t) {
						t.hasOwnProperty(e) && n.test(e) && (r[e] = t[e]);
					}
				} else r = t[n] || (t[n] = []);return r;
			}, e.flattenListeners = function (t) {
				var e,
				    n = [];for (e = 0; e < t.length; e += 1) {
					n.push(t[e].listener);
				}return n;
			}, e.getListenersAsObject = function (n) {
				var e,
				    t = this.getListeners(n);return t instanceof Array && (e = {}, e[n] = t), e || t;
			}, e.addListener = function (r, e) {
				var t,
				    n = this.getListenersAsObject(r),
				    s = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object';for (t in n) {
					n.hasOwnProperty(t) && i(n[t], e) === -1 && n[t].push(s ? e : { listener: e, once: !1 });
				}return this;
			}, e.on = n('addListener'), e.addOnceListener = function (e, t) {
				return this.addListener(e, { listener: t, once: !0 });
			}, e.once = n('addOnceListener'), e.defineEvent = function (e) {
				return this.getListeners(e), this;
			}, e.defineEvents = function (t) {
				for (var e = 0; e < t.length; e += 1) {
					this.defineEvent(t[e]);
				}return this;
			}, e.removeListener = function (r, s) {
				var n,
				    e,
				    t = this.getListenersAsObject(r);for (e in t) {
					t.hasOwnProperty(e) && (n = i(t[e], s), n !== -1 && t[e].splice(n, 1));
				}return this;
			}, e.off = n('removeListener'), e.addListeners = function (e, t) {
				return this.manipulateListeners(!1, e, t);
			}, e.removeListeners = function (e, t) {
				return this.manipulateListeners(!0, e, t);
			}, e.manipulateListeners = function (r, t, i) {
				var e,
				    n,
				    s = r ? this.removeListener : this.addListener,
				    o = r ? this.removeListeners : this.addListeners;if ((typeof t === 'undefined' ? 'undefined' : _typeof(t)) !== 'object' || t instanceof RegExp) for (e = i.length; e--;) {
					s.call(this, t, i[e]);
				} else for (e in t) {
					t.hasOwnProperty(e) && (n = t[e]) && (typeof n === 'function' ? s.call(this, e, n) : o.call(this, e, n));
				}return this;
			}, e.removeEvent = function (e) {
				var t,
				    r = typeof e === 'undefined' ? 'undefined' : _typeof(e),
				    n = this._getEvents();if (r === 'string') delete n[e];else if (e instanceof RegExp) for (t in n) {
					n.hasOwnProperty(t) && e.test(t) && delete n[t];
				} else delete this._events;return this;
			}, e.removeAllListeners = n('removeEvent'), e.emitEvent = function (t, u) {
				var n,
				    e,
				    r,
				    i,
				    o,
				    s = this.getListenersAsObject(t);for (i in s) {
					if (s.hasOwnProperty(i)) for (n = s[i].slice(0), r = n.length; r--;) {
						e = n[r], e.once === !0 && this.removeListener(t, e.listener), o = e.listener.apply(this, u || []), o === this._getOnceReturnValue() && this.removeListener(t, e.listener);
					}
				}return this;
			}, e.trigger = n('emitEvent'), e.emit = function (e) {
				var t = Array.prototype.slice.call(arguments, 1);return this.emitEvent(e, t);
			}, e.setOnceReturnValue = function (e) {
				return this._onceReturnValue = e, this;
			}, e._getOnceReturnValue = function () {
				return this.hasOwnProperty('_onceReturnValue') ? this._onceReturnValue : !0;
			}, e._getEvents = function () {
				return this._events || (this._events = {});
			}, t.noConflict = function () {
				return r.EventEmitter = s, t;
			}, true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return t;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
		}).call(this);

		/***/
	},

	/***/"./website/src/js/vendor/lethargy.min.js":
	/*!***********************************************!*\
   !*** ./website/src/js/vendor/lethargy.min.js ***!
   \***********************************************/
	/*! no static exports found */
	/***/function websiteSrcJsVendorLethargyMinJs(module, exports) {

		(function () {
			var t;
			t = typeof exports !== 'undefined' && exports !== null ? exports : this, t.Lethargy = function () {
				function t(t, s, i, l) {
					this.stability = t != null ? Math.abs(t) : 8, this.sensitivity = s != null ? 1 + Math.abs(s) : 100, this.tolerance = i != null ? 1 + Math.abs(i) : 1.1, this.delay = l != null ? l : 150, this.lastUpDeltas = function () {
						var t, s, i;
						for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) {
							i.push(null);
						}return i;
					}.call(this), this.lastDownDeltas = function () {
						var t, s, i;
						for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) {
							i.push(null);
						}return i;
					}.call(this), this.deltasTimestamp = function () {
						var t, s, i;
						for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) {
							i.push(null);
						}return i;
					}.call(this);
				}
				return t.prototype.check = function (t) {
					var s;
					return t = t.originalEvent || t, t.wheelDelta != null ? s = t.wheelDelta : t.deltaY != null ? s = -40 * t.deltaY : (t.detail != null || t.detail === 0) && (s = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), s > 0 ? (this.lastUpDeltas.push(s), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(s), this.lastDownDeltas.shift(), this.isInertia(-1));
				}, t.prototype.isInertia = function (t) {
					var s, i, l, a, e, n, h;
					return s = t === -1 ? this.lastDownDeltas : this.lastUpDeltas, s[0] === null ? t : this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && s[0] === s[2 * this.stability - 1] ? !1 : (l = s.slice(0, this.stability), i = s.slice(this.stability, 2 * this.stability), h = l.reduce(function (t, s) {
						return t + s;
					}), e = i.reduce(function (t, s) {
						return t + s;
					}), n = h / l.length, a = e / i.length, Math.abs(n) < Math.abs(a * this.tolerance) && this.sensitivity < Math.abs(a) ? t : !1);
				}, t.prototype.showLastUpDeltas = function () {
					return this.lastUpDeltas;
				}, t.prototype.showLastDownDeltas = function () {
					return this.lastDownDeltas;
				}, t;
			}();
		}).call(this);

		/***/
	}

	/******/ });
//# sourceMappingURL=common.js.map
