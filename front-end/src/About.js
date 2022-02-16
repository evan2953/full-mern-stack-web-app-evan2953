import { Link } from 'react-router-dom'
import './About.css'
import me from './me.JPG'

/**
 * A React component that represents the About page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>About Me</h1>
      <p>I'm currently a senior at New York University studying computer science. I was born and raised in southern California pretty much my whole life until I came to New York. 
          I enjoy doing active activites and being able to be outside and in nature so some things that I like to do are surfing, hiking, and running. Other times, I like to just 
          chill out and spend time with my friends.
      </p>
        <img src={me} alt="Me"/>
    </>
  )
}

// make this component available to be imported into any other file
export default About
