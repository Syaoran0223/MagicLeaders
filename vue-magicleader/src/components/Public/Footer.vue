<template lang="html">
    <div id='footer'>
        <div class="footer-line"></div>
        <div class="table-footer hidden-sm hidden-xs">
            <div class="footer-container">
                <!-- left -->
                <div class="footer-part" >
                    <div class="footer-part-title">
                        {{ footerPartLeft[0].title}}
                    </div>
                    <div class="footer-part-content-container footer-left-margin">
                        <ul class="footer-part-content " v-for='left in footerPartLeft.slice(1)'>
                          <!--<a :href="left.path" target="_blank">-->
                            <!--<a :href="#" target="_blank">-->
                                <li>
                                    {{ left.title }}
                                </li>
                            <!--</a>-->
                        </ul>
                    </div>

                </div>
                <!-- content -->
                <div class="footer-part">
                    <div class="footer-part-title footer-content-title-fix">
                        {{ footerPartContent[0].title}}
                    </div>
                    <ul class="footer-part-content-container">
                        <li class="footer-part-content footer-content-patr-fix" v-for='contetn in footerPartContent.slice(1)' :class="{'footer-content-fix': contetn.fix}">
                            {{ contetn.title }}
                        </li>
                    </ul>
                </div>
                <!-- right -->
                <div class="footer-part">
                    <div class="footer-part-title footer-right-fix">
                        {{ footerPartRight[0].title}}
                    </div>
                    <ul class="footer-part-content-container footer-right-part-fix">
                        <li class="footer-part-content" v-for='right in footerPartRight.slice(1)'>
                            {{ right.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div  id='mobile-footer' class="hidden-lg hidden-md">
            <div  class="mobile-footer-left">
                <div class="mobile-footer-left-container" >
                    <div class="mobile-footer-title" @click="mFooterLeftShow = !mFooterLeftShow">
                        {{ footerPartLeft[0].title}}
                    </div>
                    <div class="mobile-footer hidden-lg hidden-md">
                        <el-collapse-transition>
                            <div v-show="mFooterLeftShow">
                                <div class="mobile-footer-list" v-for='n in footerPartLeft.slice(1)'>
                                    <a :href="n.path" target="_blank">
                                        <li>{{ n.title }} </li>
                                    </a>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
            </div>
            <div class="mobile-footer-middle">
                <div class="mobile-footer-content-container" >
                    <div class="mobile-footer-title" @click="mFooterContentShow = !mFooterContentShow">
                        {{ footerPartContent[0].title}}
                    </div>
                    <div class="mobile-footer hidden-lg hidden-md">
                        <el-collapse-transition>
                            <div v-show="mFooterContentShow">
                                <div class="mobile-footer-list" v-for='c in footerPartContent.slice(1)'>
                                        <div>{{ c.title }} </div>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
            </div>
            <div class="mobile-footer-right">
                <div class="mobile-footer-right-container" >
                    <div class="mobile-footer-title" @click="mFooterRightShow = !mFooterRightShow">
                        {{ footerPartRight[0].title}}
                    </div>
                    <div class="mobile-footer hidden-lg hidden-md">
                        <el-collapse-transition>
                            <div v-show="mFooterRightShow">
                                <div class="mobile-footer-list" v-for='c in footerPartRight.slice(1)'>
                                        <div>{{ c.title }} </div>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            mFooterLeftShow: false,
            mFooterContentShow: false,
            mFooterRightShow: false,
            footerPartLeft: [
                {
                    title: '相关链接 /  Related Links'
                },
                {
                    title: '曼奇立德官方微博',
                    path: 'http://weibo.com/magicleaders',
                },
                {
                    title: '73老师微博',
                    path: 'http://weibo.com/73art',
                }
            ],
            footerPartContent: [
                {
                    title: '联系我们 /  Contact Us'
                },
                {
                    title: '地址：福州市橘园洲创意广场63号楼附属楼4层',
                    fix: true,
                },
                {
                    title: 'QQ：349839266',
                },
            ],
            footerPartRight: [
                {
                    title: '咨询热线 / Hotline'
                },
                {
                    title: '电话: 15060154981'
                },
                {
                    title: '邮箱：magicleaders@qq.com',
                },
            ]
        }
    },
}
</script>

<style lang="css">

    /* 页脚顶部横线 */
    .footer-line {
        width: 80%;
        border-bottom: 1px solid #ABABAB;
        margin: 15px auto 30px auto;
    }
    #footer {
        width: 80%;
        margin:0 auto;
        /*margin-bottom: 10px;*/
    }
    #footer a {
        color: black;
        text-decoration: none;
    }
    #footer a:hover {
        color: black;
        text-decoration: none;
    }
    .table-footer {
        width: 80%;
        margin: 0 auto;
        position: relative;
        left: 5%;
        top: -15px;
    }
    /* 页脚左侧微调 */
    .footer-left-margin {
        position: relative;
        /*top: 5px;*/
    }
    /*右侧微调*/
    .footer-right-fix {
        position: relative;
        /*top: -5px;*/
    }
    /* 右侧内容高度微调 */
    .footer-right-part-fix {
        position: relative;
        /*top: -8px;*/
    }
    /* 页脚中间微调 */
    .footer-content-patr-fix {
        position: relative;
        /*top: -8px;*/
    }
    .footer-content-title-fix {
        position: relative;
        top: 2px;
    }
    .footer-container {
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .footer-part {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: left;
        padding: 0;
    }
    .footer-part-title {
        font-size: 14px;
        line-height: 14px;
        color: black;
        /*margin-top: 5px;*/
        font-weight: bold;
    }
    .footer-part-content-container {
        position: relative;
        /*top: -2px;*/

    }
    .footer-part-content {
        width: 80%;
        font-size: 12px;
        line-height: 14px;
        margin-top: 5px;
        box-sizing: border-box;
        list-style: none;
        color: black;
    }
    /* 修复行高问题*/
    .footer-content-fix {
        margin-top: 10px;
    }
    /* 移动端页脚设置 */
    .mobile-footer-title {
        font-size: 14px;
        text-align: center;
        font-weight: bold;
    }
    .mobile-footer-list {
        margin: 5px auto;
        width: 80%;
        list-style: none;
        font-size: 13px;
        text-align: center;
    }
</style>
