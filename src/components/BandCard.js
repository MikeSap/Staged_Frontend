const BandCard = (props) => {
    return (        
        <>
        {/* build bootstrap card */}
        {props ? <div>
            <h3>{props.name}</h3> <p>{props.bio}</p>
            </div>
        : null}
        </>
      
    )
}

export default BandCard