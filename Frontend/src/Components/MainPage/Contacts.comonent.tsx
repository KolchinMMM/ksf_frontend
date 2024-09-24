import {Flex, Text, Anchor, Group} from "@mantine/core"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {userIcon, zoomLevel } from "../../assets/mapAttributes"
import { IconBrandVk, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';


export default function Contacts(){
    return (
        <Flex id="contacts" justify="center" align="center" direction="column" w="100%">
            <Text className="textBold">КОНТАКТЫ</Text>
            <Flex mt="md" gap="md">
                <Anchor href="https://vk.com">
                    <IconBrandVk size={32} />
                </Anchor>
                <Anchor href="https://instagram.com">
                    <IconBrandInstagram size={32} />
                </Anchor>
                <Anchor href="https://telegram.org">
                    <IconBrandFacebook size={32} />
                </Anchor>
            </Flex>

            <Group grow>
                <Flex className="textBold" direction="column">
                    <Text className="colorHeader">КОНТАКТЫ:</Text>
                    <Text>+7 921 224 02 02</Text>
                    <Text>info@kareliasport.ru</Text>
                </Flex>
                <Flex className="textBold" direction="column">
                    <Text className="colorHeader">АДРЕС:</Text>
                    <Text>185035, Россия, Республика Карелия, </Text>
                    <Text>г. Петрозаводск,ул. Лизы Чайкиной, 14</Text>
                </Flex>
            </Group>
            <Flex h="100%" m="2vw" w="100%">
                <MapContainer attributionControl={false} center={[61.7736, 34.3519]} zoom={zoomLevel} style={{width: "100%", height:"40vh"}}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[61.7736, 34.3519]} icon={userIcon}>
                        <Popup>Мы здесь!</Popup>
                    </Marker>
                </MapContainer>
            </Flex>
        </Flex>
    );
}