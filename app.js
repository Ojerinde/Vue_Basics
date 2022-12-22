const { createApp } = Vue;
// import {createApp} from 'vue' Vue CLI
const app1 = createApp({
  data() {
    return {
      counter: 0,
      counterNumber: "",
      //   This is to change style on the google link
      hasMargin: true,
      googleLink: "https://www.google.com/",
      mood: null,
    };
  },
  methods: {
    increment() {
      //   console.log("Triggered");
      this.counter++;
      //   this.increaseAgain();
      // This is used to change the counter color
      this.mood = "good";
    },
    // increaseAgain() {
    //   this.counter++;
    // },
    decrement() {
      this.counter--;
      this.mood = "bad";
    },
    reset() {
      this.counter = 0;
      this.mood = null;
    },
    // Useful for one-way binding
    // getCounterNumber(event) {
    //   this.counterNumber = Number(event.target.value);
    // },
    set() {
      // This is for two way binding
      this.counter = this.counterNumber;
      this.counterNumber = 0;
      // This is for ref
      //   console.dir(this.$refs.counterRef);
      //   this.counter = +this.$refs.counterRef.value;
      //   this.$refs.counterRef.value = "";
    },
  },
  computed: {
    increase() {
      newNumber = this.counter;
      console.log("Trigerred");
    },
    counterClasses() {
      if (this.mood === "good") {
        return { up: true };
      }
      if (this.mood === "bad") {
        return { down: true };
      }
    },
  },
  watch: {
    counter(value) {
      if (value > 10) {
        this.counter = 0;
      }
    },
  },
});
app1.mount("#app1");

// let FullName = "Joel";
// let message = "Hello" + FullName;
// console.log(message);
// FullName = "Ojerinde";
// console.log(message);

// const fullname = {
//   name: "Joel",
// };

// const handler = {
//   set(target, key, value) {
//     console.log(target, key, value);
//     name = value
//   },
// };

// const proxy = new Proxy(fullname, handler);
// proxy.name = "Ojerinde";
// console.log(proxy);

// Second appllication

const app2 = createApp({
  data() {
    return {
      studentLists: [],
      student: "",
      users: {
        name: "Joel",
        school: "Unilorin",
        location: "Kwara",
      },
      userLink:
        "https://vuejs.org/guide/essentials/list.html#v-for-with-an-object",
    };
  },
  methods: {
    addStudent() {
      this.studentLists.unshift(this.student);
      this.student = "";
    },
  },
  computed: {},
  watch: {},
});
app2.mount("#app2");
