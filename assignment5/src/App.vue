<template>
  <div class="timer">
    <h1 class="timer__title">VUE TIMER</h1>
    <div class="timer__countdown">{{ isStarted && remTime != 60 ? "0." + remTime : "1.00"}}</div>
    <div class="timer__btn-section">
      <button class="timer__btn-stop" v-on:click="stopCountDown">Stop</button>
      <button class="timer__btn-start" v-on:click="startCountDown"> {{ startorContionue }}</button>
      <bUtton class="timer__btn-reset" v-on:click="resetCountDown">Reset</bUtton>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
  export default {
    components : {

    },
    setup() {
      const startorContionue = ref("Start");
      let timer;
      let isStarted = ref(false);
      const remTime = ref(60);
      const countDown = () => {
        if(remTime.value > 0) {
          return remTime.value--;
        }
        clearInterval(timer);
        
      }
      const startCountDown = () => {
        isStarted.value = true;
        if(!timer) {
        timer = window.setInterval(() => {
        countDown();
        console.log(remTime.value);
      }, 1000);
      }
      }
      const resetCountDown = () => {
        isStarted.value = false;
         clearInterval(timer);
         timer = undefined;
         remTime.value = 60;
         startorContionue.value = "Start";
      }
      const stopCountDown = () => {
        clearInterval(timer);
        timer = undefined;
        startorContionue.value = "Continue";
      }
      return {
        remTime,
        startorContionue,
        isStarted,
        startCountDown,
        resetCountDown,
        stopCountDown
      }
    }
  }
</script>

<style lang="scss">
html, body {
  margin: 0;
}
*{
  box-sizing: border-box;
}
  .timer {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: black;

    &__title {
        display: block;
        color: white;
        font-size: 3rem;
    }

    &__countdown {
        display: block;
        color: white;
        font-size: 4rem;
    }

    &__btn-reset {
      border-radius: 5px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
        margin: 1.5rem;
        background-color: #a12727;
    }

    &__btn-stop {
      border-radius: 5px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
        margin: 1.5rem;
        background-color: gray;
    }

    &__btn-start {
      border-radius: 5px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
        margin: 1.5rem;
        background-color: #4da11d;
    }
}
</style>
