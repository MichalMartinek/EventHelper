import React from "react";

import { withScriptjs, withGoogleMap,  GoogleMap, Marker} from "react-google-maps";

class Map extends React.Component {
    render() {
        return (
            <GoogleMap

                defaultZoom={8}
                defaultCenter={{lat: this.props.lat, lng: this.props.lng}}>
                <Marker position={{lat: this.props.lat, lng: this.props.lng}}/>
            </GoogleMap>
        )
    }
}


export default withScriptjs(withGoogleMap(Map));