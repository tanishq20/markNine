import "./styles.css";
import { useState } from "react";

const songsDB = {
  PARTY: [
    {
      title: "Best Of Dj Suketu",
      name1: "Dilbar Mere",
      rating1: "8.5/10",
      name2: "Soniye",
      rating2: "8/10",
      name3: "Pyar Humein Kis Mod Pe",
      rating3: "9/10",
      name4: "Yeh Jawani Hai Deewani",
      rating4: "8.5/10",
      name5: "Bachh Ke Rehna Re Baba",
      rating5: "9.5/10",
      name6: "Aise Na Mujhe Tum Dekho",
      rating6: "8/10",
      name7: "Pyar Mein Dil Pe",
      rating7: "8.5/10",
      name8: "Mehbooba",
      rating8: "9/10"
    },
    {
      title: "Best Of Kiran Kamath",
      name1: "Zero hour mashup",
      name2: "Ae dil hai mushkil",
      name3: "Tu hi rab tu hi dua",
      name4: "Every night and day",
      name5: "Made for each other",
      name6: "Tonight",
      name7: "Soni",
      name8: "Teez",
      rating1: "10/10",
      rating2: "9/10",
      rating3: "9/10",
      rating4: "8/10",
      rating5: "8.5/10",
      rating6: "9.5/10",
      rating7: "10/10",
      rating8: "10/10"
    },
    {
      title: "Best Of DJ Aqeel",
      name1: "Keh du tumhe",
      name2: "Tum se",
      name3: "Kya Dekhte Ho",
      name4: "Ishq di baajiyaan",
      name5: "Ek Ladki Bheegi Bhaagi si",
      name6: "Keh Du Tumhe",
      name7: "Hum Bewafa",
      name8: "Sau aasmaan",
      rating1: "9.5/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "8.5/10",
      rating5: "8/10",
      rating6: "10/10",
      rating7: "9/10",
      rating8: "8.5/10"
    }
  ],
  "90s & EARLY 2000s": [
    {
      title: "90s Madhuri",
      name1: "Koi ladki hai",
      name2: "Pehla Phela Pyar",
      name3: "Bahut Pyar Karte Hai",
      name4: "Pyar Kar",
      name5: "Humne Ghar",
      name6: "Maye Ni Maye",
      name7: "Dholna",
      name8: "Mausam Ka Jaadu",
      rating1: "10/10",
      rating2: "9/10",
      rating3: "9/10",
      rating4: "8/10",
      rating5: "8.5/10",
      rating6: "9.5/10",
      rating7: "10/10",
      rating8: "10/10"
    },
    {
      title: "90s Ka Shahrukh",
      name1: "Ruk Ja O Dil Deewane",
      name2: "Koi Mil Gaya",
      name3: "Ye Kaali Kaali Aankhen",
      name4: "Jaadu Teri Nazar",
      name5: "Ae Kash Ke Hum",
      name6: "Ae Ajnabi",
      name7: "Aisi Deewangi",
      name8: "Suniye To",
      rating1: "8/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "9.5/10",
      rating5: "10/10",
      rating6: "8/10",
      rating7: "8.5/10",
      rating8: "9.5/10"
    },
    {
      title: "90s Juhi Chawla",
      name1: "Kathai Aankho Wali",
      name2: "Jaadu Teri Nazar",
      name3: "Ishq Hua Kaise Hua",
      name4: "Ek Din Aap",
      name5: "Ek Shararat Hone Ko Hai",
      name6: "Neend Churayee Meri",
      name7: "Kudiyan Shaher Diyan",
      name8: "Goriya re Goriya",
      rating1: "9.5/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "8.5/10",
      rating5: "8/10",
      rating6: "10/10",
      rating7: "9/10",
      rating8: "8.5/10"
    }
  ],
  EDM: [
    {
      title: "Best Of David Guetta",
      name1: "When Love Takes Over",
      name2: "Titanium",
      name3: "Memories",
      name4: "Without You",
      name5: "Love Is Gone",
      name6: "Gettin' Over You",
      name7: "Give Me Something",
      name8: "People Come and Go",
      rating1: "9.5/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "8.5/10",
      rating5: "8/10",
      rating6: "10/10",
      rating7: "9/10",
      rating8: "8.5/10"
    },
    {
      title: "Best Of Calvin Harris",
      name1: "We Found Love",
      name2: "Feel So Close",
      name3: "Sweet Nothing",
      name4: "Thinking About You",
      name5: "How Deep Is Your Love",
      name6: "Slide",
      name7: "Summer",
      name8: "I Need Your Love",
      rating1: "10/10",
      rating2: "9/10",
      rating3: "9/10",
      rating4: "8/10",
      rating5: "8.5/10",
      rating6: "9.5/10",
      rating7: "10/10",
      rating8: "10/10"
    },
    {
      title: "Best Of Martin Garrix",
      name1: "In the Name of Love",
      name2: "Animals",
      name3: "Scared to be Lonely",
      name4: "Tremor",
      name5: "Forbidden Voices",
      name6: "Gold Skies",
      name7: "Don't Look Down",
      name8: "Set Me Free",
      rating1: "10/10",
      rating2: "9/10",
      rating3: "9/10",
      rating4: "8/10",
      rating5: "8.5/10",
      rating6: "9.5/10",
      rating7: "10/10",
      rating8: "10/10"
    }
  ],
  ROMANCE: [
    {
      title: "Love Tunes",
      name1: "Aaj Se Teri",
      name2: "Tere Mere",
      name3: "Main Tere Kabil Hoon",
      name4: "Enna Sona",
      name5: "Humsafar",
      name6: "Lambiyaan Si Judaiyan",
      name7: "Ban Ja Rani",
      name8: "Nazm Nazm",
      rating1: "9.5/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "8.5/10",
      rating5: "8/10",
      rating6: "10/10",
      rating7: "9/10",
      rating8: "8.5/10"
    },
    {
      title: "Earthy Love",
      name1: "Aa Jao Meri Tamanna",
      name2: "Aaj Din Chadheya",
      name3: "Aaja Sanam Madhur",
      name4: "Aankhen Bhi Hoti Hai",
      name5: "Aao Milo Chalo",
      name6: "Aap Ki Aakhon Mein",
      name7: "Aaye Ho Meri Zindagi Mein",
      name8: "Ab Mujhe Raat Din",
      rating1: "8/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "9.5/10",
      rating5: "10/10",
      rating6: "8/10",
      rating7: "8.5/10",
      rating8: "9.5/10"
    },
    {
      title: "New Age Love",
      name1: "Abhi Na Jao Chodkar K",
      name2: "Ae Mere Humsafar",
      name3: "Adayein Bhi Hain",
      name4: "Agar Tum Mil Jao",
      name5: "Akele Hain Toh",
      name6: "Ankhiyon Ke Jharokhon Se",
      name7: "Are Re Are Ye Kya Hua",
      name8: "Aye Udi Udi",
      rating1: "8.5/10",
      rating2: "8.5/10",
      rating3: "8.5/10",
      rating4: "8.5/10",
      rating5: "8.5/10",
      rating6: "8.5/10",
      rating7: "8.5/10",
      rating8: "8.5/10"
    }
  ],
  PODCAST: [
    {
      title: "Tech Flix",
      name1: "Technovation",
      name2: "This Week in Enterprise Tech",
      name3: "The Hanselminutes Podcast",
      name4: "Risky Business",
      name5: "Heavy Networking",
      name6: "FLOSS Weekly",
      name7: "The Cloudcast",
      name8: "Accidental Tech",
      rating1: "10/10",
      rating2: "9/10",
      rating3: "9/10",
      rating4: "8/10",
      rating5: "8.5/10",
      rating6: "9.5/10",
      rating7: "10/10",
      rating8: "10/10"
    },
    {
      title: "History",
      name1: "Backstory",
      name2: "Cocaine and Rhinestones",
      name3: "Dan Carlin’s",
      name4: "History of Rome",
      name5: "Lore",
      name6: "Making Oprah",
      name7: "The Memory Palace",
      name8: "Mogul",
      rating1: "9/10",
      rating2: "9/10",
      rating3: "8.5/10",
      rating4: "8/10",
      rating5: "8.5/10",
      rating6: "9/10",
      rating7: "9/10",
      rating8: "10/10"
    },
    {
      title: "Finance",
      name1: "Bloomberg Surveillance",
      name2: "Bloomberg Masters",
      name3: "CNBC – Fast Money Podcast",
      name4: "Goldman Sachs",
      name5: "Financial Times –Banking",
      name6: "Morgan Stanley Ideas",
      name7: "HBR – IdeaCast",
      name8: "Financial Times News",
      rating1: "9.5/10",
      rating2: "8/10",
      rating3: "9/10",
      rating4: "8.5/10",
      rating5: "8/10",
      rating6: "10/10",
      rating7: "9/10",
      rating8: "8.5/10"
    }
  ]
};

export default function App() {
  const [currentSelector, setSelector] = useState("PARTY");

  function selectorClick(selector) {
    setSelector(selector);
  }

  return (
    <div className="App">
      <header>
        <h1 className="header">🎸🤘 Music Gallery 🎼🎵</h1>
      </header>
      <div>
        <p style={{ color: "wheat" }} className="content">
          Let Autobeat make your music look as beautiful as it sounds and
          retrieve missing coverart for you. This gallery will help you to find
          the right music or podcast for every moment – on your phone, your
          computer, your tablet and more.
        </p>
        <b className="quote">Organize, enjoy and discover!!</b>
      </div>

      <div style={{ padding: "20px" }}>
        {Object.keys(songsDB).map((selector) => (
          <button onClick={() => selectorClick(selector)}>{selector}</button>
        ))}
      </div>

      <hr />

      <section className="grid">
        {songsDB[currentSelector].map((list) => (
          <div className="card">
            <div className="title">{list.title}</div>
            <ol className="list">
              <div
                style={{
                  color: "cyan",
                  float: "left",
                  textDecoration: "underline"
                }}
              >
                Songs Name
              </div>
              <div
                style={{
                  color: "cyan",
                  float: "right",
                  textDecoration: "underline"
                }}
              >
                Rating
              </div>
              <br />
              <li>
                {list.name1}
                <span className="rating">{list.rating1}</span>
              </li>
              <li>
                {list.name2}
                <span className="rating">{list.rating2}</span>
              </li>
              <li>
                {list.name3}
                <span className="rating">{list.rating3}</span>
              </li>
              <li>
                {list.name4}
                <span className="rating">{list.rating4}</span>
              </li>
              <li>
                {list.name5}
                <span className="rating">{list.rating5}</span>
              </li>
              <li>
                {list.name6}
                <span className="rating">{list.rating6}</span>
              </li>
              <li>
                {list.name7}
                <span className="rating">{list.rating7}</span>
              </li>
              <li>
                {list.name8}
                <span className="rating">{list.rating8}</span>
              </li>
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
}
