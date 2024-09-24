import { useState } from 'react';
import { Flex, Group, Button, Card, Text, Title} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import dayjs from 'dayjs';

export default function EventByDate(){

    const eventsData = {
        "2024-09-16": {
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
          schedule: [
            { time: '10:00', event: 'Открытие фестиваля' },
            { time: '10:30', event: 'Лыжная гонка 3 км - свободный стиль' },
            { time: '11:00', event: 'Лыжная гонка 5 км' },
            { time: '12:30', event: 'Отдых на базе' },
            { time: '13:00', event: 'Лыжная гонка 3 км - другой стиль' },
            { time: '14:30', event: 'Лыжная гонка 3 км' },
          ],
        },
      };


    const [selectedDate, setSelectedDate] = useState(dayjs('2024-09-16'));
    const previousDay = () => {
      setSelectedDate(selectedDate.subtract(1, 'day'));
    };
  
    const nextDay = () => {
      setSelectedDate(selectedDate.add(1, 'day'));
    };
  
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const event = eventsData[formattedDate as keyof typeof eventsData];
  
    return (
		<Group justify="center" w="100vw" grow align="flex-start">
			<Flex direction="column" >
				<Text m="5vw" style={{textAlign:"left"}}>{event? event.description: <>Нет событий на эту дату</>}</Text>
			</Flex>
			<Flex direction="column">
				<Group justify="center" style={{ paddingBottom: 20 }}>
					<Button className="simpleButton" variant="white" leftSection={<IconChevronLeft />} onClick={previousDay}></Button>
					<Title order={2}>{selectedDate.format('DD.MM.YY')}</Title>
					<Button className="simpleButton" variant="white" rightSection={<IconChevronRight />} onClick={nextDay}></Button>
				</Group>
				{event? 
					<>
						{event.schedule.map((item, index) => (
							<Card key={index} withBorder={false} padding="lg" style={{ paddingBottom: 2 }}>
								<Group>
								<Text className="colorHeader" size="xl">{item.time}</Text>
								<Text>{item.event}</Text>
								</Group>
							</Card>
						))}
					</>: 
					<>
						<Card></Card>
					</>
				}
			</Flex>
		</Group>
    );
}