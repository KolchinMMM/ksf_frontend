import {AppShell, Flex} from "@mantine/core"
import Subheader from "../Components/MainPage/Subheader.component"
import MainHeader from "../Components/MainPage/MainHeader.component"
import MainEvents from "../Components/MainPage/MainEvents.component"
import EventByDate from "../Components/MainPage/EventByDate.component"
import Map from "../Components/MainPage/Map.component"
import ShopCategories from "../Components/MainPage/ShopCategories.component"
import Contacts from "../Components/MainPage/Contacts.comonent"
import FAQ from "../Components/MainPage/FAQ.comonents"
import ContactUs from "../Components/MainPage/ContactUs.component"


export default function MainPage(){
    return (
        <>
            <MainHeader/>
            <AppShell.Main style={{padding:0}}>
            
                <Flex className="myMainContainer"  gap="md" justify="center" align="center" direction="column" wrap="nowrap">
                    <Subheader />
                    
                    <MainEvents/>
                    
                    <EventByDate/>

                    <Map/>

                    <ShopCategories/>

                    <Contacts/>

                    <ContactUs/>

                    <FAQ/>

                </Flex>
                
            </AppShell.Main>
            
        </>
    )
}