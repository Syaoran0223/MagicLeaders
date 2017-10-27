<template lang="html">
    <div id='footer'>
        <div class="footer-container">
            <!-- left -->
            <div class="footer-part" >
                <div class="footer-part-title">
                    {{ footerPartLeft[0].title}}
                </div>
                <div class="footer-part-content-container">
                    <ul class="footer-part-content" v-for='left in footerPartLeft.slice(1)'>
                        <a :href="left.path" target="_blank">
                            <li>
                                {{ left.title }}
                            </li>
                        </a>
                    </ul>
                </div>

            </div>
            <!-- content -->
            <div class="footer-part">
                <div class="footer-part-title">
                    {{ footerPartContent[0].title}}
                </div>
                <ul class="footer-part-content-container">
                    <li class="footer-part-content" v-for='contetn in footerPartContent.slice(1)' :class="{'footer-content-fix': contetn.fix}">
                        {{ contetn.title }}
                    </li>
                </ul>
            </div>
            <!-- right -->
            <div class="footer-part">
                <div class="footer-part-title">
                    {{ footerPartRight[0].title}}
                </div>
                <ul class="footer-part-content-container">

                    <li class="footer-part-content"     v-for='right in footerPartRight.slice(1)'>
                        {{ right.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerPartLeft: [
                {
                    title: '相关链接 /  Related Links'
                },
                {
                    title: '曼奇立德博客',
                    path: '/',
                },
                {
                    title: '曼奇立德CG美术博客',
                    path: '',
                }
            ],
            footerPartContent: [
                {
                    title: '相关链接 /  Related Links'
                },
                {
                    title: '地址：福建省福州市仓山区花溪北路橘园洲创意广场63号楼附属楼4层',
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
                    title: '电话: 18065175256'
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
    #footer {
        width: 100%;
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
    }
    .footer-part-title {
        font-size: 14px;
        line-height: 15px;
        color: black;
    }
    .footer-part-content-container {
        position: relative;

    }
    .footer-part-content {
        width: 80%;
        font-size: 14px;
        line-height: 14px;
        margin-top: 5px;
        box-sizing: border-box;
        list-style: none;
    }
    /* 修复行高问题*/
    .footer-content-fix {
        margin-top: 10px;
    }

</style>
