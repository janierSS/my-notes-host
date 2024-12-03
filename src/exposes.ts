import appStore from "./store/appStore";
import { useLoginMutation } from "./services/authApiSlice";
import { selectAuthReceipt } from "./store/selectors";

export default {appStore, useLoginMutation, selectAuthReceipt}