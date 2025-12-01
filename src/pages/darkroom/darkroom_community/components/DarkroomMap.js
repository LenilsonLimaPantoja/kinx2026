import 'mapbox-gl/dist/mapbox-gl.css';
import { MdFilterCenterFocus } from 'react-icons/md';
import styles from './DarkroomMap.module.scss'
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { createRoot } from 'react-dom/client';
import { RiFireLine, RiStore2Line } from 'react-icons/ri';

mapboxgl.accessToken = "pk.eyJ1IjoibGVuaWxzb25saW1hIiwiYSI6ImNtaW1iMmdldjIwdGMzZW9zdW5jZjV2dHMifQ.QpOMLpyIxiiLY7pXAu1oCw";

const DarkroomMap = () => {
    const locations = [
        { lat: -23.570, lng: -46.678, tipo: 1 },
        { lat: -23.565, lng: -46.690, tipo: 2 },
        { lat: -23.585, lng: -46.660, tipo: 1 },
        { lat: -23.573, lng: -46.672, tipo: 2 },
        { lat: -23.560, lng: -46.675, tipo: 1 },
        { lat: -23.582, lng: -46.683, tipo: 2 },
        { lat: -23.590, lng: -46.670, tipo: 1 },
        { lat: -23.568, lng: -46.662, tipo: 2 },
        { lat: -23.577, lng: -46.695, tipo: 1 },
        { lat: -23.562, lng: -46.688, tipo: 2 },
        { lat: -23.593, lng: -46.655, tipo: 1 },
        { lat: -23.580, lng: -46.645, tipo: 2 },
    ];

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v11",
            center: [-46.676, -23.57], // SP
            zoom: 12
        });

        // Adiciona marcadores
        locations.forEach((loc) => {
            const el = document.createElement("div");
            el.onclick = () => alert(`Ponto clicado, tipo ${loc.tipo}`);
            el.className = "pointer";

            const root = createRoot(el);
            root.render(
                loc.tipo === 1 ?
                    <RiStore2Line size={20} color='#000' />
                    :
                    <RiFireLine size={20} color='#000' />
            );
            new mapboxgl.Marker(el)
                .setLngLat([loc.lng, loc.lat])
                .addTo(map.current);
        });
    }, []);


    return (
        <div className={styles.DarkroomMap}>
            <button className={styles.btnExpandir}>
                <MdFilterCenterFocus />
            </button>
            <div ref={mapContainer} className={styles.mapa} />

            <style>
                {`
                    .pointer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        background: #ccff00;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                    }
                `}
            </style>
        </div>
    )
}
export default DarkroomMap;