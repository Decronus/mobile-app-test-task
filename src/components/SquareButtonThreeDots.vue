<template>
    <div class="square-button-wrap">
        <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#FDFFFF" />
            <circle cx="11" cy="2" r="2" fill="#FDFFFF" />
            <circle cx="20" cy="2" r="2" fill="#FDFFFF" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "square-button-three-dots",
};
</script>

<style>
.square-button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: rgba(249, 249, 249, 0.1);
    box-shadow: 0px 4px 70px rgba(35, 35, 35, 0.3);
    backdrop-filter: blur(25px);
    border-radius: 7px;
}
</style>
