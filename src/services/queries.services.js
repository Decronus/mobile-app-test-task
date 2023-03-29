import axiosInstance from "@/axios";

class Queries {
    getMyInfo() {
        return axiosInstance.get("users/i/info/my");
    }
}

export default new Queries();
