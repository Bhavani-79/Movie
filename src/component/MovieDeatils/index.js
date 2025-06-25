import { ListContainer, Image, Title, Rating, Button } from "./styledComponent"
const MovieDetails = (props) => {
    const { details } = props
    const { title, rating, posterPath } = details
    const path = `https://image.tmdb.org/t/p/w500${posterPath}`
    return (
        <ListContainer>
            <Button>
                <Image src={path} />
                <Title>{title}</Title>
                <Rating>Rating: {rating}</Rating>
            </Button>

        </ListContainer>
    )

}


export default MovieDetails