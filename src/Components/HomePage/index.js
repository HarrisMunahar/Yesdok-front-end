import { Link } from "react-router-dom";
import styled from "styled-components"
import media from "styled-media-query";
import { ArtikelNew } from "../../Data/jsonArticle";

const Banner = styled.div `
    min-height: 720px;
    grid-template-columns: 40vh 45vh auto;

    ${media.lessThan("large")`
        grid-template-columns: none;
  `}
`
const Title = styled.div `
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
`

const NewArtikel = styled.div `
    grid-template-columns: auto auto;

    ${media.lessThan("large")`
        grid-template-columns: none;
    `}

`

const NewImage = styled.img `
    ${media.lessThan("large")`
       width: 100%;
       height: 20rem
    `}
`

const  MainArtikel = styled.div `
    grid-template-columns: auto 500px;
    ${media.lessThan("large")`
        grid-template-columns: none;
    `}
`
const SectionBanner = () => {
    return (
        <Banner 
            className="grid md:grid-rows-3 md:grid-cols-none lg:grid-cols-3 lg:grid-rows-none gap-6"
        >
            {
                ArtikelNew.slice(0,3).map((v,k) => {

                    let url = '/article/' + v.title.toLowerCase().replace(/ /g, '-')
                    
                    return k === 0 ? (
                        <div key={k}
                            className="h-full lg:col-span-2 lg:row-span-2 rounded-xl px-10 py-8 flex justify-end flex-col" 
                            style={{
                                backgroundImage: `url(${v.image_url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="flex flex-col">
                                <div className="flex mb-4">
                                    <Link to={url} className="py-2 px-4 bg-yellow-500 rounded-xl">
                                        {v.categories}
                                    </Link>
                                </div>
                                <Link to={url}>
                                    <Title className="text-xl lg:text-3xl bg-white inline color-title whitespace-pre-wrap" style={{
                                        lineHeight: "50px",
                                        padding: "0.5rem 0.75rem"
                                    }}>{v.title}</Title>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div key={k}
                            className="h-full rounded-xl flex justify-end flex-col px-10 py-8"
                            style={{
                                backgroundImage: `url(${v.image_url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="flex mb-4">
                                <a href="/" className="py-2 px-4 bg-yellow-500 rounded-xl">
                                    {v.categories}
                                </a>
                            </div>
                            <Link href={'/' + url}>
                                <Title className="text-xl lg:text-2xl bg-white inline color-title whitespace-pre-wrap" style={{
                                    lineHeight: "50px",
                                    padding: "0.5rem 0.75rem"
                                }}>{v.title}</Title>
                            </Link>
                        </div>
                    )
                })
            }
        </Banner>
    )
}

const ArtikelTerbaru = (e) => {
    return (
        <div>
            <div className="color-title text-2xl font-bold">Artikel Terbaru</div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-1 gap-4">
                {
                    ArtikelNew.map((v,k) => {
                        let url = '/article/' + v.title.toLowerCase().replace(/ /g, '-')

                        return (
                            <NewArtikel key={k} className="md:grid  grid-cols-2 py-3">
                                <NewImage 
                                    className="w-64 h-44 rounded-lg"
                                    style={{
                                        backgroundImage:`url(${v.image_url})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                </NewImage>
                                <div className="flex">
                                    <div className="flex-col flex">
                                        <div className="pl-5 py-2 flex justify-between flex-col">
                                            <div>
                                                <Link to={url} className="text-2xl color-title font-semibold">{v.title}</Link>
                                                <p className="text-lg text-black mt-3">{v.description}</p>
                                            </div>
                                            <div className="flex mt-4">
                                                <Link to={url} className="bg-category  px-6 py-2 rounded-full text-category flex justify-center items-center">{v.categories}</Link>
                                                <div className="color-title border border-color block px-6 py-2 rounded-full ml-3">{v.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NewArtikel>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ArtikelPopuler = () => {
    return (
        <div>
            <div className="color-title text-2xl font-bold">Artikel Populer</div>
            {
                ArtikelNew.map((v,k) => {
                    let url = '/article/' + v.title.toLowerCase().replace(/ /g, '-')

                    return (
                        <div key={k} className="md:grid md:grid-cols-2 py-3" style={{
                            gridTemplateColumns: "auto auto"
                        }}>
                            <div 
                                className="w-full md:w-44 h-44 rounded-lg"
                                style={{
                                    backgroundImage:`url(${v.image_url})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                            </div>
                            <div className="md:flex">
                                <div className="pl-5 py-2 flex justify-between flex-col">
                                    <div>
                                        <Link to={url} className="text-2xl color-title font-semibold">{v.title}</Link>
                                    </div>
                                    <div className="flex mt-4">
                                        <Link to={url} className="bg-category px-6 py-2 rounded-full text-category flex justify-center items-center">{v.categories}</Link>
                                        <div className="color-title border border-color block px-6 py-2 rounded-full ml-3">{v.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ArtikelBottom = () => {
    return (
        <div className="mt-10">
            <MainArtikel className="md:grid xl:grid-cols-2 gap-6">
                <ArtikelTerbaru></ArtikelTerbaru>
                <ArtikelPopuler></ArtikelPopuler>
            </MainArtikel>
        </div>
    )
}

const MainSection = () => {
    return (
        <div className="xl:container p-4 m-auto" id="page-wrap">
            <SectionBanner></SectionBanner>
            <ArtikelBottom></ArtikelBottom>
        </div>
    )
}

export { MainSection }