import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppPage from "./pages/AppPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyles";
import { themeSettings } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import {useState} from "react";

function App() {
    const [the, setTheme] = useState("dark");
    const themeCallBackFunction = (th) => {
        setTheme(th);
    };

    return (
        <div>
            <GlobalStyles />
            <ThemeProvider theme={themeSettings[the]}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage callback={themeCallBackFunction} />} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="/chat/:username" element={<AppPage/>} />
                        <Route path="*" element={<HomePage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
