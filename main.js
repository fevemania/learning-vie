// Lesson: Components 101
Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
	`,

	data() {
		return {
			tasks: [
				{ task: 'Go to the store', complete: true },
				{ task: 'Go to the email', complete: false },
				{ task: 'Go to the farm', complete: true },
				{ task: 'Go to work', complete: false },
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>',
});

Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		};
	},
	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    {{ title }}
		    <button class="delete" @click="isVisible = false"></button>
		  </div>

		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>	
	`,
});

Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		  	<div class='box'>
		  		<slot></slot>
		  	</div>			  
		  </div>
		  <button class="modal-close" @click="$emit('close')"></button>
		</div>
	`,
});

Vue.component('tabs', {
	template: `
	<div>
		<div class="tabs">
		  <ul>
		  	<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
		  		<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
		  	</v1>
		  </ul>
		</div>	

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
	`,
	data() {
		return { tabs: [] };
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name);
			});
		}
	}
});

Vue.component('tab', {
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,
	props: {
		name: {require: true},
		selected: {default: false}
	},
	data() {
		return {
			isActive: false
		}
	},
	computed: {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},

	mounted() {
		this.isActive = this.selected;
	},
});

new Vue({
	el: '#root',
	data: {
		showModal: false
	}
});