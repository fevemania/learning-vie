Vue.prototype.$http = axios;

new Vue({
	el: '#app',

	data: {
		skills: []
	},

	mounted() {
		// Make an ajax request to our server - /skills

		// choice 1 : fetch() => fetch api

		// choice 2 : $.getJson => juery

		// choice 3 : Axios api
		this.$http.get('/skills').then(response => this.skills = response.data);
	}
});