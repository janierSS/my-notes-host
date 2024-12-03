import { appState } from "./appStore";

export const selectUserId = (state: appState) => state.auth.userId