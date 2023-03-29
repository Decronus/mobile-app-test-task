<template>
    <div class="friend-card-menu-item-wrap">
        <div>
            <slot></slot>
        </div>

        <div class="friend-card-menu-item-text">
            <h4 class="friend-card-menu-item-name">{{ name }}</h4>
            <h4 class="friend-card-menu-item-add">{{ addText }}</h4>
        </div>

        <div class="friend-card-menu-item-arrow">
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.5 16L8.29289 9.20711C8.68342 8.81658 8.68342 8.18342 8.29289 7.79289L1.5 0.999999"
                    stroke="#ECECEC"
                    stroke-width="2"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "friend-card-menu-item",
    props: {
        name: {
            type: String,
            required: true,
        },
        addText: {
            type: String,
        },
    },
};
</script>

<style>
.friend-card-menu-item-wrap {
    display: grid;
    align-items: center;
    grid-template-columns: 35px 1fr 0fr;
    padding: 0 25px 0 15px;
    height: 55px;
    background: #fdffff;
}

.friend-card-menu-item-content {
    display: flex;
}

.friend-card-menu-item-text {
    display: flex;
    gap: 15px;
}

.friend-card-menu-item-add {
    color: #d0d0d0;
}

.friend-card-menu-item-arrow {
    padding-top: 4px;
}
</style>
