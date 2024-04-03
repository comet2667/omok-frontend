import API from "../../core";


export const insertStone = async(params) => {
    try {
        const { data } = await API.post("/user/insertStone", params);
        return data;
    } catch (e) {
        console.error(e);
    }
};