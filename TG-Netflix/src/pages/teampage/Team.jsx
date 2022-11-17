import React, { useState, useEffect } from "react";
import { GridContainer } from "../../components/grid-layout/GridLayout.styled";
import MovieCard from "./MovieCard";
import CallSmallModal from "./CallSmallModal";
import styled from "styled-components";

// images
import bart from "./images/bart.png";
import lex from "./images/lex.png";
import hiuchee from "./images/hiu-chee.png";
import sander from "./images/sander.png";
import marijana from "./images/marijana.png";
import esther from "./images/esther.png";
import marko from "./images/marko.png";
import nathaniel from "./images/nathaniel.png";
import luisa from "./images/luisa.png";
import joost from "./images/joost.png";
import szymon from "./images/szymon.png";
import placeholderother from "./images/placeholder-other.jpg";

export default function GridLayout() {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setDataset(film.dataset);
          setIsHovering(true);
          setCoords(e.target.getBoundingClientRect());
        }
      });
    });

    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);

  const MessageCard = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    font-size: 1.5rem;
    display: flex;
    padding: 10px;
    flex-direction: column;
    margin: 7px;
    font-style: italic;

    .person-name {
      align-self: end;
      justify-self: end;
      font-style: normal;
    }
  `;

  const people = [
    {
      backdrop_path: lex,
      name: "Lex",
      keywords: "Scrum Master • Navbar",
      description:
        "De opleiding loopt op z’n einde en ik kijk er met veel plezier en voldoening aan terug. Plezier omdat ik deze opleiding mocht doen met een hele leuke groep gelijkgezinden, en voldoening omdat het zeker niet gemakkelijk was. Leren programmeren is eentje van doorzetten en de vele momenten van frustratie accepteren. Het zijn die spaarzame momenten van grote vreugde die je er dan steeds doorheen slepen. Ik ben blij zoveel te hebben geleerd in korte tijd en kijk ernaar uit om nog veel meer door te blijven leren. Deze groepsopdracht was een perfecte afsluiting van onze tijd als groep samen. We kunnen trots zijn op het eindresultaat en iedereen heeft een belangrijke bijdrage geleverd. Je steekt veel van elkaar op en op momenten wanneer iemand vastzat kwam er altijd snel hulp. Wat me bovenal zal bijblijven was het plezier om samen met anderen aan iets moois te bouwen. De team-spirit en eensgezindheid binnen deze groep was groot en heel aanstekelijk. De rol van scrum master heb ik dan ook met heel veel plezier gedaan. Ik zal iedereen gaan missen en hoop dat iedereen een mooie toekomst tegemoet gaat!",
    },
    {
      backdrop_path: sander,
      name: "Sander",
      keywords: "Footer • Lanes • MyList Page",
      description:
        "Het Nepflix project is het sluitstuk van deze opleiding en het resultaat is een weerspiegeling van de ontwikkeling die we het afgelopen half jaar hebben doorgemaakt als beginnende front- en backend developers. Dit betreft zowel technische skills, persoonlijke ontwikkeling en leren samenwerken in een development project team. Ik ben trots op wat we persoonlijk en als groep hebben neergezet en wil al mijn mede studenten bedanken voor hun samenwerking, hulp, inzet (special mention: scrummaster Lex) en positieve spirit. Ik ga het dagelijks inloggen op de Zoom  missen en wens jullie heel veel succes nu we ècht gaan beginnen aan onze carrière als IT’er.",
    },
    {
      backdrop_path: nathaniel,
      name: "Nathaniel",
      keywords: "Master of the Video Banner",
      description: "",
    },
    {
      backdrop_path: hiuchee,
      name: "Hiu-Chee",
      keywords: "Backend • Browse Endpoint",
      description:
        "Voor dit opleiding heb ik wel enigzin ervaring met codering, maar nooit gewerkt in team verband in IT branch, erg veel genoten om na zo lang tijd weer in een team te kunnen werken, ik heb veel geleerd en leuke dingen ervaart. Dankbaar aan alle teamgenoten die hard gewerken hebben aan de project voor een mooie resultaat.",
    },
    {
      backdrop_path: szymon,
      name: "Szymon",
      keywords: "Data Structure • Banner • Lanes",
      description: "In het begin heb ik niet verwacht dat we allemaal zo ver zouden komen. Maar toch! Het was echt mooi om mee te maken hoe ieder is ontwikkeld tot een échte developer. En dat in zo'n gezellig en behulpzaam team! Ik ben enorm blij met het eindresultaat en er zit nu niks anders meer op dan verdergroeien!",
    },
    {
      backdrop_path: luisa,
      name: "Luisa",
      keywords: "Landing Page • Dataflow • Player",
      description:
        "This passed six months have definitely been filled with ups and downs in various aspects, but what stayed a true constant was the energy and joy that I got from from this course. Part of me was unsure if I was capable of finishing this course, I couldn't tell if I was doing well or not, imposter syndrome started weighting more by the time we started with React. At one point during the course something clicked and I said F it! Why should I hold myself to high standards that I placed for myself? I've heard multiple different stories from experienced developers, about their failures and successes. It all boiled down to how willing I was to get back up and keep going. I can proudly say that by the end of this course I have more knowledge then what I started with. I can also say I still have a long way to go, but that's ok. Because at the end of the day, I found what gives me joy.",
    },
    {
      backdrop_path: joost,
      name: "Joost",
      keywords: "Master of the Lanes",
      description:
        "Ik heb ontzettend veel geleerd en leuke mensen leren kennen. Iedereen bedankt!",
    },
    {
      backdrop_path: bart,
      name: "Bart",
      keywords: "Data Structure • Spinner • Filterbar",
      description:
        "Nepflix is het tastbare bewijs dat we het afgelopen jaar zowel individueel als in teamverband grote stappen hebben gemaakt. Voor mij persoonlijk is het goed geweest om in het diepe gegooid te worden m.b.t React in plaats van in mijn comfortzone te blijven hangen. Anders was ik er waarschijnlijk nu nog steeds niet mee gestart.",
    },
    {
      backdrop_path: placeholderother,
      name: "Alex",
      keywords: "Backend • MyList Endpoint",
      description: "",
    },
    {
      backdrop_path: marko,
      name: "Marko",
      keywords: "Master of the Modal",
      description:
        "Zes maanden geleden had ik zo goed als geen programmeer kennis. Nu zijn we aan het einde van het traject en hebben we in mijn ogen een heel mooi eind project gemaakt. Ik ben er dan ook super trots op! Natuurlijk zijn we nog maar aan het begin van onze programmeer-carriere, maar als wij dit al na zes maanden kunnen. Ben ik erg benieuwd wat iedereen kan over een jaar!",
    },
    {
      backdrop_path: marijana,
      name: "Marijana",
      keywords: "Backend • Movie Endpoint • Search Endpoint",
      description:
        "Kon ik maar tijdreizen. Dan zou ik 6 maanden terug de tijd in gaan en de Marijana van toen laten zien wat ik nu allemaal kan. Aan het begin van de opleiding had ik geen idee wat ik kon verwachten. Ik maakte me zorgen dat 6 maanden niet genoeg zouden zijn om al die stof te leren, but I surprised myself. Ik ben blij dat ik de stap heb gezet om deze opleiding te doen. In 6 maanden heb ik veel geleerd en ik ben super trots op wat ik allemaal heb bereikt.",
    },
    {
      backdrop_path: esther,
      name: "Esther",
      keywords: "Account • Category Filter • Lanes",
      description:
        "Dit leuke en leerzame project was een goede afsluiting van zes maanden waarin wij ons ontwikkeld hebben tot web developers. Dankzij een topteam is een resultaat opgeleverd om trots op te zijn. Ik heb veel geleerd van de uitdagingen die dit project, evenals de eerdere projecten, meebrachten en heb ervaren hoe het is om met een team te werken. Naast dat ik trots ben op alles wat ik nu kan, kijk ik met plezier terug op de afgelopen zes maanden.",
    },
  ];

  const jens = [
    // {
    //   id: 985939,
    //   name: "Sander",
    //   description:
    //     `Het enthousiasme waarmee je ons individueel en als groep met uiteenlopende karakters en achtergrond skills hebt bijgebracht is aanstekelijk. Je hebt ons overspoeld met nuttige informatie, gepusht (pun intended) en behoed voor valkuilen. Het belangrijkste wat ik van je geleerd heb, is ${typescript} dat onze verdere ontwikkeling als developer niet anders zal zijn dan de manier van leren die je op ons hebt overgedragen. Thanks coach!`,
    // },
    {
      name: "Luisa",
      description:
        "The difference a few months can make. The first time I was taught by Jens was during the free week-long Web Developing course from Techgrounds.  At that time, he was already a good coach, but with some room for growth. Finding out that he would become the coach for the Front-End Development course was nice, and the level of coaching he showed over the past six months was really goed. I learned more from Jens in this course than I could have learned in a year on my own, in technical skills and soft skills. 10/10 great person, would so have him as a coach again, and maybe even as a colleague.",
    },
    {
      name: "Marko",
      description:
        "Jens is een passievolle programmeur en educateur die in zijn nog korte carriere al heel veel kennis bezit. Would recommend 10/10! Jens bedankt!",
    },
    {
      name: "Marijana",
      description:
        "Lieve Jens de topdocent, Bedankt voor al je Tesla momentjes en je super gedetailleerde verhalen met overbodige informatie :P Maar even zonder grappen, bedankt voor alles. Je stond altijd klaar om te helpen en je zorgde ervoor dat de stof ook echt werd begrepen. Daarnaast geloofde je in ons wanneer we daar zelf moeite mee hadden. Ik heb onwijs veel van je geleerd en daar ben ik dankbaar voor.",
    },
    {
      name: "Nathaniel",
      description:
        "One more thing! Jens. You are the MVP. It's not an understatement to say that you were the glue that held the course together. And not just holding it together but also making it and keeping it entertaining challenging and educational, for all of us. All the whilst you were also busy doing 41 other meetings on a day, and one can only imagine how hectic and incoherent things were at Techgrounds with everyone leaving (including yourself!) and partners backing out. It's admirable and a true testement of character how even though you also found a new path for yourself, you still gave a 110% to the course, to us. It is without a shadow of a doubt that the day you decided to leave, it was a dark day indeed for Techgrounds. You will be missed Jens, even more so by us. Thank you for everything, hope you will fare well on all your future endeavours. Don't be a stranger! See you around.",
    },
    {
      name: "Hiu-Chee",
      description:
        "Super veel bedankt voor alle moeite en geduld voor ons, onlangs je zo druk heb, toch veel tijd aan ons besteed met voorbereiden voor lesstoffen enzo.. specifiek onderwerpen aan mij uitleggen, zo dat ik mij kennis uitgebreide kan zijn voor de toekomstig werkmarkt, daar ben ik echt dankbaar voor. Ik wens je alle beste in de toekomst en Ik zou Tim en kwik kwak kwek missen.",
    },
    {
      name: "Esther",
      description:
        "Jens, super bedankt voor alles wat je ons hebt geleerd en al het enthousiasme waarmee je het deed! Je slaagde er altijd weer in om met motiverend speeches en inspirerende anecdotes te komen. Heel veel succes en plezier bij je nieuwe baan gewenst!",
    },
    {
      name: "Lex",
      description:
        "We hebben dit half jaar enorm veel geleerd en dat is voor een groot deel aan Jens te danken. Hij heeft veel kennis maar het goed kunnen overdragen is minstens zo belangrijk. Hij deed dat niet alleen heel goed maar deed het iedere dag ook met heel veel enthousiasme. De hoeveel stof die je op je afkomt als je begint te programmeren kan al snel overweldigend zijn, maar hij maakte steeds onderscheid wat echt belangrijk was en wat niet. Hij had ook oprecht het beste met ons voor en deed tot op het einde zijn best om ons zo goed mogelijk voor te bereiden voor wanneer we op onze eigen voeten moeten staan. Jens, 2022 zal uiteindelijk hopelijk een heel belangrijk jaar voor mij worden. Ik ben je heel dankbaar voor hoe je mij hebt bijgestaan dit jaar en het plezier in het programmeren nog verder hebt aangewakkerd. Ik wens je heel veel succes met je nieuwe baan en veel geluk!",
    },
    {
      name: "Bart",
      description:
        "Jens, ik vind het knap dat je bij iedere vraag van mijn kant met een korte blik op de code altijd direct het probleem wist te identificeren. Je hebt niet alleen vakinhoudelijk veel kennis, je enthousiasme is ook altijd een goede motivator om net dat extra stapje te zetten.",
    },
    {
      name: "Szymon",
      description: "Jens, dè coach van het jaar,  geeft altijd fantastisch uitleg en weet precies wat wij nodig hebben om verder te komen. Maar wat hem nog beter maakt, is de stralende passie voor programmeren en de brede kennis die hij met ons deelt. Bedankt voor alles Jens!",
    },
  ];

  return (
    <>
      <div className="padding-container">
        {isHovering && (
          <CallSmallModal
            hover={isHovering}
            setIsHovering={setIsHovering}
            data={{ coords: coords, dataset: dataset }}
          />
        )}
        <h1 style={{ color: "white", fontSize: "5rem", textAlign: "center" }}>
          Our Team
        </h1>
        <GridContainer>
          {people.map((person, index) => {
            return <MovieCard key={index} person={person} />;
          })}
        </GridContainer>
        <h1
          style={{
            color: "white",
            fontSize: "5rem",
            textAlign: "center",
            marginTop: "30rem",
          }}
        >
          For Jens
        </h1>
        <GridContainer>
          {jens.map((message, index) => {
            return (
              <MessageCard key={index}>
                <p>"{message.description}"</p>
                <p className="person-name">- {message.name}</p>
              </MessageCard>
            );
          })}
          <MessageCard>
            <p>
              "Het enthousiasme waarmee je ons individueel en als groep met
              uiteenlopende karakters en achtergrond skills hebt bijgebracht is
              aanstekelijk. Je hebt ons overspoeld met nuttige informatie,
              gepusht (pun intended) en behoed voor valkuilen. Het belangrijkste
              wat ik van je geleerd heb, is <s>typescript</s> dat onze verdere
              ontwikkeling als developer niet anders zal zijn dan de manier van
              leren die je op ons hebt overgedragen. Thanks coach!"
            </p>
            <p className="person-name">- Sander</p>
          </MessageCard>
        </GridContainer>
      </div>
    </>
  );
}
