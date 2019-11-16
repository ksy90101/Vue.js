<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :row-index="rowIndex"></td-component>
    </tr>
</template>

<script>
import TdComponent from './TdComponent';
export default {
    props:{
        rowIndex: Number,
    },
    data(){
        return{

        };
    },
    computed: {
        rowData(){
            return this.$store.state.tableData[this.rowIndex]
        }
    },
    components:{
        TdComponent,
    }
}
</script>