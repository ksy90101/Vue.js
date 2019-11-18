<template>
  <div>
    <mine-form></mine-form>
    <div>{{timer}}</div>
    <table-component></table-component>
    <div>{{result}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import store, { INCREMENT_TIMER } from './store';
import TableComponent from './TableComponent';
import MineForm from './MineForm';

let interval; // 메모리 누수 막기 위해 생성

  export default {
    store,
    components: {
      TableComponent,
      MineForm,
    },
    computed: {
      ...mapState(['timer', 'result', 'halted']),
    },
    methods: {
    },
    watch: {
      halted(value, oldValue){
        if(value === false){
          interval = setInterval(() => {
            this.$store.commit(INCREMENT_TIMER); 
          }, 1000);
        }else{ // 게임중단
          clearInterval(interval);
        }
      }
    },
};
</script>

<style scoped>
    table{
        border-collapse: collapse;
    }
    td{
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>
