import React, {Fragment} from 'react'
import Film from './Film'

function FilmList({films}){

    const filmComponents = films.map(film => {
    return <Film key={film.id} url={film.url}>{film.name}</Film>
    })


    return (
        <Fragment>
            <ul>
                {filmComponents}
            </ul>
        </Fragment>
    )
}

export default FilmList
