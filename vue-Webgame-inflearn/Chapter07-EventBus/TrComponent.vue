<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :cell-index="index" :row-index="rowIndex"></td-component>
    </tr>
</template>

<script>
import TdComponent from './TdComponent';
export default {
    props:{
        rowData: Array,
        rowIndex: Number,
    },
    data(){
        return{

        };
    },
    components:{
        TdComponent,
    }
}
</script>