import { Anchor, AppShell, Flex, Group } from "@mantine/core";
import Image from "../Image.component"
import { image_logo } from "../../assets/Images";

export default function MainHeader(){
    return (
        <AppShell.Header h='60px' bg='dark' c='white' display='flex'>
            <Flex direction='row' w='100%' h='60px' gap="xl" justify="center" align="center" wrap="wrap">
                <Image width="50" height="50" viewBox="0 0 64 64" image={image_logo} />
                <Anchor className="Label m">Karelia Sport Fest</Anchor>
                <Anchor href="#main" c="white">ГЛАВНАЯ</Anchor>
                <Anchor href="#events" c="white">МЕРОПРИЯТИЯ</Anchor>
                <Anchor href="#store" c="white">МАГАЗИН</Anchor>
                <Anchor href="#contacts" c="white">КОНТАКТЫ</Anchor>
                <Anchor href="#hz" c="white">ЛИЧНЫЙ КАБИНЕТ</Anchor>
            </Flex>
        </AppShell.Header>
    )
}