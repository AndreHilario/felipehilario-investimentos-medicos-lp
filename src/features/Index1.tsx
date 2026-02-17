import { WorkPage } from "./home1/WorkPage";
import { MainPage } from "./home1/MainPage";
import { StartPage } from "./home1/StartPage";
import { ProblemPage } from "./home1/ProblemPage";
import { BlockPage } from "./home1/BlockPage";
import { Footer } from "../components/Footer";

export function Index1() {
    return (
        <>
            <MainPage />
            <WorkPage />
            <ProblemPage />
            <BlockPage />
            <StartPage />
            <Footer />
        </>
    );
}