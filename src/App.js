import { useEffect } from "react";
import { Header } from "./components/header";
import Sidebar from "./components/sidebar";




function App() {
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.style.fontFamily = 'Plus Jakarta Sans'; // replace with your desired font family
  }, []);
  return(
    <>
    <Header/>
    <Sidebar/>
    </>
  );
};

export default App;
