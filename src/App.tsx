import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Album from './type'
import Pagenation from './Pagenation'

function App() {
  const [albums, setAlbums] = useState<Album[]>([])
  useEffect(() => {
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((alubms)=>setAlbums(alubms))
    }

    getAlbums()
  }, [])

  return (
    <div className='App'>
      <Pagenation albums={albums}/>
    </div>
  )
}

export default App
