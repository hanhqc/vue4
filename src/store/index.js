import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        nums:[]
    },
    mutations:{
        add(state,num){
            state.nums.push(num)
        }
    },
    getters:{
        result(state){
            let res = 0;
            for(let n of state.nums){
                res += Number(n)
            }
            return res
        }
    }
})
