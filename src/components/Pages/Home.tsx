import { Link } from "react-router";


export const Home = () => {
    return (
        <>
            <div>
                <div>
                <h1>Home</h1>
                <p>Homepage of our "How to learn a Language" group Assignment</p>
            </div >
            <div>
                <Link to="/language">Language</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <img src="/src/assets/wip.jpg" alt="W.I.P." className='w-100 h-100' />
        </div >

        </>
    )
}