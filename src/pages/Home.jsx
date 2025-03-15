import { Fragment } from "react"
import Landing from "../components/Landing"
import Featuers from "../components/Featuers"
import StayPro from "../components/StayPro"
import TesteMon from "../components/TesteMon"
import GetStarted from "../components/GetStarted"


const Home = () => {
  return (
    <Fragment>
        <Landing/>
        <Featuers/>
        <StayPro/>
        <TesteMon/>
        <GetStarted/>
    </Fragment>
  )
}

export default Home