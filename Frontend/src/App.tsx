import { AppShell, MantineProvider } from "@mantine/core"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./Pages/Main.page"
import Market from "./Pages/Market.page"
import Events from "./Pages/Events.page"
import Footer from "./Components/Footer.component"
import '@mantine/core/styles.css';
import "./assets/styles.css"

function App() {

	return (
	  <MantineProvider>
		<AppShell header={{ height: 60 }} padding="md" w="100vw">
		  <BrowserRouter>
			<Routes>
			  <Route path="/" element={<MainPage />} />
			  <Route path="/market" element={<Market />} />
			  <Route path="/events" element={<Events />} />
			</Routes>
		  </BrowserRouter>
		  <Footer/>
		</AppShell>
	  </MantineProvider>
	)
  }

export default App
