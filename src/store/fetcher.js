import axios from "../extra/axios";

export const fecther = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get();
    } catch (error) {
      console.log(error);
    }
  };
};
