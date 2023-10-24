import BioData from "./components/BioData";
import "./app.css";
function App() {
  return (
    <div className="App">
      <BioData 
      name="Masuma"
      age="20"
      gender="Female"
      email="masuma@gmail.com"
      phone="01711111111"
      address="Dhaka, Bangladesh"
      skills={["HTML", "CSS", "Javascript", "React", "NodeJS"]}
      interests={["Coding", "Reading","Travelling"]}
      />
      <hr />
      <BioData 
      name="Abdus Salam"
      age="22"
      gender="Male"
      email="abdus@gmail.com"
      phone="01722222222"
      address="Comilla, Bangladesh"
      skills={["HTML", "CSS", "Javascript", "React", "NodeJS", "MongoBD"]}
      interests={["Coding","Cricket","drawing"]}
      />
      <hr />
      <BioData
      name="Mahfuz"
      age="21"
      gender="Male"
      email="mahfuz@gmail.com"
      phone="01733333333"
      address="Khulna, Bangladesh"
      skills={["HTML", "CSS", "Javascript", "React", "NodeJS", "MongoBD"]}
      interests={["Coding","Cricket","drawing","Reading","Travelling"]}
      /> 
    </div>
  );
}

export default App;
