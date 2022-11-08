import { lazy } from "react";

export const EscherMenu = lazy(() => import("./layout/resMenu"));
export const Portfolio = lazy(() => import("./views/portfolio"));
export const Perpetuals = lazy(() => import("./views/perpetuals"));
export const Dashboard = lazy(() => import("./views/dashboard"));
export const Docs = lazy(() => import("./views/docs"));
export const NotFound = lazy(() => import("./views/notFound"));