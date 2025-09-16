import { Index } from "../features/Index";
import FinancialForm from "../features/quests/Questionary";


export const publicRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/questionary",
    element: <FinancialForm />,
  },
];
