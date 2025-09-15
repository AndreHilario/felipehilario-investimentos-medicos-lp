import { WorkPage } from "./home/WorkPage";
import { MainPage } from "./home/MainPage";
import { StartPage } from "./home/StartPage";
import { ProblemPage } from "./home/ProblemPage";

export function Index() {
    return (
        <>
            <MainPage />
            <WorkPage />
            <ProblemPage />
            <StartPage />
        </>
    );
}