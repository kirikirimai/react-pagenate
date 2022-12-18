import React from 'react'
import "./AlbumList.css"
import Album from './type'

type Props ={
    albums:Album[]
    currentAlbums:Album[]
}

const AlbumList = (props:Props) => {
    const {albums,currentAlbums} = props
  return (
    <div className='albumGridWrapper'>
        {currentAlbums.map((album,idx)=>(
            <div key={idx} >
                <img src={album.url} />
            </div>
        ))}
    </div>
  )
}

export default AlbumList