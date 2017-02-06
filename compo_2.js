// This is the share Event instance
window.Event = new Vue(); // any Vue instance has ability to listen and emit event

// Now we are not limited within relationship bewteen parent and child alone.


Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
	
	methods: {
		onCouponApplied() {
			Event.$emit('applied');  // for instance to emit
			// this.$on('applied');	// for instance to listen
		}
	}	
});

new Vue ({
	el: '#root',

	data: {
		couponApplied: false
	},
	created() {
		Event.$on('applied', () => alert('Handling it'));
	}
});

// other version is in compo_2_other_version.js