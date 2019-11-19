import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../Chapter03/NumberBaseball';
import ResponseCheck from '../Chapter04/ResponseCheck';
import RockScissorsPaper from '../Chapter05/RockScissorsPaper';
import LottoGenerator from '../Chapter06/LottoGenerator';
import TicTacToe from '../Chapter07/TicTacToe';
import MineSweeper from '../Chapter08/MineSweeper';
import GameMatcher from './GameMatcher'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/number-baseball', component: NumberBaseball },
    { path: '/response-check', component: ResponseCheck },
    { path: '/rock-scissors-paper', component: RockScissorsPaper },
    { path: '/lotto-generator', component: LottoGenerator },
    { path: '/tic-tac-toe', component: TicTacToe },
    { path: '/mine-sweeper', component: MineSweeper },
    { path: '/game/:name', component: GameMatcher } // ex) /game/number-baseball/
  ],
});