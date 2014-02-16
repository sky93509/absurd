describe("Animations", function() {

	var api = require('../../index.js')();

	it("should use bounce", function(done) {
		api.add({
			div: {
				'&:hover': {
					animate: 'bounce'
				}
			}
		}).compile(function(err, css) {
			expect(css).toBe('@keyframes bounce {0%,20%,50%,80%,100%{transform: translateY(0);-webkit-transform: translateY(0);-moz-transform: translateY(0);-ms-transform: translateY(0);-o-transform: translateY(0);}40%{transform: translateY(-30px);-webkit-transform: translateY(-30px);-moz-transform: translateY(-30px);-ms-transform: translateY(-30px);-o-transform: translateY(-30px);}60%{transform: translateY(-15px);-webkit-transform: translateY(-15px);-moz-transform: translateY(-15px);-ms-transform: translateY(-15px);-o-transform: translateY(-15px);}}@-webkit-keyframes bounce {0%,20%,50%,80%,100%{transform: translateY(0);-webkit-transform: translateY(0);-moz-transform: translateY(0);-ms-transform: translateY(0);-o-transform: translateY(0);}40%{transform: translateY(-30px);-webkit-transform: translateY(-30px);-moz-transform: translateY(-30px);-ms-transform: translateY(-30px);-o-transform: translateY(-30px);}60%{transform: translateY(-15px);-webkit-transform: translateY(-15px);-moz-transform: translateY(-15px);-ms-transform: translateY(-15px);-o-transform: translateY(-15px);}}div:hover{animation-name: bounce;-webkit-animation-name: bounce;-moz-animation-name: bounce;-ms-animation-name: bounce;-o-animation-name: bounce;animation-duration: 1s;-webkit-animation-duration: 1s;-moz-animation-duration: 1s;-ms-animation-duration: 1s;-o-animation-duration: 1s;}');
			done();
		}, { minify: true });
	});

	it("should define an animation and apply it", function(done) {
		api.flush().add({
			'-w-keyframes': {
				name: "preloader",
				frames: {
					"0%": { fz: '10px', margin: 0, pad: '20px' },
					"50%": { fz: '20px', margin: '10px' },
					"100%": { fz: '10px', margin: '20px', pad: '22px' }
				}
			}
		})
		.add({
			'.preloader': {
				animate: {
					name: 'preloader',
					iterationCount: 'infinite'
				}
			}
		}).compile(function(err, css) {
			expect(css).toBe('@keyframes preloader {0%{margin: 0;font-size: 10px;padding: 20px;}50%{margin: 10px;font-size: 20px;}100%{margin: 20px;font-size: 10px;padding: 22px;}}@-webkit-keyframes preloader {0%{margin: 0;font-size: 10px;padding: 20px;}50%{margin: 10px;font-size: 20px;}100%{margin: 20px;font-size: 10px;padding: 22px;}}.preloader{animation-name: preloader;-webkit-animation-name: preloader;-moz-animation-name: preloader;-ms-animation-name: preloader;-o-animation-name: preloader;animation-duration: 1s;-webkit-animation-duration: 1s;-moz-animation-duration: 1s;-ms-animation-duration: 1s;-o-animation-duration: 1s;animation-iteration-count: infinite;-webkit-animation-iteration-count: infinite;-moz-animation-iteration-count: infinite;-ms-animation-iteration-count: infinite;-o-animation-iteration-count: infinite;}');
			done();
		}, { minify: true });
	});

	it("should use blink", function(done) {
		api.add({
			div: {
				animate: 'blink'
			}
		}).compile(function(err, css) {
			expect(css).toBe('@keyframes blink {0%,100%{-s-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter: alpha(opacity=0);-m-opacity: 0;opacity: 0;-khtml-opacity: 0;}50%{-s-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter: alpha(opacity=100);-m-opacity: 1;opacity: 1;-khtml-opacity: 1;}}@-webkit-keyframes blink {0%,100%{-s-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter: alpha(opacity=0);-m-opacity: 0;opacity: 0;-khtml-opacity: 0;}50%{-s-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter: alpha(opacity=100);-m-opacity: 1;opacity: 1;-khtml-opacity: 1;}}div{animation-name: blink;-webkit-animation-name: blink;-moz-animation-name: blink;-ms-animation-name: blink;-o-animation-name: blink;animation-duration: 1s;-webkit-animation-duration: 1s;-moz-animation-duration: 1s;-ms-animation-duration: 1s;-o-animation-duration: 1s;}');
			done();
		}, { minify: true });
	});

})