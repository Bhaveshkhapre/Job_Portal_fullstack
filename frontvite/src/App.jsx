import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Hom from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompaniesCreate from './components/admin/CompaniesCreate'
import CompanySetup from './components/admin/CompanySetup'


const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <Hom />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/jobdescription/:id",
    element: <JobDescription />
  },

 // Admin part will be shown here 

 {
    path: "/admin/companies",
    element: <Companies />
  },
  {
    path: "/admin/companies/create",
    element: <CompaniesCreate />
  },
   {
    path: "/admin/companies/:id",
    element: <CompanySetup />
  }

])

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
