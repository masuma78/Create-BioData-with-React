import InterestSection from "./InterestSection";
import PersonalInfo from "./PersonalInfo";
import SkillSection from "./SkillSection";

const BioData = (props) => {
    return (
      <div className="bio-data">
      <PersonalInfo 
      name={props.name}
      age={props.age}
      gender={props.gender}
      email={props.email}
      phone={props.phone}
      address={props.address}
      />
          <SkillSection 
          skills={props.skills}
          />  
            <InterestSection 
            interests={props.interests}
            />
      </div>
    );
};
export default BioData