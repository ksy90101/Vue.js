<template>
    <div class="ball" :style="stlyeObject">{{number}}</div>
</template>

<script>
export default {
    name: 'LottoBall',
    props: { // LottoGenerator컴포넌트가 LottoBall 컴포넌트를 사용하면 부모자식관계가 생기는데, 부모가 자식에게 데이터를 줄수 있는데, 그 역할을 하는 것이 props
    //대신 props는 자식이 데이터를 변경할수 없다. readonly라고 생각하면 됨.
    number: Number,
    },
    computed: {
        stlyeObject(){
        let background;
        if(this.number <= 10){
            background = 'red';
        }else if(this.number <= 20){
            background = 'orange';
        }else if(this.number <= 30){
            background = 'yellow'
        }else if(this.number <= 40){
            background = 'blue';
        }else{
            background = 'green';
        }
        return{
            background,
        };
        }
    },
}
</script>

<style scoped>
    .ball{
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px; /* 공을 동그랗게 만드는 것*/
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>