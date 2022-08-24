import { useAuth } from "../context";

function AuthStatus() {
    const auth = useAuth();

    return (
        (!auth.user)
            ? <p>You are not logged in.</p>
            : <p>Welcome {auth.user.loginEmail || auth.user.registerEmail}!</p>
    )
}
export default AuthStatus
