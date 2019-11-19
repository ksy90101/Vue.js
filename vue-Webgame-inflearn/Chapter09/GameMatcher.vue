<!-- 동적 라우트 매칭 -->
<template>
<div v-if="currentGame === 'number-baseball'">
    <number-baseball></number-baseball>
</div>
<div v-else-if="currentGame === 'response-check'">
    <response-check></response-check>
</div>
<div v-else-if="currentGame === 'lotto-generator'">
    <lotto-generator></lotto-generator>
</div>
<div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
import NumberBaseball from '../Chapter03/NumberBaseball';
import ResponseCheck from '../Chapter04/ResponseCheck';
import LottoGenerator from '../Chapter06/LottoGenerator';


export default {
    components: {
        NumberBaseball,
        ResponseCheck,
        LottoGenerator,
    },
    mounted() {
        console.log(this.$router); // 설정이 궁금하면 나오는 것
        console.log(this.$route); // 게임내에 있는 주소들이 들어있음
    },computed: {
        currentGame() {
            return this.$route.params.name;
        },
    },
};
</script>