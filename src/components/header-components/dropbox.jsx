import GamezoneBar from './gamezonebar'
import { headerDataProvider } from './headerstore'
import styles from './header-styles/navbar-container.module.css'
import SoftwereBar from './softwerebar'
import SolutionBar from './solution'
import ServiceBar from './servicebar'
import TechnologyBar from './technologybar'
import { useContext } from 'react'

export default function DropBox(){

    const { toggle2 } = useContext(headerDataProvider)

    return <>
        {toggle2==='Technology' && <TechnologyBar></TechnologyBar> }
        {toggle2==='Services' && <ServiceBar></ServiceBar> }
        {toggle2==='Solutions' && <SolutionBar></SolutionBar> }
        {toggle2==='Softwere' && <SoftwereBar></SoftwereBar> }
        {toggle2==='Game Zone' &&<GamezoneBar></GamezoneBar> }
        </>
}