<template>
    <div class="friend-card-wrap">
        <div class="friend-card-bg-img"></div>

        <div class="friend-card-top-buttons-wrap">
            <square-button-back />
            <square-button-three-dots />
        </div>

        <user-info
            :name="myInfo?.user.name"
            :email="myInfo?.user.email"
            :birthday="myInfo ? new Date(myInfo?.user.birthday).toLocaleDateString() : null"
            :avatar="myInfo?.user.photo"
        />

        <friend-card-menu-list
            :countBooking="myInfo ? String(myInfo?.countBooking) : null"
            :countFriends="myInfo ? String(myInfo?.countFriends) : null"
            :countWishes="myInfo ? String(myInfo?.countWishes) : null"
            :status="myInfo ? myInfo?.status : null"
        />

        <bottom-menu />
    </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import BottomMenu from "@/components/BottomMenu.vue";
import FriendCardMenuList from "@/components/FriendCardList.vue";
import Queries from "../services/queries.services";
import SquareButtonBack from "@/components/SquareButtonBack.vue";
import SquareButtonThreeDots from "@/components/SquareButtonThreeDots.vue";

export default {
    name: "friend-card",

    components: {
        UserInfo,
        BottomMenu,
        FriendCardMenuList,
        SquareButtonBack,
        SquareButtonThreeDots,
    },

    data() {
        return {
            myInfo: null,
        };
    },

    mounted() {
        Queries.getMyInfo().then((info) => {
            this.myInfo = info.data;
        });
    },
};
</script>

<style scoped>
.friend-card-wrap {
    background: #fafafa;
    width: 100vw;
    min-height: 100vh;
    padding: 55px 0 120px 0;
}

.friend-card-top-buttons-wrap {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}

.friend-card-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 425px;
    background-image: url("../images/friend-card/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
}
</style>
