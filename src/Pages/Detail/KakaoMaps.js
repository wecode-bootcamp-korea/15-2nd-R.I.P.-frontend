import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

function MapContainer({ address }) {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.50650190033401, 127.05360560342068),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const changeLatLng = new kakao.maps.services.Places();
    changeLatLng.keywordSearch(address, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let transformAddress = new kakao.maps.LatLng(data[0].y, data[0].x);
        let marker = new kakao.maps.Marker({
          map: map,
          position: transformAddress,
        });

        map.setCenter(transformAddress);
      }
    }
  }, [address]);

  return (
    <>
      <FripMaps id="myMap"></FripMaps>
    </>
  );
}

export default MapContainer;

const FripMaps = styled.div`
  width: 100%;
  height: 100%;
`;
