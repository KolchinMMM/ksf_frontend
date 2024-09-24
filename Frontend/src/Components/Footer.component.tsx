import { Flex, Anchor, Button, Text } from '@mantine/core';
import { IconBrandVk, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import { image_logo } from '../assets/Images';
import Image from "../Components/Image.component"
import "../assets/footer.css"

export default function Footer() {
    
    return( 
        <Flex className='footerBody' direction="column" align="flex-start" justify="center" gap="xs" bg="black" w="100%">
            <Text size="xl" c="white" style={{textAlign:"left", fontSize:"48px"}}>
                Готовы отправиться <br/>с нами в приключение?
            </Text>

            <Flex className="authorize" mt="md" gap="md" justify="flex-end" align="center" direction="row" wrap="nowrap" w="100%">
                <Button variant="outline" bg="white" c="black" style={{borderColor: "black"}}>ВОЙТИ</Button>
                <Button variant="filled" color="#1FB3AF">РЕГИСТРАЦИЯ</Button>
            </Flex>

            <Flex w="100%" justify="center" align="center" direction="row">
                <Flex w="40%">
                    <Image width="50" height="50" viewBox="0 0 64 64" image={image_logo} />
                </Flex>
                <Flex w="60%" direction="column" align="center" justify="space-between" wrap="wrap" mt="xl">
                    <Flex direction="row" w="80%" style={{textAlign:"left"}}>
                        <Flex direction="column" style={{ flex: 1 }} >
                            <Text className="colorHeader">ИНФОРМАЦИЯ</Text>
                            <Anchor href="#">Мероприятия</Anchor>
                            <Anchor href="#">Программа</Anchor>
                            <Anchor href="#">FAQ</Anchor>
                        </Flex>
                        <Flex direction="column"style={{ flex: 1 }} className="colorHeader">
                            <Text >РЕЗУЛЬТАТЫ</Text>
                            <Anchor href="#">Контакты</Anchor>
                            <Anchor href="#">Магазин</Anchor>
                            <Anchor href="#">Отзывы</Anchor>
                        </Flex>
                    </Flex>

                    <Flex mt="md" justify="flex-end" gap="md" w="100%">

                        <Anchor href="https://vk.com">
                            <IconBrandVk size={24} />
                        </Anchor>
                        <Anchor href="https://instagram.com">
                            <IconBrandInstagram size={24} />
                        </Anchor>
                        <Anchor href="https://telegram.org">
                            <IconBrandFacebook size={24} />
                        </Anchor>
                    </Flex>
                    <Flex justify="center" mt="md">
                        <Anchor href="#" size="xs">Условия использования</Anchor>
                        <Text mx="sm">|</Text>
                        <Anchor href="#" size="xs">Политика конфиденциальности</Anchor>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
      
    
}