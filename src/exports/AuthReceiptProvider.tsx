import React, { ReactNode, useEffect } from "react";
import { useLoginMutation } from "../services/authApiSlice";
import { LoginFormValue } from "../types/types";

type AuthReceiptProviderProps = {
  children: ReactNode;
};

const AuthReceiptProvider: React.FC<AuthReceiptProviderProps> = ({
  children,
}) => {
  const [login, { data, isSuccess, isLoading}] = useLoginMutation();
  const credentials: LoginFormValue = {
    username: "janierss17",
    password: "123123",
  };

  useEffect(() => {
      login(credentials)
  }, [])

  return <>
    {isSuccess && data?.authReceipt && <div>{children}</div>}
    {isLoading && <div>Fetching Auth Receipt</div>}
  </>

};

export default AuthReceiptProvider;
