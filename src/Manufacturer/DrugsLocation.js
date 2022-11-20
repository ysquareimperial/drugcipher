import React from 'react'
import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'react-feather';
import account from '../image/account.png'
import { ZoomControl } from 'react-mapbox-gl/lib';
// import { Marker } from 'react-mapbox-gl/lib';
export default function DrugsLocation() {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoieXNxdWFyZWltcGVyaWFsIiwiYSI6ImNsOThtemc0ZDA5cXgzcXF0ZTRtMTAzb3UifQ.q1j7HpXo902tSPv5LSAN1g'
    });
    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '64vh',
                    width: '100%'
                }}
                center={[12.011171324972095, 8.542933227726762]}
                zoom={[4]}
            >
                {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[9.0820, 8.6753]} />
                </Layer> */}
                <Marker coordinates={[8.542933227726762, 12.011171324972095]}>
                        <MapPin />
                        {/* <img src={account}/> */}
                </Marker>
                <ZoomControl />
            </Map>
        </div>
    )
}
