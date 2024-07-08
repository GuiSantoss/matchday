import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportsPage from "../pages/reports/ReportsPages";
import TeamListPage from "../pages/team/TeamListPage";
import AddTeamPage from "../pages/team/AddTeamPage";
import EditTeamPage from "../pages/team/EditTeamPage";
import MatchListPage from "../pages/match/MatchListPage";
import AddMatchPage from "../pages/match/AddMatchPage";
import EditMatchPage from "../pages/match/EditMatchPage";

export default function AllRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReportsPage/>} />
                <Route path="/reports" element={<ReportsPage/>} />

                <Route path="/team/list" element={<TeamListPage/>} />
                <Route path="/team/add" element={<AddTeamPage/>} />
                <Route path="/team/edit" element={<EditTeamPage/>} />


                <Route path="/match/list" element={<MatchListPage/>} />
                <Route path="/match/add" element={<AddMatchPage/>} />
                <Route path="/match/edit" element={<EditMatchPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}