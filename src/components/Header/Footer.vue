<template>
    <div  class="footer">
        <div class="footer-content">
            <div>
                <p class="first-title">
                    <span>官网首页</span>
                    <span>新闻动态</span>
                    <span>联系我们</span>
                </p>
                <div class="validation">
                    <span>@版权所有  粤ICP备19080505号-1</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
    margin: 0 auto;
    float: left;
    background-color: black;
    height: 290px;
    width: 100%;
}

.footer-content {
    margin: 0 auto;
    margin-top: 83px;
    width: 70%;
    height: 200px;
}

.first-title span {
    margin-left: 119px;
    width:62px;
    height:15px;
    font-size:18px;
    font-family:59;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:57px;
}

.validation {
    margin: 0 auto;
    width: 40%;
    margin-bottom: 10px;
    height:15px;
    font-size:18px;
    font-family:58;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:57px;
}
.validation span {
    width: 200px;
}
</style>
