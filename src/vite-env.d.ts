/// <reference types="vite/client" />

declare module 'notesHomeRemote/NotesHome' {
    const NotesHome: React.ComponentType;
    export default NotesHome;
}

declare module 'loginRemote/Login' {
  const Login: React.ComponentType;
  export default Login;
}

declare module 'loginRemote/loginApiSlice' {
  const loginApiSlice: any;
  export default loginApiSlice;
}
