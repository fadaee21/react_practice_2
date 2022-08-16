import { useEffect, useState } from 'react'
import { fetchUser } from '../api/fetchUser'

const useData = () => {
    const [userDetail, setUserDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const getUser = async () => {
        try {
            const { data } = await fetchUser("/users")
            setUserDetail(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return [userDetail, loading]
}

export default useData

export const useDataDetail = (id) => {
    const [userDetail, setUserDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const getUser = async () => {
        try {
            const { data } = await fetchUser(`/users/${id}`)
            setUserDetail(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
        //eslint-disable-next-line
    }, [])

    return [userDetail, loading]
}

