import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Inscripciones } from "./models/index";



@Injectable()


export class InscripcionesService {

   inscripciones: Inscripciones[] = [
    {
        id: 1,
        firstName: "Alejandro",
        lastName: "García",
        email: "alejandro_garcia@example.com",
        password: "123456789",
        curso:"Photoshop & Ilustrator",
        hours: "12:00 - 16:00 hs",
        date: "Lunes & Miercoles",
        role: "Estudiante",
        dni: "98765432100",
        birth: "07/15/1992",
      },
      {
        id: 2,
        firstName: "Valentina",
        lastName: "Rodriguez",
        email: "valentina_rodriguez@example.com",
        password: "123456789",
        curso: "Dibujo Digital ",
        hours: "12:00 - 16:00 hs",
        date: "Martes & Jueves",
        role: "Estudiante",
        dni: "12345678901",
        birth: "04/23/1987",
      },
      {
        id: 3,
        firstName: "Sebastian",
        lastName: "Perez",
        email: "sebastian_perez@example.com",
        password: "123456789",
         curso: "Introdución al Diseño Grafico",
        hours: "20:00 - 22:00 hs",
        date: "Lunes & Miercoles",
        role: "Estudiante",
        dni: "87654321098",
        birth: "10/06/2005",
      },
      {
        id: 4,
        firstName: "Sophia",
        lastName: "Rodriguez",
        email: "sophia_rodriguez@example.com",
        password: "pass123",
        curso:"Photoshop & Ilustrator",
        hours: "12:00 - 16:00 hs",
        date: "Lunes & Miercoles",
        role: "Profesor",
        dni: "23456789012",
        birth: "02/14/1979",
      },
      {
        id: 5,
        firstName: "Daniel",
        lastName: "Hernandez",
        email: "daniel_hernandez@example.com",
        password: "d@ni3lP@ss",
        curso:"Photoshop & Ilustrator",
        hours: "12:00 - 16:00 hs",
        date: "Lunes & Miercoles",
        role: "Estudiante",
        dni: "56789012345",
        birth: "09/30/1998",
      },
      {
        id: 6,
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily_johnson@example.com",
        password: "password123!",
        curso: "Dibujo Digital ",
        hours: "12:00 - 16:00 hs",
        date: "Martes & Jueves",
        role: "Estudiante",
        dni: "34567890123",
        birth: "05/12/2011",
      },
      {
        id: 7,
        firstName: "Juan",
        lastName: "Ramirez",
        email: "juan_ramirez@example.com",
        password: "ju@nR@mir3z",
        curso: "Dibujo Digital ",
        hours: "12:00 - 16:00 hs",
        date: "Martes & Jueves",
        role: "Profesor",
        dni: "89012345678",
        birth: "11/25/1984",
      },
      {
        id: 8,
        firstName: "Ava",
        lastName: "Taylor",
        email: "ava_taylor@example.com",
        password: "taylorAva567",
        curso: "Introdución al Diseño Grafico",
        hours: "20:00 - 22:00 hs",
        date: "Lunes & Miercoles",
        role: "Estudiante",
        dni: "45678901234",
        birth: "08/03/2000",
      },
      {
        id: 9,
        firstName: "Eduardo",
        lastName: "Gomez",
        email: "eduardo_gomez@example.com",
        password: "edu1234",
        curso: "Introdución al Diseño Grafico",
        hours: "20:00 - 22:00 hs",
        date: "Lunes & Miercoles",
        role: "Profesor",
        dni: "10987654321",
        birth: "03/18/1995",
      },
      {
        id: 10,
        firstName: "Mia",
        lastName: "Martinez",
        email: "mia_martinez@example.com",
        password: "martinezMia",
        curso: "Introdución al Diseño Grafico",
        hours: "20:00 - 22:00 hs",
        date: "Lunes & Miercoles",
        role: "Estudiante",
        dni: "54321098765",
        birth: "06/07/1972",
      },
  ];
  
    getInscripciones(){
        return of(this.inscripciones);
    }
}
