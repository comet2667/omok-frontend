const { default: axios } = require("axios");
const { default: API } = require("../../core");


export const insertStone = async(params) => {
    try {
        const { data } = await API.post("/api/user/insertStone", params);
        return data;
    } catch (e) {
        console.error(e);
    }
}