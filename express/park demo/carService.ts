import { Car } from "./types";

let carExample: Car  = {
  brand: "bmw",
  color: "black",
  id: "1",
}
let car: Car[] = [carExample];

export function getCar() {return car}