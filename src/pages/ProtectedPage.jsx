import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context';

const ProtectedPage = () => {
    let auth = useAuth();
    let navigate = useNavigate()
    return (
        <div>
            <h1>ProtectedPage</h1>

            <button
                onClick={() => {
                    auth.signOut(() => navigate("/"));
                }}
            >
                Sign out
            </button>
        </div>
    )
}

export default ProtectedPage