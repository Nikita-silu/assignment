import { Route } from "../domain/Route";

export interface RouteRepository {
  getAll(): Promise<Route[]>;
  setBaseline(routeId: string): Promise<Route>;
  getBaseline(): Promise<Route | null>;
}
