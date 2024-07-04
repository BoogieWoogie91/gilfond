<template>
    <div class="bg">
        <div class="loader"></div>
    </div>
</template>

<style lang="scss" scoped>
.bg {
    background: $standart-black;
    opacity: .7;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;

    @include flex(center, center, $direction: false);

    .loader {
        width: 200px;
        height: 31px;
        box-shadow: 0 3px 0 #fff;
        display: grid;
    }

    .loader:before,
    .loader:after {
        content: "";
        grid-area: 1/1;
        background: radial-gradient(circle closest-side, var(--c, red) 92%, #0000) 0 0/calc(100%/4) 100%;
        animation: l4 1s infinite linear;
    }

    .loader:after {
        --c: #000;
        background-color: #fff;
        box-shadow: 0 -2px 0 0 #fff;
        clip-path: inset(-2px calc(50% - 10px));
    }

    @keyframes l4 {
        100% {
            background-position: calc(100%/3) 0
        }
    }
}
</style>