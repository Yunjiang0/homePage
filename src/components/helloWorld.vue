<template>
    <div class="helloWorld">
        <img class="img" src="../../public/img/logo.png" alt="">
        <div class="text">
            <span>hello</span>
            <span style="margin-left: 2rem;">world</span>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.helloWorld {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    box-sizing: border-box;
    user-select: none;

}

.img {
    border-radius: 50%;
    width: 120px;
}

.text {
    width: 100%;
    height: 142px;
    margin-left: 2rem;
    font-family: Pacifico;
    color: #fff;
}

.text span {
    font-size: 5rem;
}
</style>