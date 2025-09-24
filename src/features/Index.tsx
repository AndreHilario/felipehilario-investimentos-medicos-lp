import { WorkPage } from "./home/WorkPage";
import { MainPage } from "./home/MainPage";
import { StartPage } from "./home/StartPage";
import { ProblemPage } from "./home/ProblemPage";
import { BlockPage } from "./home/BlockPage";
import { Footer } from "../components/Footer";

export function Index() {
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