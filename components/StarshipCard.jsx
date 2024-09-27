import Card from 'react-bootstrap/Card'
export default function StarshipCard({props}) {
    //the starship card, uses react-bootstrap for css
    return (
        <Card style={{ backgroundColor:'grey', color:'blue', width: '30rem'}} key={props.name} className='flex-fill'>
            <Card.Body>
                <Card.Title style={{fontSize:"40px", textDecoration: "underline"}}>{props.name}</Card.Title>
                <Card.Text>Model: {props.model}</Card.Text>
                <Card.Text>Manufacturer: {props.manufacturer}</Card.Text>
                <Card.Text>Cost In Credits: {props.cost_in_credits}</Card.Text>
            </Card.Body>
        </Card>
    )
}