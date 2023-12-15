<template>
    <div class="menu">
        <span class="icon"><svg width="1em" height="40px" viewBox="0 0 48 48" fill="none">
                <path d="M7.94971 11.9497H39.9497" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path d="M7.94971 23.9497H39.9497" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path d="M7.94971 35.9497H39.9497" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </svg>
        </span>
    </div>
</template>
<style scoped>
.menu {
    font-size: 28px;
    width: 60px;
    height: 40px;
    background: rgba(0, 0, 0, .2);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 6px;
    transition: all .3s;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 80px;
}

.icon {
    color: #fff;
}
</style>