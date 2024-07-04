<template>
    <header>
        <a href="#">
            <img src="@/assets/img/logo.svg" alt="logo">
        </a>

        <a href="#">Пользователь</a>
    </header>
    <div class="fake-header"></div>
</template>

<style lang="scss" scoped>
header {
    @include flex(space-between, center, $direction: false);
    height: 89px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 0 50px;
    box-sizing: border-box;


    a {
        text-decoration: none;
        @include font(400, 16px, $standart-black, 19.5px);
    }
}

.fake-header {
    height: 89px;
}
</style>