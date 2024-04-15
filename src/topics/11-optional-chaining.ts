export interface Passenger {
  name: string;
  children?: string[];
}
// con CONTROL+. podemos agregar las propiedades faltantes
const passenger1: Passenger = {
  name: "Fernando",
};

const passenger2: Passenger = {
  name: "Melisa",
  children: ["Natalia", "Elizabeth"],
};
// CONTRL+ESPACIO se puede ver mas informacion del objeto
const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
  
//   if( !passenger.children ){ return 0 }
//   const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

printChildren(passenger1);
