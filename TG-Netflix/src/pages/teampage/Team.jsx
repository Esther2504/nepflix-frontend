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
import placeholder from "./images/placeholder.png";

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
      id: 985939,
      name: "Lex",
      keywords: "Scrum Master • NavBar",
      description:
        "",
    },
    {
      backdrop_path: sander,
      id: 985939,
      name: "Sander",
      keywords: "Footer • Lanes • MyList Page",
      description:
        "Het Nepflix project is het sluitstuk van deze opleiding en het resultaat is een weerspiegeling van de ontwikkeling die we het afgelopen half jaar hebben doorgemaakt als beginnende front- en backend developers. Dit betreft zowel technische skills, persoonlijke ontwikkeling en leren samenwerken in een development project team. Ik ben trots op wat we persoonlijk en als groep hebben neergezet en wil al mijn mede studenten bedanken voor hun samenwerking, hulp, inzet (special mention: scrummaster Lex) en positieve spirit. Ik ga het dagelijks inloggen op de Zoom  missen en wens jullie heel veel succes nu we ècht gaan beginnen aan onze carrière als IT’er.",
    },
    {
      backdrop_path: nathaniel,
      id: 718930,
      name: "Nathaniel",
      keywords: "Master of the Banner",
      description:
        "",
    },
    {
      backdrop_path: hiuchee,
      id: 718930,
      name: "Hiu-Chee",
      keywords: "Backend • Browse Endpoint",
      description:
        "",
    },
    {
      backdrop_path: placeholder,
      id: 718930,
      name: "Szymon",
      keywords: "Data Structure • Banner • Lanes",
      description:
        "",
    },
    {
      backdrop_path: luisa,
      id: 718930,
      name: "Luisa",
      keywords: "Landing Page • Dataflow • Player",
      description:
        "This passed six months have definitely been filled with ups and downs in various aspects, but what stayed a true constant was the energy and joy that I got from from this course. Part of me was unsure if I was capable of finishing this course, I couldn't tell if I was doing well or not, imposter syndrome started weighting more by the time we started with React. At one point during the course something clicked and I said F it! Why should I hold myself to high standards that I placed for myself? I've heard multiple different stories from experienced developers, about their failures and successes. It all boiled down to how willing I was to get back up and keep going. I can proudly say that by the end of this course I have more knowledge then what I started with. I can also say I still have a long way to go, but that's ok. Because at the end of the day, I found what gives me joy.",
    },
    {
      backdrop_path: joost,
      id: 718930,
      name: "Joost",
      keywords: "Master of the Lanes",
      description: "Ik heb ontzettend veel geleerd en leuke mensen leren kennen. Iedereen bedankt!",
    },
    {
      backdrop_path: bart,
      id: 718930,
      name: "Bart",
      keywords: "Data Structure • Spinner • Filterbar",
      description:
        "",
    },
    {
      backdrop_path: placeholder,
      id: 718930,
      name: "Alex",
      keywords: "Backend • MyList Endpoint",
      description:
        "",
    },
    {
      backdrop_path: marko,
      id: 718930,
      name: "Marko",
      keywords: "Master of the Modal",
      description:
        "Zes maanden geleden had ik zo goed als geen programmeer kennis. Nu zijn we aan het einde van het traject en hebben we in mijn ogen een heel mooi eind project gemaakt. Ik ben er dan ook super trots op! Natuurlijk zijn we nog maar aan het begin van onze programmeer-carriere, maar als wij dit al na zes maanden kunnen. Ben ik erg benieuwd wat iedereen kan over een jaar!",
    },
    {
      backdrop_path: marijana,
      id: 718930,
      name: "Marijana",
      keywords: "Backend • Movie Endpoint • Search Endpoint",
      description:
        "Kon ik maar tijdreizen. Dan zou ik 6 maanden terug de tijd in gaan en de Marijana van toen laten zien wat ik nu allemaal kan. Aan het begin van de opleiding had ik geen idee wat ik kon verwachten. Ik maakte me zorgen dat 6 maanden niet genoeg zouden zijn om al die stof te leren, but I surprised myself. Ik ben blij dat ik de stap heb gezet om deze opleiding te doen. In 6 maanden heb ik veel geleerd en ik ben super trots op wat ik allemaal heb bereikt.",
    },
    {
      backdrop_path: esther,
      id: 718930,
      name: "Esther",
      keywords: "Account • Category Filter • Lanes",
      description:
        "Dit was een heel leuk & leerzaam project. Dankzij een topteam hebben we een resultaat opgeleverd om trots op te zijn. Ik heb veel geleerd door de uitdagingen die dit project, maar ook de eerdere projecten, meebrachten en heb ervaren hoe het is om met een team te werken. Naast dat ik trots ben op alles wat ik nu kan, kijk ik met plezier terug op de afgelopen zes maanden.",
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
      id: 985939,
      name: "Luisa",
      description:
        "The difference a few months can make. The first time I was taught by Jens was during the free week-long Web Developing course from Techgrounds.  At that time, he was already a good coach, but with some room for growth. Finding out that he would become the coach for the Front-End Development course was nice, and the level of coaching he showed over the past six months was really goed. I learned more from Jens in this course than I could have learned in a year on my own, in technical skills and soft skills. 10/10 great person, would so have him as a coach again, and maybe even as a colleague.",
    },
    {
      id: 985939,
      name: "Marko",
      description:
        "Jens is een passievolle programmeur en educateur die in zijn nog korte carriere al heel veel kennis bezit. Would recommend 10/10! Jens bedankt!",
    },
    {
      id: 985939,
      name: "Marijana",
      description:
        "Lieve Jens de topdocent, Bedankt voor al je Tesla momentjes en je super gedetailleerde verhalen met overbodige informatie :P Maar even zonder grappen, bedankt voor alles. Je stond altijd klaar om te helpen en je zorgde ervoor dat de stof ook echt werd begrepen. Daarnaast geloofde je in ons wanneer we daar zelf moeite mee hadden. Ik heb onwijs veel van je geleerd en daar ben ik dankbaar voor.",
    },
    {
      id: 985939,
      name: "Nathaniel",
      description:
        "One more thing! Jens. You are the MVP. It's not an understatement to say that you were the glue that held the course together. And not just holding it together but also making it and keeping it entertaining challenging and educational, for all of us. All the whilst you were also busy doing 41 other meetings on a day, and one can only imagine how hectic  and incoherent things were at Techgrounds with everyone leaving (including yourself!) and partners backing out. It's admirable and a true testement of character how even though you also found a new path for yourself, you still gave a 110% to the course, to us. It is without a shadow of a doubt that the day you decided to leave, it was a dark day indeed for Techgrounds. You will be missed Jens, even more so by us. Thank you for everything, hope you will fare well on all your future endeavours. Don't be a stranger! See you around.",
    },
    {
      id: 985939,
      name: "Joost",
      description: "",
    },
    {
      id: 985939,
      name: "Hiu-Chee",
      description:
        "",
    },
    {
      id: 985939,
      name: "Lex",
      description:
        "",
    },
    {
      id: 985939,
      name: "Bart",
      description:
        "",
    },
    {
      id: 985939,
      name: "Alex",
      description:
        "",
    },
    {
      id: 985939,
      name: "Esther",
      description:
        "Jens, super bedankt voor alles wat je ons hebt geleerd en al het enthousiasme waarmee je het deed! Je slaagde er altijd weer in om met motiverend speeches en inspirerende anecdotes te komen. Het was heel fijn om jou als coach te hebben. Heel veel succes en plezier bij je nieuwe baan!",
    },
    {
      id: 985939,
      name: "Szymon",
      description:
        "",
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
