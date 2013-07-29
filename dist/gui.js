/* exported GUI */
/* global MTVNPlayer*/
var GUI = function(require) {
	// Handlebars is provided in the mtvn-util package.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// If we compile it in, we could use a scoped var. 
	/* jshint unused:false */
	var Handlebars = require("Handlebars"),
		$ = require("$"),
		_ = require("_"),
		Backbone = require("Backbone");
	this["Templates"] = this["Templates"] || {};
	
	this["Templates"]["src/ad-display/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;
	
	function program1(depth0,data) {
	  
	  var buffer = "", stack1;
	  buffer += "\n	    <a class=\"mtvn-ad-gui-learn-more\" href=\"";
	  if (stack1 = helpers.buttonLink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.buttonLink; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\" target=\"";
	  if (stack1 = helpers.buttonTarget) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.buttonTarget; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\">\n	    	";
	  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\n	    </a>\n	    ";
	  return buffer;
	  }
	
	  buffer += "<div class=\"mtvn-ad-gui\">\n	<div class=\"mtvn-ad-gui-container\">\n	    <span class=\"mtvn-ad-gui-countdown\"></span>\n	    ";
	  stack1 = helpers['if'].call(depth0, depth0.buttonLink, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n	</div>\n</div>";
	  return buffer;
	  });
	
	this["Templates"]["src/controls/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;
	
	function program1(depth0,data) {
	  
	  
	  return "\n<div class=\"mtvn-controls-live mtvn-controls-button\"></div>\n";
	  }
	
	function program3(depth0,data) {
	  
	  
	  return "\n<div class=\"mtvn-controls-play-pause mtvn-controls-button\"></div>\n";
	  }
	
	function program5(depth0,data) {
	  
	  
	  return "\n<div class=\"mtvn-controls-volume mtvn-controls-button\"></div>\n";
	  }
	
	  buffer += "<!-- controls -->\n";
	  stack1 = helpers['if'].call(depth0, depth0.live, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\">\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-time-display\"></div>\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-progress-container\">\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-buffered\"></div>\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-progress\"></div>\n	</div>\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-background\"></div>\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-thumb-container\" style=\"left:0px;\">\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-tool-tip-container\">\n			<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-tool-tip-background\"></div>\n			<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-tool-tip-time\"></div>\n		</div>\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-thumb\"/>\n	</div>\n</div>\n";
	  stack1 = helpers['if'].call(depth0, depth0.showVolume, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
	  return buffer;
	  });
	/* global _, $ */
	var DEFAULT_TEMPLATE = this.Templates["src/ad-display/template.html"],
		DEFAULT_COPY = {
			countdownText: "Your content will resume in {{time}}.",
			messageText: "Your content will resume shortly.",
			buttonText: "Learn More",
			buttonTarget: "_blank"
		};
	
	function AdDisplay(options) {
		this.options = _.defaults(options || {}, DEFAULT_COPY);
		this.render(this.options);
	}
	
	AdDisplay.prototype = {
		render: function(options) {
			var template = options.template || DEFAULT_TEMPLATE,
				$el = this.$el = $(template(options));
			this.$countdown = $el.find(".mtvn-ad-gui-countdown");
			this.renderMessage(options.time);
			return $el;
		},
		renderMessage: function(time) {
			var messageTempate = this.options[_.isUndefined(time) ? "messageText" : "countdownText"],
				countdown = _.template(messageTempate, {
					time: time
				}, {
					interpolate: /\{\{(.+?)\}\}/g
				});
			this.$countdown.text(countdown);
		}
	};
	/* exported Util */
	var Util = function() {
		var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
		return {
			isTouchDevice: isTouchDevice,
			getClientX: isTouchDevice ? function(event) {
				return event.originalEvent.touches[0].clientX;
			} : function(event) {
				return event.clientX;
			},
			getClientY: isTouchDevice ? function(event) {
				return event.originalEvent.touches[0].clientY;
			} : function(event) {
				return event.clientY;
			},
			invokeIfNumber: function(func, n) {
				if (isNaN(n)) {
					parseFloat(n, 10);
				}
				if (!isNaN(n)) {
					console.log("INVOKE~~~ util.js:21 n",n);
					func(n);
				}
			},
			formatTime: function(sec) {
				if (isNaN(sec)) {
					return "00:00";
				}
				var h = Math.round(sec / 3600),
					m = Math.round((sec % 3600) / 60),
					s = Math.round((sec % 3600) % 60);
				return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
			}
		};
	}();
	/* exported Controls */
	/* global _, Backbone, $, Events, Slider, PlayPauseButton, VolumeButton*/
	var Controls = function() {
		var CONTROLS_TEMPLATE = this.Templates["src/controls/template.html"],
			css = {
				slider: "mtvn-controls-slider",
				playPause: "mtvn-controls-play-pause",
				volume: "mtvn-controls-volume"
	
			};
		return Backbone.View.extend({
			tagName: "div",
			className: "mtvn-controls",
			events: {
				"click .mtvn-controls-volume": "onVolume",
				"click .mtvn-controls-fullscreen": "onFullscreen"
			},
			initialize: function() {
				_.bindAll(this, "onSeek", "sendEvent");
				_.extend(this.options, {
					slider: css.slider
				});
				this.render();
			},
			render: function() {
				var options = this.options;
				this.$el.html($(CONTROLS_TEMPLATE(options)));
				// PLAY PAUSE
				this.playPauseButton = new PlayPauseButton({
					el: this.$el.find("." + css.playPause),
					paused: options.paused
				});
				this.listenTo(this.playPauseButton, Events.PLAY, this.sendEvent);
				this.listenTo(this.playPauseButton, Events.PAUSE, this.sendEvent);
				// SLIDER
				this.slider = new Slider({
					el: this.$el.find("." + css.slider),
					playhead: options.playhead,
					duration: options.duration
				});
				this.listenTo(this.slider, Events.SEEK, this.onSeek);
				// VOLUME
				this.volumeButton = new VolumeButton({
					volume: options.volume,
					el: this.$el.find("." + css.volume)
				});
				this.listenTo(this.volumeButton, Events.MUTE, this.sendEvent);
				this.listenTo(this.volumeButton, Events.UNMUTE, this.sendEvent);
			},
			setVolume:function(volume) {
				this.volumeButton.setVolume(volume);
			},
			setPaused: function(paused) {
				this.playPauseButton.setPaused(paused);
			},
			getPlayhead: function() {
				return this.slider.playhead;
			},
			setPlayhead: function(playhead) {
				this.slider.setPlayhead(playhead);
			},
			setBuffered: function(buffered) {
				this.slider.setBuffered(buffered);
			},
			setDuration: function(duration) {
				this.slider.setDuration(duration);
			},
			sendEvent: function(type, data) {
				this.trigger(type, {
					type: type,
					target: this,
					data: data
				});
			},
			onSeek: function(event) {
				this.sendEvent(Events.SEEK, event);
			},
			onVolume: function(event) {
				this.sendEvent(Events.VOLUME, event);
			},
			onFullscreen: function() {
				this.sendEvent(Events.FULLSCREEN);
			}
		});
	}();
	/* exported Events */
	var Events = {
		PLAY: "PLAY",
		PAUSE: "PAUSE",
		FULLSCREEN: "FULLSCREEN",
		MUTE: "MUTE",
		UNMUTE: "UNMUTE",
		SEEK: "SEEK"
	};
	/* exported PlayPauseButton */
	/* global Backbone, Events*/
	var PlayPauseButton = function() {
		var css = {
			play: "mtvn-controls-play",
			pause: "mtvn-controls-pause"
		};
		return Backbone.View.extend({
			initialize: function() {
				this.$el.addClass(this.options.paused ? css.play : css.pause);
			},
			events: {
				"click": "toggle"
			},
			setPaused: function(isPaused) {
				var $el = this.$el;
				$el.toggleClass(css.play, isPaused);
				$el.toggleClass(css.pause, !isPaused);
			},
			toggle: function() {
				var $el = this.$el,
					showPlay = $el.hasClass(css.pause),
					eventName = !showPlay ? Events.PLAY : Events.PAUSE;
				$el.toggleClass(css.play, showPlay);
				$el.toggleClass(css.pause, !showPlay);
				this.trigger(eventName, eventName);
			}
		});
	}();
	/* global _, $, Backbone, Events, Util*/
	/* exported Slider */
	var Slider = function() {
		var thumb = "mtvn-controls-slider-thumb",
			thumbActive = "mtvn-controls-slider-thumb-active",
			touchMixin = {
				platformInitialize: function() {},
				events: {
					"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
					"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
					"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive"
				}
			},
			mouseMixin = {
				platformInitialize: function() {
					_.bindAll(this, "onThumbMove", "onThumbInactive");
					var $document = $(document);
					this.listenTo($document, "mousemove", this.onThumbMove);
					this.listenTo($document, "mouseup", this.onThumbInactive);
				},
				events: {
					"mousedown .mtvn-controls-slider-thumb-container": "onThumbActive"
				}
			};
		return Backbone.View.extend({
			/**
			 * The thumb is being pressed
			 */
			dragging: false,
			/**
			 * Needs to be updated before the playhead will move
			 */
			duration: 0,
			/**
			 * The position of the slider
			 */
			playhead: 0,
			/**
			 * The width of the slider, cached as to not call offsetWidth repeatedly
			 */
			sliderWidth: 0,
			initialize: function() {
				_.bindAll(this, "setSliderWidth");
				_.extend(this, Util.isTouchDevice ? touchMixin : mouseMixin);
				this.platformInitialize();
				this.render();
				/**
				 * Contains the thumb and the tooltop.
				 */
				this.$thumbContainer = this.$el.find(".mtvn-controls-slider-thumb-container");
				/**
				 * Meets the thumb visually.
				 */
				this.$progress = this.$el.find(".mtvn-controls-slider-progress");
				/**
				 * The amount buffered.
				 */
				this.$buffered = this.$el.find(".mtvn-controls-slider-buffered");
				/**
				 * The time and duration.
				 */
				this.$timeDisplay = this.$el.find(".mtvn-controls-slider-time-display");
				/**
				 * Tool tip container
				 */
				this.$toolTipContainer = this.$el.find(".mtvn-controls-slider-tool-tip-container");
				this.$toolTipContainer.hide();
				/**
				 * Tool tip time
				 */
				this.$toolTipTime = this.$el.find(".mtvn-controls-slider-tool-tip-time");
				this.setDuration(this.options.duration);
				this.setPlayhead(this.options.playhead);
				this.setSliderWidth = _.throttle(this.setSliderWidth, 3000);
			},
			setPlayhead: function(playhead) {
				if (!this.dragging && !this.seeking) {
					if (isNaN(playhead)) {
						playhead = parseFloat(playhead, 10);
					}
					if (!isNaN(playhead)) {
						this.setSliderWidth();
						this.playhead = Math.max(0, Math.min(playhead, this.duration));
						this.moveThumb(this.getLeftFromPlayhead(playhead));
						this.updateTime();
					}
				}
			},
			setBuffered: function(buffered) {
				if (!this.dragging && !this.seeking && this.duration > 1) {
					var left = Math.max(0, this.getLeftFromPlayhead(buffered));
					left = Math.min(left, this.sliderWidth);
					this.$buffered.css({
						width: left
					});
				}
			},
			setDuration: function(duration) {
				if (isNaN(duration)) {
					duration = parseFloat(duration, 10);
				}
				if (!isNaN(duration)) {
					this.duration = duration;
					this.updateTime();
				}
			},
			setEnabled: function(enabled) {
				if (enabled !== this.enabled) {
					if (enabled) {
						this.$thumbContainer.show();
						this.$timeDisplay.css({
							visibility: "visible"
						});
						this.$buffered.show();
						this.$progress.show();
					} else {
						this.$thumbContainer.hide();
						this.$timeDisplay.css({
							visibility: "hidden"
						});
						this.$progress.hide();
						this.$buffered.hide();
					}
				}
				this.enabled = enabled;
			},
			onThumbActive: function(event) {
				event.preventDefault();
				var $el = this.$el.find("." + thumb);
				$el.removeClass(thumb);
				$el.addClass(thumbActive);
				this.dragging = true;
				this.setSliderWidth();
				this.$buffered.css({
					width: 0
				});
				this.$toolTipTime.html(Util.formatTime(this.playhead));
				this.$toolTipContainer.show();
			},
			onThumbMove: function(event) {
				if (this.dragging) {
					event.preventDefault();
					var moveTo = Util.getClientX(event);
					if (!this.containerOffset) {
						this.containerOffset = this.$el.offset().left;
					}
					this.moveThumb(moveTo - this.containerOffset);
				}
			},
			onThumbInactive: function(event) {
				if (this.dragging) {
					event.preventDefault();
					var $el = this.$el.find("." + thumbActive);
					$el.removeClass(thumbActive);
					$el.addClass(thumb);
					this.dragging = false;
					this.sendSeek();
					this.$toolTipContainer.hide();
				}
			},
			moveThumb: function(moveTo) {
				var left = Math.max(0, moveTo);
				left = Math.min(left, this.sliderWidth);
				this.$thumbContainer.css({
					left: left
				});
				this.$progress.css({
					width: left
				});
				this.$toolTipTime.html(Util.formatTime(this.getTimeFromThumb(left)));
			},
			setSliderWidth: function() {
				this.sliderWidth = this.$el[0].offsetWidth;
			},
			getLeftFromPlayhead: function(playhead) {
				if (!playhead) {
					return 0;
				}
				var percent = playhead / Math.max(1, this.duration);
				return percent * this.sliderWidth;
			},
			getTimeFromThumb: function(thumbLeft) {
				if (isNaN(thumbLeft)) {
					thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10);
				}
				var p = thumbLeft / this.sliderWidth;
				return p * this.duration;
			},
			updateTime: function() {
				this.$timeDisplay.html(this.getTimeDisplayText());
			},
			getTimeDisplayText: function() {
				return "<span class=\"mtvn-controls-slider-current-time\">" + Util.formatTime(this.playhead) + "</span> / " + Util.formatTime(this.duration);
			},
			sendSeek: function() {
				var playhead = this.playhead = this.getTimeFromThumb();
				this.updateTime();
				this.trigger(Events.SEEK, playhead);
			}
		});
	}();
	/* exported VolumeButton */
	/* global Backbone, Events*/
	var VolumeButton = function() {
		var css = {
			unmute: "mtvn-controls-unmute",
			mute: "mtvn-controls-mute"
		};
		return Backbone.View.extend({
			events: {
				"click": "toggle"
			},
			initialize: function() {
				this.setVolume(isNaN(this.options.volume) ? 1 : this.options.volume);
			},
			setVolume: function(volume) {
				var showMute = volume > 0;
				this.$el.toggleClass(css.mute, showMute);
				this.$el.toggleClass(css.unmute, !showMute);
			},
			toggle: function() {
				var $el = this.$el,
					showMute = $el.hasClass(css.unmute),
					eventName = showMute ? Events.UNMUTE : Events.MUTE;
				$el.toggleClass(css.mute, showMute);
				$el.toggleClass(css.unmute, !showMute);
				this.trigger(eventName, eventName);
			}
		});
	}();
	/* global AdDisplay, Controls, Events */
	return {
		AdDisplay: AdDisplay,
		Controls: Controls,
		Events: Events,
		version: "0.4.0",
		build: "07/29/2013 06:02:16 PM"
	};
}(MTVNPlayer.require);