import React from 'react' 
import icon from '../images/icon.png'

const styles = {
    link: {
        paddingLeft: '12px',
        color: 'rgba(145, 142, 155, 1)',
    },
    icon: {
        marginTop: '2px',
        marginRight: '5px'
    },
    location: {
        fontWeight: '500'
    },
    fontWeight: {
        fontWeight: '700'
    }
}

export default function Card(props) {
    // console.log(props)
    return (
        // <h1>Hello</h1>
        <div className='card--container'>
            <img className='card--img' alt='card-img' src={props.item.imageUrl} />
            <div className='card--content'>
                <div className='card--header'>
                    <img className='card--icon' style={styles.icon} src={icon} alt='icon'/>
                    <span style={styles.location}>{props.item.location}</span>
                    {/* <p style={styles.location}>Japan</p> */}
                    <a style={styles.link} href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className='card--title'>{props.item.title}</h3>
                <p style={styles.fontWeight}>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}