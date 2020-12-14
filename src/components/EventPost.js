const EventPost = (props) => {
    return (
        <>
        {/* build bootstrap card */}
        <h3>{props.band.name}</h3>
        <p>{props.name}</p>
        </>
    )
}

export default EventPost