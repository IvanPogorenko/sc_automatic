function ServiceCard(props) {
    return(
        <div className="Card">
            <img alt="Service" src={props.picture}></img>
            <p>{props.name}</p>
            <div className="CardDescription">
                <div>
                    <h>{props.name}</h>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
export default ServiceCard;