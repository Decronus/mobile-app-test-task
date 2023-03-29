<template>
    <div class="friend-card-wrap">
        <div class="friend-card-bg-img"></div>

        <user-info
            :name="myInfo?.user.name"
            :email="myInfo?.user.email"
            :birthday="new Date(myInfo?.user.birthday).toLocaleDateString()"
            :avatar="myInfo?.user.photo"
        />

        <friend-card-menu-list
            :countBooking="String(myInfo?.countBooking)"
            :countFriends="String(myInfo?.countFriends)"
            :countWishes="String(myInfo?.countWishes)"
            :status="myInfo?.status"
        />

        <bottom-menu />
    </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import BottomMenu from "@/components/BottomMenu.vue";
import FriendCardMenuList from "@/components/FriendCardList.vue";
import Queries from "../services/queries.services";

export default {
    name: "friend-card",
    components: {
        UserInfo,
        BottomMenu,
        FriendCardMenuList,
    },

    data() {
        return {
            myInfo: null,
        };
    },

    mounted() {
        Queries.getMyInfo().then((info) => {
            this.myInfo = info.data;
            console.log(this.myInfo);
        });
    },
};
</script>

<style scoped>
.friend-card-wrap {
    background: #fafafa;
    width: 100vw;
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
