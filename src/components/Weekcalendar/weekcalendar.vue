<template src="./template.html"> </template>

<script>


let LS = {
  save(data) {
    localStorage.setItem("events", JSON.parse(data));
  },
  get() {
    return JSON.parse(localStorage.getItem("events") || "[]");
  },
};

export default {
  data: () => ({
    focus:'',
    type: "week",
    typeToLabel: {
      week: "Week",
      day: "Day",
    },
    name: null,
    details: null,
    start: null,
    end: null,
    color: "grey",
    dialog: false,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        name: "Ruby",
        details: null,
        start: "2020-07-06",
        end: "2020-07-07",
        color: "grey",
      },
    ],
  }),
  computed: {
    accountname() {
      return this.$route.query.name;
    },
    
  },
  
  
  
  // props:['focus'],
  mounted() {
    // this.$refs.calendar.checkChange()
    this.$refs.calendar.scrollToTime("08:00");
    this.focus = this.$route.query.date;
  },

  // ,props:{
  //   today:String
  // }
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    loginEvent() {
      let URL = "https://access.line.me/oauth2/v2.1/authorize?";
      // 必填
      URL += "response_type=code"; // 希望LINE回應什麼  但是目前只有code能選
      URL += `&client_id=${process.env.VUE_APP_LINE_CHANELL_ID}`; // 你的頻道ID
      URL += `&redirect_uri=${process.env.VUE_APP_LINE_REDIRECT_URL}`; // 要接收回傳訊息的網址
      URL += "&state=123456789"; // 用來防止跨站請求的 之後回傳會傳回來給你驗證 通常設亂數 這邊就先放123456789
      URL += "&scope=openid%20profile"; // 跟使用者要求的權限 目前就三個能選 openid profile email
      // 選填
      URL += "&nonce=helloWorld"; // 順便將機器人也加好友
      URL += "&prompt=consent";
      URL += "&max_age=3600";
      URL += "&ui_locales=zh-TW";
      URL += "&bot_prompt=normal";
      window.open(URL, "_self"); // 轉跳到該網址
    },
    getEvent() {
      LS.get();
    },

    addEvent() {
      if (this.start && this.name && this.end) {
        this.events.push({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: 'grey',
        });
        LS.save({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: 'grey',
        });
        this.name = null;
        this.details = null;
        this.start = null;
        this.end = null;
        this.color = null;
      } else {
        alert("Name, start, and end are required");
      }
    },
  },
};
</script>

<style src="./style.css"></style>
