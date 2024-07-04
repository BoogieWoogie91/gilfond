<script setup>
const props = defineProps({
    user: { type: Object, required: true },
})
</script>


<template>
    <div class="usercard-mini">
        <div class="user-photo">
            <img src="@/assets/img/fake-photo-mini.svg" alt="user-avatar">
        </div>

        <div class="user-info" :style="$props.user?.selected ? { background: '#E0E0E0' } : { background: '#fff' }">
            <h6>{{ $props.user?.username }}</h6>

            <p>{{ $props.user?.email }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.usercard-mini {
    width: 100%;
    height: 70px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px #0000001A;
    cursor: pointer;
    margin-bottom: 18px;


    @include flex(space-between, center, $direction: false);

    &:hover {
        transform: scale(1.05);
    }


    .user-photo {
        border-right: 1px solid #E0E0E0;
        max-height: 70px;
        max-width: 70px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .user-info {
        border-left: 1px solid #E0E0E0;
        max-height: 170px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 15px;

        h6 {
            margin-bottom: 5px;

            @include font(600, 14px, $standart-black, 17.07px);
        }

        p {
            @include font(400, 14px, $standart-gray, 17.07px);
        }
    }
}
</style>