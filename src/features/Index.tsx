import { MainPage } from "./home/MainPage";
import { ProblemPage } from "./home/ProblemPage";
import { BlockPage } from "./home/BlockPage";
import { Footer } from "../components/Footer";
import { QuestionsFAQPage } from "./home/QuestionsFAQPage";
import { PersonalInfoPage } from "./home/PersonalInfoPage";

export function Index() {
    return (
        <>
            <MainPage />
            <BlockPage />
            <ProblemPage />
            <PersonalInfoPage />
            <QuestionsFAQPage />
            {/* <StartPage /> */}
            <Footer />
        </>
    );
}