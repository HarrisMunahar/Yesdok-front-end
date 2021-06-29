import styled from 'styled-components'
import Logo from '../../Assets/Image/headeryesdok.png'
import IconIndonesia from '../../Assets/Image/indonesia.png'
import IconSingapure from '../../Assets/Image/singapore_flag.png'
import Email from '../../Assets/Image/email.png'
import Facebook from '../../Assets/Image/facebook.png'
import Instagram from '../../Assets/Image/instagram.png'
import Twitter from '../../Assets/Image/twitter.png'

const MainFooter = styled.div `
    background-color: #4D4D4D;
`

const Credit = styled.div `
    background-color: #333333;
`

const FooterContainer = () => {
    return (
        <MainFooter className="text-white w-full">
            <div className="lg:container m-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex justify-center flex-col text-center items-center text-base">
                        <img alt="logo" src={Logo} width="230"></img>
                        <p className="py-6">YesDok adalah layanan ehealth yang terjangkau dengan platform mobile yang mudah digunakan dan tangguh. Menembus 17.504 pulau dan 260 juta pengguna di Indonesia.</p>
                        <img alt="img" src="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=8a3a3757-4da1-47c3-a8d9-1f84bf10a04b"></img>
                        <a  href="https://www.yesdok.com/id/company/#contact" className="px-4 py-2 border my-6 rounded-2xl text-xl">
                            HUBUNGI KAMI
                        </a>
                        <div className="grid gap-4 grid-cols-2">
                            <a href="http://ydok.co/android">
                                <img alt="img" src="https://www.yesdok.com/img/footer_play_store.png" width="150"></img>
                            </a>
                            <a href="http://ydok.co/ios">
                                <img alt="img" src="https://www.yesdok.com/img/footer_app_store.png" width="150"></img>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col text-base p-4">
                       <div className="text-3xl font-bold mb-4">INDONESIA</div>
                       <div className="grid grid-cols-2 gap-3" style={{
                           gridTemplateColumns: "25px auto", 
                       }}>
                           <div>
                               <img alt="img" src={IconIndonesia} width="25" height="25"></img>
                           </div>
                           <a href="https://www.google.com/maps/place/Kirana+Boutique+Office/@-6.1741032,106.8940087,21z/data=!4m5!3m4!1s0x2e69f520aed63795:0xd18f4ce7a8259dbb!8m2!3d-6.174088!4d106.8940886" className="whitespace-pre-wrap">
                            PT. Yes Dok Indonesia, <br></br>
                            Ruko Kirana Boutique <br></br>
                            Jl. Boulevard Gading Raya Blok F3 <br></br>
                            No.11 <br></br>
                            Jakarta 14240

                           </a>
                       </div>
                       <div className="text-3xl font-bold mb-4 mt-5">SINGAPORE</div>
                       <div className="grid grid-cols-2 gap-3" style={{
                           gridTemplateColumns: "25px auto", 
                       }}>
                           <div>
                               <img alt="img" src={IconSingapure} width="25" height="25"></img>
                           </div>
                           <span className="whitespace-pre-wrap">
                            YesDok Pte. Ltd.
                           </span>
                       </div>
                    </div>
                    <div className="flex flex-col text-base p-4">
                       <div className="text-3xl font-bold mb-4">KONTAK</div>
                       <div className="grid grid-cols-2 gap-3" style={{
                           gridTemplateColumns: "25px auto", 
                       }}>
                           <div>
                               <img alt="img" src={Email} width="25" height="25"></img>
                           </div>
                           <span className="whitespace-pre-wrap">
                            Corporate Info : <br></br>
                           <a href="info@yesdok.com">info@yesdok.com</a>
                           </span>
                           <div>
                               <img alt="img" src={Email} width="25" height="25"></img>
                           </div>
                           <span className="whitespace-pre-wrap">
                           Customer Service : <br></br>
                           <a href="help@yesdok.com">help@yesdok.com</a>
                           </span>
                       </div>
                       <div className="text-3xl font-bold mb-4 mt-5">SINGAPORE</div>
                       <div>
                           <div className="flex">
                                <div className="pr-4">
                                    <a href="https://www.facebook.com/yesdok24jam/">
                                        <img alt="img" src={Facebook} width="50" height="50"></img>
                                    </a>
                                </div>
                                <div className="pr-4">
                                    <a href="https://twitter.com/yesdok_id/">
                                        <img alt="img" src={Twitter} width="50" height="50"></img>
                                    </a>
                                </div>
                                <div className="pr-4">
                                    <a href="https://instagram.com/yesdok_id">
                                        <img alt="img" src={Instagram} width="50" height="50"></img>
                                    </a>
                                </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
                <Credit>
                    <div className="lg:container m-auto p-8">
                        <span className="text-xl">
                            COPYRIGHT ©2021 ALL RIGHTS RESERVED BY YesDok
                        </span>
                    </div>
                </Credit>
        </MainFooter>
    )
}

export default FooterContainer