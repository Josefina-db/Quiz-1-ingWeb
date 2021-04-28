export interface Usuarios {
    nombre:string;
    apellido:string;
    genero:number; 
    pais:string;
    ciudad:string;
}

//modelo de prueba
export const ListaUsuarios:Array<Usuarios>=[
    {
        nombre:"josefina",
        apellido:"castellon",
        genero:1,
        pais: "Chile",
        ciudad: "Valparaiso"
    },

    {
        nombre:"Pedro",
        apellido:"gales",
        genero:2,
        pais: "Mexico",
        ciudad: "Monterrey"
    }
];
