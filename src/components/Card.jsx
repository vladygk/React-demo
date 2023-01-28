import "./Card.scss"

export default function Card(props){
    return (<div className="card--container">
    <img src={props.imgUrl} alt="" />
    <p>{props.name}</p>
    </div>);
}