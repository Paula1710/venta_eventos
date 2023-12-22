import {useEffect, useState} from "react";
import Evento_1 from "../assets/evento_1.jpg";
import Evento_2 from "../assets/evento_2.jpg";
import Evento_3 from "../assets/evento_3.jpg";
import Evento_4 from "../assets/evento_4.jpg";
import Evento_5 from "../assets/evento_5.jpg";
import Evento_6 from "../assets/evento_6.jpg";
import Evento_7 from "../assets/evento_7.webp";
import Evento_8 from "../assets/evento_8.jpg";
import Evento_9 from "../assets/evento_9.jpg";
import Evento_10 from "../assets/evento_10.jpeg";
import Evento_11 from "../assets/evento_11.jpeg";
import Evento_12 from "../assets/evento_12.jpg";
import Evento_13 from "../assets/evento_13.jpg";
import Evento_14 from "../assets/evento_14.jpg";
import Evento_15 from "../assets/evento_15.png";
import Evento_16 from "../assets/evento_16.png";
import Evento_17 from "../assets/evento_17.png";
import Evento_18 from "../assets/evento_18.webp";
import Evento_19 from "../assets/evento_19.jpg";
import Evento_20 from "../assets/evento_20.jpg";
import Evento_21 from "../assets/evento_21.jpg";
import Evento_22 from "../assets/evento_22.jpg";
import Evento_23 from "../assets/evento_23.jpg";
import Evento_24 from "../assets/evento_24.webp";
import Evento_25 from "../assets/evento_25.jpg";
import Evento_26 from "../assets/evento_26.jpg";
import Evento_27 from "../assets/evento_27.webp";
import Evento_28 from "../assets/evento_28.jpg";
import Evento_29 from "../assets/evento_29.jpg";
import Evento_30 from "../assets/evento_30.webp";
import Evento_31 from "../assets/evento_31.jpeg";
import Evento_32 from "../assets/evento_32.webp";
import Evento_33 from "../assets/evento_33.jpeg";
import Evento_34 from "../assets/evento_34.jpg";
import Evento_35 from "../assets/evento_35.jpg";
import Evento_36 from "../assets/evento_36.jpg";
import Evento_37 from "../assets/evento_37.jpg";
import Evento_38 from "../assets/evento_38.jpg";
import Evento_39 from "../assets/evento_39.jpg";
import Evento_40 from "../assets/evento_40.jpeg";
import Evento_41 from "../assets/evento_41.jpeg";
import Evento_42 from "../assets/evento_42.jpg";
import Evento_43 from "../assets/evento_43.png";
import Evento_44 from "../assets/evento_44.jpg";
import Evento_45 from "../assets/evento_45.jpg";



export const useEvents = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setEvents([
                {id: "1", nombre:"Concierto Bad Gyal", empresa:"WiZink", fecha_hora: "6 de Abril 2024, 20:00",ubicacion:"WiZink Center",precio:42 + " euros", descripcion:"Concierto para mayores de 16 años.",imagen:<img src={Evento_1} alt={"icon_evento1"} height={120}/>},
                {id: "2", nombre:"Cine Venom", empresa:"Cinesa", fecha_hora: "25 de Diciembre 2023, 20:00",ubicacion:"Cinesa Luxe Oasiz",precio:7.5+" euros", descripcion:"Película recomendada para mayores de 12 años.", imagen:<img src={Evento_2} alt={"icon_evento2"} height={120}/>},
                {id: "3", nombre:"Cine Champions", empresa:"Cinesa", fecha_hora: "12 de Enero 2024, 19:00",ubicacion:"Cinesa Luxe Oasiz",precio:7.5+" euros", descripcion:"Película para todos los públicos.", imagen:<img src={Evento_3} alt={"icon_evento3"} height={120}/>},
                {id: "4", nombre:"Cine La navidad en sus manos", empresa:"OCINE", fecha_hora: "22 de Diciembre 2023, 17:00",ubicacion:"OCINE Quadernillos Alcalá",precio:6+" euros", descripcion:"Película infantil.",imagen:<img src={Evento_4} alt={"icon_evento4"} height={120}/>},
                {id: "5", nombre:"Cine Ocho apellidos marroquis", empresa:"OCINE", fecha_hora: "6 de Enero 2024, 21:00",ubicacion:"OCINE Quadernillos Alcalá",precio:6+" euros", descripcion:"Película para todos los públicos.", imagen:<img src={Evento_5} alt={"icon_evento5"} height={120}/>},
                {id: "6", nombre:"Cine Wonka", empresa:"OCINE", fecha_hora: "22 de Diciembre 2023, 18:00",ubicacion:"OCINE Quadernillos Alcalá",precio:6+" euros", descripcion:"Película para todos los públicos.", imagen:<img src={Evento_6} alt={"icon_evento6"} height={120}/>},
                {id: "7", nombre:"Cine Napoleon", empresa:"Yelmo", fecha_hora: "20 de Diciembre 2023, 19:30",ubicacion:"Yelmo Plenilunio",precio:8+" euros", descripcion:"Película recomendada para mayores de 12 años.",imagen:<img src={Evento_7} alt={"icon_evento7"} height={120}/>},
                {id: "8", nombre:"Concierto Luis Fonsi", empresa:"WiZink", fecha_hora: "14 de Febrero 2024, 20:00",ubicacion:"WiZink Center",precio:30 + " euros", descripcion:"Concierto para todos los públicos.",imagen:<img src={Evento_8} alt={"icon_evento8"} height={120}/>},
                {id: "9", nombre:"Concierto Manuel Turizo", empresa:"WiZink", fecha_hora: "17 de Diciembre 2023, 22:00",ubicacion:"WiZink Center",precio:40 + " euros", descripcion:"Concierto para todos los públicos.", imagen:<img src={Evento_9} alt={"icon_evento9"} height={120}/>},
                {id: "10", nombre:"Concierto De la ossa", empresa:"WiZink", fecha_hora: "12 de Abril 2024, 20:00",ubicacion:"WiZink Center",precio:25 + " euros", descripcion:"Concierto para mayores de 16 años.", imagen:<img src={Evento_10} alt={"icon_evento10"} height={120}/>},
                {id: "11", nombre:"Concierto Sebastian Yatra", empresa:"WiZink", fecha_hora: "10 de Mayo 2024, 20:00",ubicacion:"WiZink Center",precio:50 + " euros", descripcion:"Concierto para todos los públicos.", imagen:<img src={Evento_11} alt={"icon_evento11"} height={120}/>},
                {id: "12", nombre:"Concierto Los Rebujitos", empresa:"Produciones SL", fecha_hora: "15 de Abril 2024, 19:00",ubicacion:"Estadio Civitas Metropolitano",precio:30 + " euros", descripcion:"Concierto para todos los públicos.",imagen:<img src={Evento_12} alt={"icon_evento12"} height={120}/>},
                {id: "13", nombre:"Concierto Morat", empresa:"Producciones SL", fecha_hora: "10 de Febrero 2024, 20:00",ubicacion:"Estadio Civitas Metropolitano",precio:30 + " euros", descripcion:"Concierto para todos los públicos.", imagen:<img src={Evento_13} alt={"icon_evento13"} height={120}/>},
                {id: "14", nombre:"Concierto Isabel Pantoja", empresa:"Produccines SL", fecha_hora: "12 de Junio 2024, 20:00",ubicacion:"Estadio Santiago Benabeu",precio:42 + " euros", descripcion:"Concierto para todos los públicos.", imagen:<img src={Evento_14} alt={"icon_evento14"} height={120}/>},
                {id: "15", nombre:"Discoteca Fabrik", empresa:"Fabrik", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"Fabrik Club Madrid",precio:25 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_15} alt={"icon_evento15"} height={120}/>},
                {id: "16", nombre:"Discoteca MOM", empresa:"MON", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"Sala de conciertos MON Madrid",precio:25 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_16} alt={"icon_evento16"} height={120}/>},
                {id: "17", nombre:"Discoteca Oh My Club", empresa:"Oh My Club", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"Discoteca Oh My Club Madrid",precio:30 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_17} alt={"icon_evento17"} height={120}/>},
                {id: "18", nombre:"Discoteca Panda Club", empresa:"Panda Club", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"Club Nocturno Panda Madrid",precio:22 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_18} alt={"icon_evento18"} height={120}/>},
                {id: "19", nombre:"Discoteca Pacha", empresa:"Pacha", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"Pacha Club Ibiza",precio:50 + " euros", descripcion:"Fiesta para mayores de 20 años.",imagen:<img src={Evento_19} alt={"icon_evento19"} height={120}/>},
                {id: "20", nombre:"Discoteca TOY ROOM", empresa:"TOY ROOM", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"TOY ROOM Club Madrid",precio:27 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_20} alt={"icon_evento20"} height={120}/>},
                {id: "21", nombre:"Teatro Don Juan Tenorio", empresa:"El Corte Inglés", fecha_hora: "28 de Diciembre 2023, 18:00",ubicacion:"Teatro La Latina",precio:15+ " euros", descripcion:"Teatro para todos los públicos.", imagen:<img src={Evento_21} alt={"icon_evento21"} height={120}/>},
                {id: "22", nombre:"Teatro GODOT", empresa:"Taquillas", fecha_hora: "12 de Enero 2024, 20:00",ubicacion:"Teatro La Latina",precio:12.5 + " euros", descripcion:"Teatro recomendado para mayores de 12 años.", imagen:<img src={Evento_22} alt={"icon_evento22"} height={120}/>},
                {id: "23", nombre:"Teatro Las mil y una noches", empresa:"Atrapalo", fecha_hora: "15 de Mayo 2024, 20:30",ubicacion:"Teatro La Latina",precio:10+ " euros", descripcion:"Teatro para todos los públicos.", imagen:<img src={Evento_23} alt={"icon_evento23"} height={120}/>},
                {id: "24", nombre:"Musical Mamma Mia", empresa:"Atrapalo", fecha_hora: "24 de Junio 2024, 21:00",ubicacion:"Teatro La Latina",precio:20+ " euros", descripcion:"Musical para todos los públicos.", imagen:<img src={Evento_24} alt={"icon_evento24"} height={120}/>},
                {id: "25", nombre:"Teatro El Mensaje", empresa:"El Corte Inglés", fecha_hora: "28 de Enero 2024, 18:00",ubicacion:"Teatro Lara",precio:12.5+ " euros", descripcion:"Teatro para todos los públicos.",imagen:<img src={Evento_25} alt={"icon_evento25"} height={120}/>},
                {id: "26", nombre:"Musical Matilda", empresa:"Taquillas", fecha_hora: "1 de Marzo 2024, 18:00",ubicacion:"Teatro Lope de Vega",precio:30 + " euros", descripcion:"Musical para todos los públicos.",imagen:<img src={Evento_26} alt={"icon_evento26"} height={120}/>},
                {id: "27", nombre:"Musical Aladdin", empresa:"Taquillas", fecha_hora: "24 de Marzo 2024, 17:00",ubicacion:"Teatro Lope de Vega",precio:30+ " euros", descripcion:"Musical para todos los públicos.", imagen:<img src={Evento_27} alt={"icon_evento27"} height={120}/>},
                {id: "28", nombre:"Musical El Rey Leon", empresa:"Disney", fecha_hora: "2 de Enero 2024, 20:00",ubicacion:"Teatro Lope de Vega",precio:50+ " euros", descripcion:"Musical para todos los públicos.",imagen:<img src={Evento_28} alt={"icon_evento28"} height={120}/>},
                {id: "29", nombre:"Musical Romeo Y Julieta", empresa:"Comunidad de Madrid", fecha_hora: "4 de Abril 2024, 20:00",ubicacion:"Teatro Lope de Vega",precio:35+ " euros", descripcion:"Musical para todos los públicos.", imagen:<img src={Evento_29} alt={"icon_evento29"} height={120}/>},
                {id: "30", nombre:"Festival MAD COOL", empresa:"MAD COOL", fecha_hora: "10 de Julio 2024, 15:00",ubicacion:"IFEMA Madrid",precio:60+ " euros", descripcion:"Festival para mayores de 16 años.", imagen:<img src={Evento_30} alt={"icon_evento30"} height={120}/>},
                {id: "31", nombre:"Festival Interestelar", empresa:"Interestelar", fecha_hora: "15 de Junio 2024, 15:00",ubicacion:"Estadio Ramón Sánchez-Pizjuán Sevilla",precio:55+ " euros", descripcion:"Festival para mayores de 16 años.", imagen:<img src={Evento_31} alt={"icon_evento31"} height={120}/>},
                {id: "32", nombre:"Festival SAN SAN", empresa:"SAN SAN", fecha_hora: "28 de Marzo 2024, 16:00",ubicacion:"Recinto ferial Benicàssim",precio:45+ " euros", descripcion:"Festival para mayores de 16 años.", imagen:<img src={Evento_32} alt={"icon_evento32"} height={120}/>},
                {id: "33", nombre:"Festival IRUÑA ROCK", empresa:"MARTXOAK", fecha_hora: "2 de Marzo 2024, 17:00",ubicacion:"Navarra Arena",precio:45+ " euros", descripcion:"Festival para mayores de 16 años.", imagen:<img src={Evento_33} alt={"icon_evento33"} height={120}/>},
                {id: "34", nombre:"Teatro Shakespeare en 97 minutos", empresa:"Beon", fecha_hora: "1 de Abril 2024, 20:00",ubicacion:"Teatro Lara",precio:20+ " euros", descripcion:"Teatro recomendado para mayores de 12 años.", imagen:<img src={Evento_34} alt={"icon_evento34"} height={120}/>},
                {id: "35", nombre:"Exposicion Brilla Madrid Zoo", empresa:"El Corte Inglés", fecha_hora: "20 de Diciembre 2023, 18:30",ubicacion:"IFEMA Madrid",precio:7+ " euros", descripcion:"Exposición infantil para todos los públicos.",imagen:<img src={Evento_35} alt={"icon_evento35"} height={120}/>},
                {id: "36", nombre:"Monologo La hora y media de el Club de la Comedia", empresa:"Taquillas", fecha_hora: "30 de Noviembre 2023, 21:00",ubicacion:"Teatro Lara",precio:15+ " euros", descripcion:"Monólogo recomendado para mayores de 12 años.", imagen:<img src={Evento_36} alt={"icon_evento36"} height={120}/>},
                {id: "37", nombre:"Concierto Karol G", empresa:"El Corte Inglés", fecha_hora: "22 de Julio 2024, 21:00",ubicacion:"Estadio Santiago Benabeu",precio:40 + " euros", descripcion:"Concierto para todos los públicos.",imagen:<img src={Evento_37} alt={"icon_evento37"} height={120}/>},
                {id: "38", nombre:"Espectaculo CIRCLASSICA", empresa:"Openbank", fecha_hora: "24 de Noviembre 2023, 18:00",ubicacion:"IFEMA Madrid",precio:25+ " euros", descripcion:"Espectáculo de circo para todos los públicos", imagen:<img src={Evento_38} alt={"icon_evento38"} height={120}/>},
                {id: "39", nombre:"Monologo Tras la risa", empresa:"Promotora 600'ns", fecha_hora: "16 de Febrero 2024, 20:00",ubicacion:"Teatro Amaya",precio:11+ " euros", descripcion:"Monólogo para todos los públicos.", imagen:<img src={Evento_39} alt={"icon_evento39"} height={120}/>},
                {id: "40", nombre:"Discoteca MAD HOUSE", empresa:"GROOVE", fecha_hora: "27 de Enero 2024, 23:59",ubicacion:"Sala GROOVE Madrid",precio:23 + " euros", descripcion:"Fiesta para mayores de 18 años.",imagen:<img src={Evento_41} alt={"icon_evento41"} height={120}/>},
                {id: "41", nombre:"Espectaculo STAND-UP MAGIC", empresa:"Produciones SL", fecha_hora: "4 de Enero 2024, 18:00",ubicacion:"Teatro EDP Gran Vía",precio:18 + " euros", descripcion:"Espectáculo de magia para todos los públicos.", imagen:<img src={Evento_42} alt={"icon_evento42"} height={120}/>},
                {id: "42", nombre:"Discoteca BRESH", empresa:"Santander", fecha_hora: "31 de Enero 2023, 23:59",ubicacion:"IFEMA Madrid",precio:40+ " euros", descripcion:"Fiesta para mayores de 18 años.",imagen:<img src={Evento_43} alt={"icon_evento43"} height={120}/>},
                {id: "43", nombre:"Espectaculo BOSS MASTER FINAL", empresa:"Padel Tour", fecha_hora: "14 de Diciembre 2023, 12:00",ubicacion:"Palau Sant Jordi",precio:15 + " euros", descripcion:"Espectaculo de padel para todos los públicos.",imagen:<img src={Evento_44} alt={"icon_evento44"} height={120}/>},
                {id: "44", nombre:"Concierto Andy Y Lucas", empresa:"Produciones SL", fecha_hora: "12 de Abril 2024, 20:00",ubicacion:"Estadio Santiago Benabeu",precio:45 + " euros", descripcion:"Concierto para todos los públicos.",aforo:15000, imagen:<img src={Evento_45} alt={"icon_evento45"} height={120}/>},
                {id: "45", nombre:"Discoteca Fabrik", empresa:"Fabrik", fecha_hora: "24 de Diciembre 2023, 23:59",ubicacion:"Fabrik Club Madrid",precio:25 + " euros", descripcion:"Fiesta para mayores de 18 años.",imagen:<img src={Evento_15} alt={"icon_evento15"} height={120}/>},
                {id: "46", nombre:"Discoteca MOM", empresa:"MON", fecha_hora: "24 de Diciembre 2023, 23:59",ubicacion:"Sala de conciertos MON Madrid",precio:25 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_16} alt={"icon_evento16"} height={120}/>},
                {id: "47", nombre:"Discoteca Oh My Club", empresa:"Oh My Club", fecha_hora: "24 de Diciembre 2023, 23:59",ubicacion:"Discoteca Oh My Club Madrid",precio:30+ " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_17} alt={"icon_evento17"} height={120}/>},
                {id: "48", nombre:"Discoteca Panda Club", empresa:"Panda Club", fecha_hora: "24 de Diciembre 2023, 23:59",ubicacion:"Club Nocturno Panda Madrid",precio:22 + " euros", descripcion:"Fiesta para mayores de 18 años.", imagen:<img src={Evento_18} alt={"icon_evento18"} height={120}/>},
                {id: "49", nombre:"Discoteca TOY ROOM", empresa:"TOY ROOM", fecha_hora: "31 de Diciembre 2023, 23:59",ubicacion:"TOY ROOM Club Madrid",precio:27 + " euros", descripcion:"Fiesta para mayores de 18 años.",imagen:<img src={Evento_20} alt={"icon_evento20"} height={120}/>},
                {id: "50", nombre:"Exposicion CADIZMANIA fest", empresa:"Carnaval de Cadiz", fecha_hora: "19 de Noviembre 2023, 12:00",ubicacion:"Teatro Lope de Vega",precio:40 + " euros", descripcion:"Teatro para todos los públicos", imagen:<img src={Evento_40} alt={"icon_evento40"} height={120}/>},
            ]);
        }, 2500);
    },[]);

    return events;
}