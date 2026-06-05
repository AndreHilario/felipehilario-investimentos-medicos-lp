import { Index } from "../features/Index";
import FinancialForm from "../features/quests/Questionary";
import Success  from "../features/congratulations/Success";
import { Index1 } from "../features/Index1";
import { ModernThirtyOneTruthsPage, ThirtyOneTruthsPage } from "../features/thirtyOneTruths/Index";

export const publicRoutes = [
  {
    path: "/",
    element: <ThirtyOneTruthsPage />,
  },
  {
    path: "/moderno",
    element: <ModernThirtyOneTruthsPage />,
  },
  {
    path: "/medico",
    element: <Index />,
  },
  {
    path: "/1",
    element: <Index1 />,
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
