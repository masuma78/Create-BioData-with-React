
const InterestSection = (props) => {
  return (
    <div className="interests">
                    <h2>My Interest</h2>
                    <ul>
                    {props.interests.map((interest) => (
                <li key={interest}>{interest}</li>
               ))}
                    </ul>
                </div>
  )
}

export default InterestSection
