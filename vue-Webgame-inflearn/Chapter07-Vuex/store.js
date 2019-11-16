// vuex는 store를 여러개 만들어도 됨
// 여기서 데이터를 중앙관리할수 있도록 도와줌
// export vs export default의 차이는 export default는 import할때 이름을 마음대로 지정할수 있고 또 마음대로 불러 올수 있는데
// export는 중괄호를 묶어서 가져와야 함 그리고 여러개 부를수도 있음
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex); // vue와 vuex를 연결해줘야 함

export const SET_WINNER = 'SET_WINNER'; // 뮤테이션을 변수로 빼는것, 이렇게 많이 사용
export const CLICK_CELL = 'CLICK_CELL'; // import { SET_WINNER, CLICK_CELL} from './store';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({ // import store from './store';
    state:{
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn: 'O',
        winner: '',
    },// vue의 data와 비슷
    getters: {
        turnMessage(state){
            return state.turn + '님이 승리하셨습니다.';
        },
    }, // vue의 computed와 비슷
    mutations: {
       [SET_WINNER](state, winner){ // 뮤테이션은 대문자로 적는것이 규칙
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }){ // data -> row, cell이 들어있음
            Vue.set(state.tableData[row] ,cell ,state.turn);
        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state){
            state.turn = 'O';
            state.tableData = [
                ['', '',' '],
                ['', '',' '],
                ['', '',' '],
            ];
        },
        [NO_WINNER](state){
            state.winner = '';
        }
    }, // state를 수정할때 사용, 동기적으로
    actions: {

    }, // 비동기를 사용할때 또는 여러 뮤테이션을 연달아 실행할 때
});