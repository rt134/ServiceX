
import mapboxgl from 'mapbox-gl';
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import LocDetails from './LocDetails';
import { Button } from '@material-ui/core';
import "./Map.css"
function Map() {
  let [viewport, setViewport] = useState({
    laititude: 37.7577,
    longitude: -122.4376,
    zoom: 0,
    width: window.innerWidth,
    height: window.innerHeight
  })
  
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <>
    <Button className="SearchByCar" href="/cars" className="bt1" variant="contained" color="primary">Search By Car</Button>
    
    <div className="map">
        
        <ReactMapGL
        
        mapboxApiAccessToken={"pk.eyJ1Ijoia2FrYXNoaTI1MTAiLCJhIjoiY2ttb2xld2NxMGkzdzJwbGhpcXNkMmptMiJ9.--t9iJ_IT1Vz6XLBnNcVhA"}
        {...viewport} onViewportChange={(newView) => setViewport(newView)}>
        <Marker latitude={25.3176} longitude={82.9739} offsetLeft={-20} offsetTop={-10}>
          <img src="/images/car.png" width={50} height={50} />
        </Marker>

        <Marker latitude={13.0827} longitude={80.2707} offsetLeft={-20} offsetTop={-10}>
          {/* <img src="/images/car.png" width={50} height={50} /> */}

          <div
            style={{
              // border: "thin solid black",
              position: "relative",
              height: "20px",
              width: "20px",
            }}
            onClick={() => {
              console.log("Popup")
              // console.log(cluster.properties);
              setPopupInfo({
                // ...cluster.properties,
                latitude: 13.0827,
                longitude: 80.2707,
              });
            }}>
            <img src="/images/car.png" width={50} height={50} />
          </div>
        </Marker>
        
        <Marker latitude={21.1702} longitude={72.8311} offsetLeft={-20} offsetTop={-10}>
          <img src="/images/car.png" width={50} height={50} />
        </Marker>
        {popupInfo && (
          <Popup
            tipSize={3}
            anchor="bottom"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
            >
            <LocDetails type="Car Booking" img="/images/car1.jpg" name="Rishabh" price="200$"/>
          </Popup>
        )}

      </ReactMapGL>
    </div>
    <script>
          
            mapboxgl.accessToken = {'pk.eyJ1Ijoia2FrYXNoaTI1MTAiLCJhIjoiY2ttb2xld2NxMGkzdzJwbGhpcXNkMmptMiJ9.--t9iJ_IT1Vz6XLBnNcVhA'};
            var map = new mapboxgl.Map(
            container: "map", // container id
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-96, 37.8], // starting position
            zoom: 3 // starting zoom
            );
            map.addControl(
              new mapboxgl.GeolocateControl(
              positionOptions: 
              
                enableHighAccuracy: true
              ,
              trackUserLocation: true
                )
              )
        </script>
    </>
  )
}

export default Map
