import { Outlet } from 'react-router'
import { HomeRoute } from './pages/Home/Home'
import { useLoaderData } from 'react-router'
import { appLoader } from './loaders/appLoader'
import './App.css'


function App() {
  const data = useLoaderData() as Awaited<ReturnType<typeof appLoader>>;
  console.log(data);
  return <>
    <h1>Your Project goes Here</h1>
    {data}
    <Outlet />
  </>
}

export const AppRoot = {
  path: "/",
  Component: App,
  loader: appLoader,
  children: [HomeRoute]
};

export default App
