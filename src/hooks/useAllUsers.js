import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestoreDb } from '../firebase.config'

export default function useAllUsers() {
  const [users, setUsers] = useState()

  useEffect(() => {
    setUsers({ loading: true, data: [] })

    const getUsers = async () => {
      const response = await getDocs(collection(firestoreDb, 'users'))
      const data = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
      setUsers({ loading: false, data })
    }

    getUsers()
  }, [])
  return [users]
}

export const addUser = async (user) => {
  await addDoc(collection(firestoreDb, 'users'), user)
  //   console.log(response)
}
