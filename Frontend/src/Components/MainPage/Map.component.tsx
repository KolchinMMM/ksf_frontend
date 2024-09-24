import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {userIcon, zoomLevel } from "../../assets/mapAttributes"
import { Flex } from "@mantine/core";

interface LocationMarkerProps {
    position: [number, number] | null;
}


const LocationMarker: React.FC<LocationMarkerProps> = ({ position }) => {
    const map = useMap();
    useEffect(() => {
    if (position) {
        map.setView(position, zoomLevel); 
    }
    }, [position, map]);

    return position ? (
    <Marker position={position} icon={userIcon}>
        <Popup>Вы здесь</Popup>
    </Marker>
    ) : null;
};

export default function Map() {
    
    const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (pos) => {
        setUserPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
        console.error("Не удалось получить геопозицию");
        }
    );
    }, []);

    return (
        <Flex h="100%" m="2vw" w="100%">
            <MapContainer attributionControl={false} center={[61.7736, 34.3519]} zoom={zoomLevel} style={{width: "100%", height:"40vh", margin:0}}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker position={userPosition} />
            </MapContainer>
        </Flex>
    );
};

