<!-- style과 class는 객체형식으로 사용 가능함
    class -> { state: true, hello: false}라고 하면 최종결과로는 state만 가능
    style -> { backgroundImage: '', fontsize: '14px' } 이렇게 객체 형식 가능
    style은 뷰에서 사용할때 background-image = backgroundImage처럼 하이픈이 있는 곳은 하이픈은 빼고 하이픈 뒤 글자 하나를 대문자로 쓸것!-->

<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
// LifeCycle : created, mounted, updated, destroyed
// created : 처음 컴포넌트가 만들어 질때(화면 나타나기 전)
// mounted : 컴포넌트가 화면에 나타난 후
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};
const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

let interval = null;
export default {
 data(){
     return{
         imgCoord: rspCoords.바위,
         result:'',
         score:0,
     };
 }, 
 computed: {
     computedStyleObject() {
         return{
             background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
         };
     }
 },
 methods: {
     changeHand(){
        interval = setInterval(() => { // 기준 간격을 두고 주기적으로 이벤트를 발생 시키고 싶을때 사용, 기간은 milisecond
        if(this.imgCoord === rspCoords.바위){
        this.imgCoord = rspCoords.가위;
         }else if(this.imgCoord === rspCoords.가위){
         this.imgCoord = rspCoords.보;
         }else if (this.imgCoord === rspCoords.보){
         this.imgCoord = rspCoords.바위;
         }
     }, 100);
     },
     onClickButton(choice){
         clearInterval(interval); // 버튼을 클릭하면 손가락 움직이는 사진이 멈춤
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0){
            this.result = '비겼습니다.';
        }else if([-1, 2].includes(diff)){
            this.result = '이겼습니다.';
            this.score += 1;
        }else{
            this.result = '졌습니다.';
            this.score -= 1;
        }
        setTimeout(() => {
         this.changeHand();
        }, 1000);
     }
 },
 beforeCreate() {
     console.log('beforeCreate');
 },
 created(){ // 컴포넌트가 만들어 질때(화면에 나타나기 전)
     console.log('Createed');
 }, 
 beforeMount() {
    console.log('beforeMount');

 },
 mounted(){ // 컴포넌트가 화면에 보여질때
     console.log('Mounted');
    this.changeHand();
 },
 beforeUpdate() {
    console.log('beforeUpdate');
 },
 updated(){ // 데이터가 변경되어 화면이 다시 그려질때
     console.log('updated');
 },
 beforeDestroy() {
    console.log('beforeDestory');
    clearInterval(interval); // 중지하고 싶을때 사용, 매개변수는 setInterval 함수가 리턴해주는 값을 사용
 },
 destroyed() { // 컴포넌트가 사라질때
    console.log('destroyed');
 },
};
</script>

<style scoped> 
#computer{
    width: 142px;
    height: 200px;
    background-position: 0 0;
}
</style>