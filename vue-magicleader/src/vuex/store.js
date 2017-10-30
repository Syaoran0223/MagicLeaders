import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let vuex = new Vuex.Store({
    state: {
        // path: 'http://192.168.1.100:3000',
        path: 'http://www.syaoran.cc:3000',
        imgPath: 'http://www.syaoran.cc:3000/images',

        // 教学环境
        educationImgList: '',
        // 招班动态
        admissionsImgList: '',
        // 教师目录列表
        teacherImgoList: '',
    },
    mutations: {
        educationImgListSave(state, educationImgList) {
           state.educationImgList = educationImgList
        },
        admissionsImgListSave(state, admissionsImgList) {
           state.admissionsImgList = admissionsImgList
        },
        teacherImgoListSave(state, teacherImgoList) {
           state.teacherImgoList = teacherImgoList
        },
    }
});

 export default vuex
