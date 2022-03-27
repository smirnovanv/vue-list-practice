const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputText: '',
      showListStatus: true,
    };
  },
  computed: {
    buttonName() {
      return this.showListStatus ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputText);
      this.inputText = '';
    },
    hideList() {
      this.showListStatus = !this.showListStatus;
    },
  },
});

app.mount('#assignment');
