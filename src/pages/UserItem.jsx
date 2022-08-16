import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataDetail } from "../hooks/useData";

export const UserItem = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    console.log(id)
    const [userDetail, loading] = useDataDetail(id)
    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div>
            <h2>Users</h2>
            <h3>email: {userDetail.email}</h3>
            <button className="btn btn-success" onClick={() => navigate(-1)}>Back to Users</button>
        </div>
    );
};