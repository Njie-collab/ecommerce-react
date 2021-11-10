import { Link } from 'react-router-dom'

const About = () => {
    
    return (
      <div>
        <p>About us</p>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          similique minus atque, exercitationem tempora incidunt consequuntur
          eius laudantium? Vero amet saepe quo in ipsam maxime voluptatum aut
          quasi quibusdam perspiciatis.
        </h3>
        <Link to="/products">Check Our Store</Link>
      </div>
    );
}

export default About
