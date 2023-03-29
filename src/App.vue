<template>
    <friend-card />
</template>

<script>
import FriendCard from "./pages/FriendCard.vue";

export default {
    name: "App",
    components: { FriendCard },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

h4 {
    font-size: 16px;
    font-weight: 500;
}

h5 {
    font-size: 12px;
    font-weight: 400;
}

#app {
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c2c2c;
}
</style>
