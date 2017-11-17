import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let vuex = new Vuex.Store({
    state: {
        // path: 'http://192.168.1.100:3000',
        // path: 'http://www.magicleaders.com:3000',
        path: 'http://www.syaoran.cc:3000',
        // imgPath: 'http://www.magicleaders.com:3000/images',
        imgPath: 'http://www.syaoran.cc:3000/images',
        // 教学环境
        educationImgList: '',
        // 招班动态
        admissionsImgList: '',
        // 教师目录列表
        teacherImgList: '',
        // 2d 学生作品
        student2dList: '',
        // 3d 学生作品
        student3dList: '',
        // 助教作品
        assistantTeacherList: '',
    },
    mutations: {
        educationImgListSave(state, educationImgList) {
           state.educationImgList = educationImgList
        },
        admissionsImgListSave(state, admissionsImgList) {
           state.admissionsImgList = admissionsImgList
        },
        teacherImgListSave(state, teacherImgList) {
           state.teacherImgList = teacherImgList
        },
        student2dListSave(state, student2dList) {
            state.student2dList = student2dList
        },
        student3dListSave(state, student3dList) {
            state.student3dList = student3dList
        },
        assistantTeacherListSave(state, assistantTeacherList) {
            state.assistantTeacherList = assistantTeacherList
        }
    }
});

 export default vuex
