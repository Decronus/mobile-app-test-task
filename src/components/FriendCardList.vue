<template>
    <div class="friend-card-menu-list-wrap">
        <div class="friend-card-menu-list-group">
            <friend-card-menu-item name="Мои желания" :addText="countWishes">
                <svg
                    style="margin-top: 5px"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.82621 9.58708L8.35171 16.3301C8.62182 16.6092 8.75687 16.7488 8.92187 16.7749C8.97364 16.7831 9.02637 16.7831 9.07813 16.7749C9.24313 16.7488 9.37819 16.6092 9.64829 16.3301L16.1738 9.58708C17.8133 7.89289 18.0165 5.27223 16.6576 3.34563L16.1475 2.62247C14.4092 0.157893 10.6437 0.545068 9.44322 3.31181C9.27497 3.6996 8.72503 3.6996 8.55678 3.31181C7.35633 0.545068 3.59083 0.157895 1.85249 2.62247L1.34242 3.34563C-0.0164641 5.27223 0.186668 7.89289 1.82621 9.58708Z"
                        fill="#ECECEC"
                    /></svg
            ></friend-card-menu-item>

            <friend-card-menu-item name="Мои бронирования" :addText="countBooking"></friend-card-menu-item>
        </div>
        <div class="friend-card-menu-list-group">
            <friend-card-menu-item name="Мои друзья" :addText="countFriends"
                ><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.52447 0.0442871C3.65517 0.35764 2.32895 2.0826 2.43217 4.06634C2.48683 5.11665 2.88592 6.00178 3.62683 6.71602C5.4034 8.42868 8.16119 7.89782 9.30602 5.6228C10.1109 4.02324 9.66759 1.92889 8.28691 0.808656C7.49189 0.1636 6.48116 -0.116059 5.52447 0.0442871ZM13.9639 0.579048C13.1196 0.691295 12.3088 1.21009 11.8128 1.95552C10.727 3.58737 11.2394 5.85717 12.9035 6.78672C13.6886 7.22532 14.6491 7.29244 15.459 6.96526C15.9708 6.75853 16.5028 6.34539 16.8251 5.90437C17.3872 5.13512 17.6069 4.16238 17.4297 3.22802C17.1063 1.52321 15.5884 0.363106 13.9639 0.579048ZM13.7343 7.83786C13.0693 7.89693 12.3551 8.09917 11.7688 8.39444C11.4758 8.54202 10.8802 8.93389 10.6668 9.11949L10.5383 9.23119L10.8045 9.4462C11.1139 9.69623 11.6498 10.2754 11.9345 10.6675C12.622 11.6143 13.0428 12.6406 13.2153 13.7909C13.2475 14.0056 13.274 14.2384 13.2741 14.3082L13.2744 14.4351H16.6372H20L19.9783 13.5078C19.9487 12.2461 19.8506 11.7849 19.4239 10.9018C18.6401 9.27937 17.1413 8.17417 15.3241 7.87869C14.9683 7.82087 14.1594 7.80006 13.7343 7.83786ZM5.40005 8.97071C3.38598 9.13605 1.58921 10.3336 0.669925 12.1232C0.19728 13.0434 0 13.9077 0 15.0582V15.5283H6.07106H12.1421L12.1421 15.1671C12.1419 13.2505 11.5383 11.7642 10.2704 10.5586C8.98182 9.33341 7.37269 8.80876 5.40005 8.97071Z"
                        fill="#ECECEC"
                    />
                </svg>
            </friend-card-menu-item>

            <friend-card-menu-item name="Статус" :addText="translateStatus()"
                ><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.780088 7.40657C0 8.26474 0 9.59068 0 12.2426C0 15.7784 0 17.5463 1.04012 18.6905C1.12556 18.7845 1.21544 18.8744 1.30944 18.9599C2.45368 20 4.2216 20 7.75743 20H8.53317C12.069 20 13.8369 20 14.9812 18.9599C15.0752 18.8744 15.165 18.7845 15.2505 18.6905C16.2906 17.5463 16.2906 15.7784 16.2906 12.2426C16.2906 9.59068 16.2906 8.26474 15.5105 7.40657C15.4464 7.33607 15.379 7.26866 15.3085 7.20457C14.4503 6.42448 13.1244 6.42448 10.4725 6.42448H5.81807C3.1662 6.42448 1.84026 6.42448 0.982083 7.20457C0.911582 7.26866 0.844174 7.33607 0.780088 7.40657ZM8.14511 13.4751C8.54005 13.4751 8.86021 13.155 8.86021 12.76C8.86021 12.3651 8.54005 12.0449 8.14511 12.0449C7.75017 12.0449 7.43001 12.3651 7.43001 12.76C7.43001 13.155 7.75017 13.4751 8.14511 13.4751ZM10.8602 12.76C10.8602 13.9065 10.1496 14.887 9.14486 15.2851V17.2851H7.14486V15.2849C6.14036 14.8867 5.43001 13.9063 5.43001 12.76C5.43001 11.2605 6.6456 10.0449 8.14511 10.0449C9.64462 10.0449 10.8602 11.2605 10.8602 12.76Z"
                        fill="#ECECEC"
                    />
                    <path
                        d="M12.218 7.32937V7.32937C12.4934 5.67657 11.7752 4.01568 10.3823 3.08434L10.044 2.85818C8.21172 1.63306 5.78651 1.78406 4.12034 3.22701L3.3214 3.91891"
                        stroke="#ECECEC"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </friend-card-menu-item>

            <friend-card-menu-item name="Помощь/поддержка"></friend-card-menu-item>
        </div>
    </div>
</template>

<script>
import FriendCardMenuItem from "./FriendCardMenuItem.vue";

export default {
    components: { FriendCardMenuItem },

    name: "friend-card-menu-list",

    props: {
        countBooking: {
            type: String,
        },

        countFriends: {
            type: String,
        },

        countWishes: {
            type: String,
        },

        status: {
            type: String,
        },
    },

    methods: {
        translateStatus() {
            switch (this.status) {
                case "OPEN_FOR_ALL":
                    return "Открыто для всех";
                default:
                    "Неизвестный статус";
            }
        },
    },
};
</script>

<style scoped>
.friend-card-menu-list-wrap {
    position: relative;
    margin-top: 41px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 120px;
}

.friend-card-menu-list-group {
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    filter: drop-shadow(0px 20px 120px rgba(35, 35, 35, 0.05));
    backdrop-filter: blur(25px);
}

.friend-card-menu-list-group div:not(:last-child) {
    border-bottom: 1px solid #f9f9f9;
}
</style>
