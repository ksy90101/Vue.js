<template>
  <div>
    <div> <!-- 레이아웃으로, 바뀌지 않는 화면 -->
      <router-link to="/game/index">게임 매쳐</router-link>
      <!-- 주소 쿼리스트링(route에 query안에 key/value로 보여진다), 페이징할때 많이 사용하는 것이 아닐까 생각합니다 -->
      <router-link to="/game/number-baseball?data=1&hello=rutgo&bye=rutgo">숫자야구</router-link> <!-- 라우터내에 있던 주소를 적으면 링크가 됨 -->
      <router-link to="/game/response-check">반응속도</router-link> <!-- a링크와 동일하지만, 페이지가 변경되기보다는 컴포넌트가 변경된다고 생각하면 됨 -->
      <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
      <router-link to="/game/lotto-generator">로또생성기</router-link> 
      <router-link to="/game/tic-tac-toe">틱택토</router-link>
      <router-link to="/game/mine-sweeper">지뢰찾기</router-link>
    </div>
    <router-view></router-view> <!-- 바뀌는 화면이 들어갈 공간 -->
  </div>
</template>

<script>


import router from './routes';
  
  export default {
    router,
  };
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
