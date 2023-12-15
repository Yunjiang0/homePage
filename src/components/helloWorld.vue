<template>
    <div class="helloWorld">
        <img class="img" src="../../public/img/logo.png" alt="">
        <div class="text">
            <span>hello</span>
            <span>world</span>
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
    font-family: Pacifico;
    color: #fff;
}

.text span {
    font-size: 5rem;
    margin-left: 2rem;
}

@media screen and (max-width: 1244px) {
    .text span {
        font-size: 4rem;
        line-height: 142px;
        margin-left: 1rem;
    }

    .img {
        width: 100px;
    }
}

@media screen and (max-width: 870px) {
    .text span {
        font-size: 3.5rem;
        line-height: 142px;
        margin-left: 0.6rem;
    }

    .img {
        width: 70px;
    }
}

@media screen and (max-width: 720px) {
    .text span {
        font-size: 4rem;
        margin-left: 1.5rem;
    }

    .img {
        width: 100px;
    }
}

@media screen and (max-width: 480px) {
    .text span {
        font-size: 3.5rem;
        line-height: 142px;
        margin-left: 0.6rem;
    }

    .img {
        width: 70px;
    }
}

@media screen and (max-width: 390px) {
    .text span {
        font-size: 3.5rem;
        line-height: 142px;
        margin-left: 0;
    }

    .text span:last-child {
        margin-left: 1rem;
    }

    .img {
        display: none;
    }
}

@media screen and (max-width: 290px) {
    .text span {
        font-size: 2.5rem;
        line-height: 142px;
        margin-left: 0;
    }
}
</style>