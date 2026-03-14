import type { FC } from "react";

const Home: FC = () => {
    return <>
        <h1>Home Page</h1>
    </>
}

export const HomeRoute = { index: true, Component: Home }
export default Home;