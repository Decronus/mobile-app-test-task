<template>
    <div class="friend-card-menu-list-wrap">
        <div class="friend-card-menu-list-group">
            <friend-card-menu-item :icon="HeartIcon" />
            <friend-card-menu-item />
        </div>
        <div class="friend-card-menu-list-group"></div>
    </div>
</template>

<script>
import FriendCardMenuItem from "./FriendCardMenuItem.vue";
import HeartIcon from "./icons/HeartIcon.vue";

export default {
    components: { FriendCardMenuItem, HeartIcon },
    name: "friend-card-menu-list",
};
</script>

<style scoped>
.friend-card-menu-list-wrap {
    position: relative;
    width: 100vw;
    margin-top: 41px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.friend-card-menu-list-group {
    width: 100%;
    background: rgb(187, 50, 50);
    border-radius: 15px;
    overflow: hidden;
}

.friend-card-menu-list-group div:not(:last-child) {
    border-bottom: 1px solid #f9f9f9;
}
</style>
