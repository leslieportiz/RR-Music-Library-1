import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery(props: { data: any[] }){

    const display = props.data.map((item: any, index: any) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
