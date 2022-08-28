import { GET_HOMEPAGE_FAILURE, GET_HOMEPAGE_SUCCESS, GET_HOMEPAGE_REQUEST } from "./actionType";
import axios from "axios";

export const getHomePageData = (parms) => (dispatch) => {
  dispatch({ type:GET_HOMEPAGE_REQUEST });
   axios
    .get("https://lovoda-backend-api.herokuapp.com/api/HomePageData", parms) 
    .then((res) =>
      dispatch({ type: GET_HOMEPAGE_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: GET_HOMEPAGE_FAILURE, payload: err })
    );
};
