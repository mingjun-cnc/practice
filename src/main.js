import Vue from 'vue'

import './lib/mui/css/mui.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

import app from './app.vue'
Vue.component(app)

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render: function(creatElement){
       return  creatElement(app)
    }
})