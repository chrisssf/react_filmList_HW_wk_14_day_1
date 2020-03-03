import React from 'react'
import './ViewMore.css'

function ViewMore({viewMoreURL}){
    return <a className="viewMore" href={viewMoreURL}>View more upcoming releases</a>
}

export default ViewMore