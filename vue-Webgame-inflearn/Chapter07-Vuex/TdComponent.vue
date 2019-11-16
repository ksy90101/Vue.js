<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import {mapState} from 'vuex';
import { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store'; // 뮤테이션을 왜 변수를 사용하나면 오타를 막기위해서(문자열은 오타가 나도 알려주지 않는데 변수명은 알려주기 때문에 찾기가 쉽다)
export default {
    props: {
        cellData: String,
        rowIndex: Number,
        cellIndex: Number,
    },
    computed: {
      ...mapState({
        tableData: state => state.tableData,
        turn: state => state.turn,
        celldate(state){
          return state,tableData[this.rowIndex][this.cellIndex];
        }
      }),
      // cellData() {
      //   return this.$store.state.tableData[this.rowIndex][this.cellIndex];
      // },
      // tableData() { // 데이터는 computed로 가져옴
      //   return this.$store.state.tableData;
      // },
      // turn(){
      //   return this.$store.state.turn;
      // }
    },
    methods: {
      onClickTd() {
        if(this.cellData) return;

        this.$store.commit(CLICK_CELL, {row: this.rowIndex, cell: this.cellIndex}); //store에 있는거 불러오는것, 뮤테이션 불러오는 것
        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }
        if (win) { // 이긴 경우: 3줄 달성
          this.$store.commit(SET_WINNER, this.turn);
          this.$store.commit(RESET_GAME);
          } else { // 무승부
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            this.$store.commit(NO_WINNER);
            this.$store.commit(RESET_GAME);
            } else {
              this.$store.commit(CHANGE_TURN);
          }
        }
      }
    }
};
</script>