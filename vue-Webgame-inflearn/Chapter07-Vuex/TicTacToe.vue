<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component> <!-- 다른 컴포넌트에 태그를 보내는 곳(slot) -->
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
      </tr>
    </table-component>
    <div v-if="winner">{{winner}}님의 승리!</div>
  </div>
</template>

<script>
  // [0, 1, 2, 3, 4 ,12, 7, 8, 9, 10, 13, 156] 
  //  0  1  2  3  4  5    6  7  8  9  10, 11,  12
  // 배열이 값이 수정되거나 값이 계속 늘어날 경우 :key로 index를 사용하는 것이 좋다
  // 랜더링을 할때 화면을 다시 그려야 할지 말지를 결정하는 것이 key(즉, 인덱스가 추가되면 그 인덱스에 대해서만 화면에 새로 그려짐)
  // 근데, 중간값이 삭제가 되면 뒤의 값들에 인덱스가 삭제되기 때문에 삭제 된 후부터 다시 그려버린다(이럴때는 단점이 될 것이다)

  import { mapState } from 'vuex';
  import store, { CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER } from './store';
  import TableComponent from './TableComponent';
  export default {
    store,
    components: {
      TableComponent,
    },
    data() {
      return {
        data: 1,
      }
    },
    computed: {
      ...mapState(['winner', 'turn', 'tableData']),
      // winner() {
      //   return this.$store.state.winner;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // },
    },
    methods: {
      onClickTd(rowIndex, cellIndex) {
        console.log(this.cellData);
        if (this.tableData[rowIndex][cellIndex]) return;
        this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex });
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

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>