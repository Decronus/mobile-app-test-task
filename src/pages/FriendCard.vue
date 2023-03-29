<template>
    <div class="friend-card-wrap">
        <div class="friend-card-bg-img"></div>

        <user-info />

        <friend-card-menu-list />

        <bottom-menu />
    </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import BottomMenu from "@/components/BottomMenu.vue";
import FriendCardMenuList from "@/components/FriendCardList.vue";
export default {
    name: "friend-card",
    components: {
        UserInfo,
        BottomMenu,
        FriendCardMenuList,
    },
};
</script>

<style scoped>
.friend-card-wrap {
    background: #fafafa;
    width: 100vw;
    height: 100vh;
    padding-top: 55px;
}

.friend-card-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 410px;
    background-image: url("../images/friend-card/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
}
</style>
