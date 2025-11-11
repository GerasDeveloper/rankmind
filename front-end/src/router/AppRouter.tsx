import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Ranking from "../pages/Ranking";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import Relatorios from "../pages/Relatorios";
import HistoricoEscolar from "../pages/HistoricoEscolar";
import CadastroAluno from "../pages/CadastroAluno";
import Login from "../pages/Login";

function AppContent() {
    const location = useLocation();
    const semLayout = location.pathname.startsWith("/Dashboard/");

    return (
        <>
            {semLayout ? (
                <Routes>
                    <Route path="/Dashboard/:curso" element={<Dashboard />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<Layout />}>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Ranking" element={<Ranking />} />
                        <Route path="/Relatorios" element={<Relatorios />} />
                        <Route path="/Historico" element={<HistoricoEscolar />} />
                        <Route path="/Dashboard/:curso" element={<Dashboard />} />
                        <Route path="/cadastro" element={<CadastroAluno />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
