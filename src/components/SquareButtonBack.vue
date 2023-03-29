<template>
    <div class="square-button-wrap">
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.5 1L1.70711 7.79289C1.31658 8.18342 1.31658 8.81658 1.70711 9.20711L8.5 16"
                stroke="#FDFFFF"
                stroke-width="2"
                stroke-linejoin="round"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: "square-button-back",
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
