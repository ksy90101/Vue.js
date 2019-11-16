<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}}의 승리!</div>
    </div>
</template>

<script>
import Vue from 'vue';
import TableComponent from './TableComponent';

export default {
components: {
    TableComponent,
},
 data(){
     return{
         tableData: [
             ['', '', ''],
             ['', '', ''],
             ['', '', ''],
         ],
         turn: 'O',
         winner: '',
     };
 },
 methods: {
     onChangData(){
         // this.tableData[1][0] = 'X'; 작동하지 않음
         //Vue.set(this.tableData[1], 0, 'X'); -> 작동하는 방법 1
         this.$set(this.tableData[1], 0, 'X'); // Vue.set과 동일
     }
 },
}
</script>

<style> 
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