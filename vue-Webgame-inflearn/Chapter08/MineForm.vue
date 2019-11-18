<template>
  <div>
    <input type="number" placeholder="세로" :value="row" @change="onChangeRow" />
    <input type="number" placeholder="가로" :value="cell" @change="onChangeCell" />
    <input type="number" placeholder="지뢰" :value="mine" @change="onChangeMine" />
    <button @click="onClickBtn">시작</button>
  </div>
</template>

<script>
  import { START_GAME } from './store';

  //이 지역(컴포넌트)에서만 데이터를 사용하려면 굳이 vuex를 사용할 필요가 없다.(vuex코드만 길어질뿐...)
  export default {
    data() {
      return {
        row: 10,
        cell: 10,
        mine: 20,
      };
    },
    methods: {
      onChangeRow(e) {
        this.row = e.target.value;
      },
      onChangeCell(e) {
        this.cell = e.target.value;
      },
      onChangeMine(e) {
        this.mine = e.target.value;
      },
      onClickBtn() {
        this.$store.commit(START_GAME, { row: this.row, cell: this.cell, mine: this.mine });
      }
    },
  }
</script>