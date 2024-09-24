import { Flex, Text, Input, Button } from "@mantine/core";
import { IMaskInput } from 'react-imask';
import "../../assets/contactUs.css"

export default function ContactUs(){
    return (
        <Flex direction="column" align="center"  w="33%">
            <Text className="textBold colorHeader">Свяжитесь с нами!</Text>
            <Text>Если у Вас есть вопрос, на который бы Вы хотели получить ответ, то заполните форму! Мы обязательно Вам ответим.</Text>
            <Flex className="inputFields" direction="column" w="100%">
                <Input variant="unstyled" placeholder="Имя" />
                <Input variant="unstyled" placeholder="Email" type="email"/>
                <Input variant="unstyled" placeholder="Телефон" component={IMaskInput} mask="+7 (000) 000-00-00" />
                <Input variant="unstyled" placeholder="Вопрос" />
            </Flex>
            <Button variant="filled" radius="md" color="#1FB3AF" style={{width:"12em", margin: "10px 10px"}}>ОТПРАВИТЬ</Button>
        </Flex>
    )
}