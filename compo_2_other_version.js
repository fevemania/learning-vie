// This is the share Event instance
// we can name it "event dispatcher"
window.Event = new class {
	constructor() {
		this.vue = new Vue();
	}

	fire(event, data = null) {
		this.vue.$emit(event, data);
	}

	listen(event, callback) {
		this.vue.$on(event, callback);
	}
} 


Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
	
	methods: {
		onCouponApplied() {
			Event.fire('applied');  // for instance to emit
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
		Event.listen('applied', () => alert('Handling it'));
	}
});

// other version is in compo_2_other_version.js