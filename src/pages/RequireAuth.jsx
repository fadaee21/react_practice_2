import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";

function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
    return (
        (!auth.user)
            ? <Navigate to="/login" state={{ from: location }} replace />
            : children
    )
}

export default RequireAuth