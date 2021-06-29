
import { DataNaviBottom, DataNaviTop, Point } from "../../Data/jsonNavi"
import Sticky from 'react-stickynode'
import Logo from '../../Assets/Image/headeryesdok.png'
import IconIndonesia from '../../Assets/Image/indonesia.png'
import IconEnglish from '../../Assets/Image/english.png'
import styled from "styled-components"
import media from "styled-media-query";
import MobileNav from "./mobile"

const Nav = styled.nav `
    ${media.lessThan("large")`
        display: none;  
    `}
`

const Mobile = styled.nav `
    display: none;
    ${media.lessThan("large")`
        display: block;  
    `}
`

const NavigationTop = () => {
    return (
        <nav className="flex justify-between xl:container m-auto items-center">
            <div className="px-4 py-2">
                <img alt="logo" src={Logo} width="150"></img>
            </div>
            <ul className="flex">
                {
                    DataNaviTop.map((v, k) => {
                        return (
                            
                            <li key={k} className="p-4 font-bold">
                                <a href={v.url} className="text-base">
                                    {v.name}
                                </a>
                            </li>
                        )
                    })
                }
                <div className="items-center flex">
                    <div className="flex rounded-3xl border" style={{
                        backgroundColor: "#009CD7",
                        borderColor: "#009CD7"
                    }}>
                        <a href="https://www.yesdok.com/id/company/" className="px-3 py-2 flex items-center hover:text-white">
                            <div className="pr-2">IDN</div>
                            <img alt="indonesia" src={IconIndonesia} width="25"></img>
                        </a>
                        <a href="https://www.yesdok.com/en/company/" className="px-3 py-2 flex items-center bg-navi rounded-r-3xl hover:text-white">
                            <img alt="indonesia" src={IconEnglish} width="25"></img>
                            <div className="pl-2">EN</div>
                        </a>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

const NavigationBottom = () => {
    return (
        <nav className="flex justify-between xl:container m-auto items-center">
            <ul className="flex">
                {
                    DataNaviBottom.map((v, k) => {
                        return (
                            
                            <li key={k} className="py-4 2xl:px-8 md:px-4 font-bold">
                                <a href={v.url} className="md:text-base xl:text-xl">
                                    {v.name}
                                </a>
                            </li>
                        )
                    })
                }
                <div className="flex items-center">
                    <div className="flex items-center bg-white rounded-3xl">
                        <div className="py-1 pl-1">
                            <img alt="point" src={Point.logo} width="30" height="30"></img>
                        </div>
                        <span className="color-title text-base px-3 py-1 font-bold">{Point.point} Poin</span>
                    </div>
                </div> 
            </ul>
            <a className="xl:text-xl md:text-base font-bold" href="https://www.yesdok.com/id/login">
                DAFTAR/MASUK
            </a>
        </nav>
    )
}

const Information = () => {
    return (
        <div className="flex justify-center info">
            <div className="flex items-center">
                <span className="color-title font-bold p-4 md:text-2xl lg:text-4xl">BINGUNG ? TANYA DOKTER!</span>
                <a href="https://www.yesdok.com/id/login"  className="blob p-2 bg-navi rounded-full flex items-center md:text-xl lg:text-2xl">
                    <span className="p-1 px-4 font-bold">MULAI KONSULTASI</span>
                    <div className="p-1 px-4">
                        <div className="pulsatingDot" />
                    </div>
                </a>
            </div>
        </div>
    )
}

const MainNavigation = () => {
     
    return ( 
        <> 
        <Nav>
            <Sticky className="z-50 relative">
                <div className="bg-navi px-4 py-2 z-50">
                    <div>
                        <NavigationTop></NavigationTop>
                    </div>
                    <div>
                        <NavigationBottom></NavigationBottom>
                    </div>
                </div>
            </Sticky>
        </Nav>
        <Sticky className="z-50 relative">
            <Mobile className="bg-navi p-4">
                <MobileNav></MobileNav>
            </Mobile>
        </Sticky>
            <Information></Information>
        </>
        )
}

export default MainNavigation