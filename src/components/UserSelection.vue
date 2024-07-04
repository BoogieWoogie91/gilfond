<script setup>
import { ref, onMounted, defineEmits, watch } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify';

import UserCardMini from '@/components/UserCardMini.vue'


onMounted(() => {
    input.value.focus();
})

const emit = defineEmits(['loading']);
const inputData = ref('');
const users = ref([]);
const store = useStore();

const input = ref(null);
const outerBox = ref(null);


const getUsers = debounce(() => {
    emit('loading')
    store.dispatch('users/getUsers', inputData.value).then(res => {
        users.value = store.state.users.foundUsers;
        emit('loading')
    }).catch(err => {
        emit('loading')
        toast("Чтото пошло не так, повторите попытку :(", {
            "theme": "colored",
            "type": "error",
            "autoClose": 2000,
            "dangerouslyHTMLString": true
        })
    })
}, 1000);

function debounce(fn, delay) {
    let timeout;

    return function () {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fn();
        }, delay);
    }
}

watch(users, () => {
    console.log(outerBox.value.offsetHeight);
    if (users.value.length > 0) {
        outerBox.value.style.height = 'calc(100% - 183px)';
    } else {
        outerBox.value.style.height = '0';
    }
    if (outerBox.value.offsetHeight < users.value.length * 88) {
        outerBox.value.style.overflowY = 'scroll'
    } else {
        outerBox.value.style.overflowY = 'hidden'
    }
})


</script>

<template>
    <div class="user-selector">
        <div style="padding: 30px 30px 0 20px;">
            <h6>Поиск сотрудников</h6>

            <input ref="input" type="text" placeholder="Введите Id или имя " v-model="inputData" @keyup="getUsers">

            <h6>Результаты</h6>
        </div>


        <div class="found-users" ref="outerBox">
            <div class="found-users-inner">
                <UserCardMini v-for="user in users" :user="user" @click="store.dispatch('users/selectUser', user)"
                    :key="user.id" />
            </div>
        </div>

        <p v-if="users.length == 0" class="no-data-found">
            {{ inputData.length > 0 ? 'ничего не найдено' : 'начните поиск' }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.user-selector {
    box-sizing: border-box;
    max-width: 290px;
    width: 100%;
    border-right: 1px solid #E0E0E0;
    height: 100%;

    h6 {
        margin-bottom: 14px;

        @include font(600, 16px, $standart-black, 22.4px);

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    input {
        border-radius: 8px;
        border: 1.5px solid #E9ECEF;
        width: 100%;
        height: 50px;
        text-indent: 24px;
        margin-bottom: 22px;
        @include font(400, 14px, $standart-gray, 17.07px);
    }

    .found-users {
        margin-top: 8px;
        padding: 10px 10px 0 20px;
    }

    p.no-data-found {
        margin-top: 10px;
        margin-left: 20px;
        @include font(400, 14px, $standart-gray, 17.07px);
    }


}
</style>