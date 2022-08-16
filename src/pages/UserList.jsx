import React from 'react'
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';


export const UserList = () => {

  const [userDetail, loading] = useData()

  if (loading) {
    return <p>loading...</p>
  }



  return (
    <>

      <h3>User List</h3>

      <ul>
        {userDetail.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${id}`} >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};