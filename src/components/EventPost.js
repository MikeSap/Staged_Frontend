const EventPost = (props) => {
    return (        
        <>
        {/* build bootstrap card */}
        {props ? <div>
            <h3>{props.band.name}</h3> <p>{props.name}</p>
            </div>
        : null}
        </>
      
    )
}

export default EventPost