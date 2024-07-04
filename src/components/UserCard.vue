<script setup>
import { useStore } from 'vuex'


const store = useStore();
</script>


<template>
    <div class="usercard">
        <img src="@/assets/img/fake-photo-big.svg" alt="">

        <div class="user-info">
            <h6 class="name">{{ store.state.users.selectedUser.name }}</h6>
            <p class="email"><span>email:</span>{{ store.state.users.selectedUser.email }}</p>
            <p class="phone"><span>phone:</span>{{ store.state.users.selectedUser.phone }}</p>

            <h6 class="about-me-title">О себе:</h6>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.usercard {
    padding: 30px 30px 30px 20px;
    box-sizing: border-box;
    width: 100%;
    border-left: 1px solid #E0E0E0;
    height: 100%;

    @include flex(space-between, flex-start, $direction: false);

    @media (max-width: 1280px) {
        flex-wrap: wrap;
    }


    img {
        margin-right: 60px;
    }

    h6 {
        @include font(600, 16px, $standart-black, 22.4px);

        &.name {
            margin-bottom: 10px
        }

        &.about-me-title {
            margin-bottom: 25px
        }
    }

    p {
        @include font(400, 14px, $standart-gray, 17.07px);

        &.email {
            margin-bottom: 10px
        }

        &.phone {
            margin-bottom: 20px
        }

        span {
            @include font(600, 14px, $standart-black, 19.6px);
        }
    }
}
</style>