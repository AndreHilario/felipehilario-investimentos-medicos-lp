import { Index } from "../features/Index";
import FinancialForm from "../features/quests/Questionary";
import Success  from "../features/congratulations/Success";

export const publicRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/agendamento",
    element: <FinancialForm />,
  },
  {
    path: "/obrigado",
    element: <Success />,
  },
];
