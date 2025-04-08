
import { HomeButton } from '../homebutton';

type Props = {}

export const About = (props: Props) => {
  return (
    <>
        <div>
            <HomeButton/>
            <h1>
                About us
            </h1>
            <p>
                We are a team of students from the Higher Technical Federal Institute of Technology and Applied Sciences of Dörabiara.
            </p>
        </div>
    </>
  )
}