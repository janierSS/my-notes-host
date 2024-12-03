export type LoginFormValue = {
  username: string;
  password: string;
};

export type LoginResponse = { 
    message: string; 
    authReceipt: string;
};
