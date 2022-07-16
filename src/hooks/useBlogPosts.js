import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestoreDb } from '../firebase.config'

export default function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState({ loading: false, data: [] })

  useEffect(() => {
    setBlogPosts({ loading: true, data: [] })
    const getBlogPosts = async () => {
      // setBlogPosts()
      const data = await getDocs(collection(firestoreDb, 'blogPosts'))
      const posts = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
      setBlogPosts({ loading: false, data: posts })
    }

    getBlogPosts()
  }, [])

  return [blogPosts]
}
