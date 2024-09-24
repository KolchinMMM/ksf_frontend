import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, Text } from "@mantine/core"


interface Item {
    header: string;
    description: string;
    dateBegin: string; 
    dateEnd: string;   
    imgSrc: string;
}

const events: Item[] = [
    {
        header: "Conkurs fontanu track 01",
        description: "Первый элемент",
        dateBegin: "01.02.2024",
        dateEnd: "04.02.2024",
        imgSrc: "https://example.com/image1.jpg",
    },
    {
        header: "Conkurs fontanu track 02",
        description: "Первый элемент",
        dateBegin: "01.02.2024",
        dateEnd: "04.02.2024",
        imgSrc: "https://example.com/image1.jpg",
    },
    {
        header: "Conkurs fontanu track 03",
        description: "Первый элемент",
        dateBegin: "01.02.2024",
        dateEnd: "04.02.2024",
        imgSrc: "https://example.com/image1.jpg",
    },
    {
        header: "Conkurs fontanu track 04",
        description: "Первый элемент",
        dateBegin: "01.02.2024",
        dateEnd: "04.02.2024",
        imgSrc: "https://example.com/image1.jpg",
    },
];



export default function MainEvents(){
    return (
        <Flex id="events" w="100%" direction="column" p="0px 10%">
            <Flex justify="center" align="center" direction="row" wrap="wrap" w="100%">
                {events.map((item)=>(
                    <Flex w="50%" direction="column" p="20px">
                        <Flex h='150px' direction="row" align="center" style={{border:"1px solid black", borderRadius:"0px 50px 0px 50px", alignContent:"space-between", padding: "0px 10%", textAlign:"left"}}>
                            <Flex w="100%" direction="column">
                                <Text w="100%">{item.header}</Text>
                                <Text w="100%">{item.dateBegin} - {item.dateEnd}</Text>
                            </Flex>
                            <Text style={{ flex: 1, width:"10px" }}>{">"}</Text>
                        </Flex>
                    </Flex>
                ))}

            </Flex>
            <Link to="/events" >
                Посмотреть другие мероприятия
            </Link>
        </Flex>
    )
}