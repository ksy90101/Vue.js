<template>
<table>
    <slot></slot> <!-- 부모가 보낸 태그를 받는 법 -->
</table>
</template>

<script>
import TrComponent from './TrComponent'
export default {
    components: {
        TrComponent,
    },
    computed: {
        tableData() {
            return this.$store.state.tableData;
        },
        // turnMessage(){ // getters의 값을 가져오는 것
        //     return this.$stroe.getters.turnMessage;
        // }
    },
}
</script>

<style scoped>

</style>