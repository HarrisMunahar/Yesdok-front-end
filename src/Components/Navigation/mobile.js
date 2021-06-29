import { slide as Menu } from 'react-burger-menu'
import MenuIcon from '../../Assets/Image/menu.svg'
import Logo from '../../Assets/Image/headeryesdok.png'
import IconIndonesia from '../../Assets/Image/indonesia.png'
import IconEnglish from '../../Assets/Image/english.png'
import { DataNaviBottom, DataNaviTop, Point } from '../../Data/jsonNavi'
const MenuContainer = () => {
    return (
        <Menu pageWrapId={ "page-wrap" } customBurgerIcon={ <img alt="img" src={MenuIcon} /> }  >
            <div>
                <div className="py-2 px-3 text-white">
                    <div>
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
                    </div>
                </div>
                <div>
                    <div className="flex justify-between p-4 text-white bg-gray-900">
                        <a href="https://www.yesdok.com/id/login" className="px-5 py-2 rounded-xl border">
                            MASUK
                        </a>
                        <a href="https://www.yesdok.com/id/login" className="px-5 py-2 rounded-xl border">
                            DAFTAR
                        </a>
                    </div>
                    <ul className="p-4 text-white">
                        <div className="font-bold text-lg">MENU</div>
                        {DataNaviTop.map((v,k) => {
                           return <li key={k} className="ml-4 py-2">
                               <a href={v.url}>
                                    {v.name}
                               </a>
                            </li>
                        })}

                        {DataNaviBottom.map((v,k) => {
                            return  <li key={k} className="py-2">
                                <a href={v.url}> {v.name} </a>
                            </li>
                        })}
                       
                    </ul>
                </div>
            </div>
        </Menu>
    )
}

const MobileNav = () => {
    return (
        <div className="flex items-center">
            <div className="flex items-center">
                <div className="flex items-center bg-white rounded-3xl">
                    <div className="py-1 pl-1">
                        <img alt="point" src={Point.logo} width="30" height="30"></img>
                    </div>
                    <span className="color-title text-base px-3 py-1 font-bold">{Point.point} Poin</span>
                </div>
            </div> 
            <div className="flex-1 flex justify-center">
                <a className="text-2xl" href="/">
                    <img className="m-auto" alt="img" src={Logo} width="125"></img>
                </a>
            </div>
            <div className="p-4">
                <MenuContainer></MenuContainer>
            </div>
        </div>
    )
}

export default MobileNav