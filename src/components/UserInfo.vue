<template>
    <div class="user-info-wrap">
        <div
            class="user-info-avatar"
            :style="{ backgroundImage: avatar ? `url('data:image/png; base64,${avatar}')` : '#d0d0d0' }"
        ></div>
        <div class="user-info-text-block">
            <h4>{{ name }}</h4>
            <h5>{{ email }}</h5>
            <h5>{{ birthday }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "user-info",
    props: {
        name: {
            type: String,
        },

        email: {
            type: String,
        },

        birthday: {
            type: String,
        },

        avatar: {
            type: String,
        },
    },
};
</script>

<style scoped>
.user-info-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    margin-top: 15px;
}

.user-info-avatar {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0px 20px 30px rgba(44, 44, 44, 0.15));
    border-radius: 20px;
    background-size: cover;
    background-position: center;
}

.user-info-text-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #ffffff;
    z-index: 4;
}
</style>
