import ArticleFull from "../../Data/jsonFullArticle"
import parse from 'html-react-parser';
import { useHistory } from "react-router-dom";
import { ArtikelNew } from "../../Data/jsonArticle";
import { useEffect, useState } from "react";



const ArtiketTerkait = (props) => {
    return (
        <div className="my-8">
            <div className="color-title text-2xl font-bold">Artikel Terkait </div>
            {
                ArtikelNew.map((v,k) => {
                    let url = '/article/' + v.title.toLowerCase().replace(/ /g, '-')
                    if (v.categories === props.categories.categories && v.title !== props.categories.title ) {
                        return (
                            <div key={k} className="md:grid md:grid-cols-2 py-3" style={{
                                gridTemplateColumns: "176px auto"
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
                                    <div className="pl-5 py-2 flex justify-between flex-col text-base">
                                        <div>
                                            <a href={url} className="text-2xl color-title font-semibold">{v.title}</a>
                                        </div>
                                        <div className="flex mt-4">
                                            <a href={url} className="bg-category px-6 py-2 rounded-full text-category flex justify-center items-center text-white">{v.categories}</a>
                                            <div className="color-title border border-color block px-6 py-2 rounded-full ml-3">{v.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return false
                })
            }
        </div>
    )
}


const ArticleContainer = () => {
    let history = useHistory().location.pathname.replace('/article/','');

    const [Article] = useState(ArticleFull)
    const [Category, setCategory] = useState({
        title: null,
        categories: null
    })

    useEffect(() => {
        Article.map((v) => {
            let url =  v.title.toLowerCase().replace(/ /g, '-')
            if(url === history) {
                setCategory({
                    title: v.title,
                    categories: v.categories,
                })
            }
            return false
        })
    }, [Article, history])

    return (
        <div className="lg:container p-7 m-auto text-black">
            <div className="m-auto text-lg" style={{
                maxWidth: '90vh'
            }}>
                {
                    Article.map((v,k) => {
                        let url =  v.title.toLowerCase().replace(/ /g, '-')
                        
                        if(url === history) {
                            document.title = v.title
                            
                            return (
                                <div key={k}>
                                    <div>
                                        <img className="w-full mb-8" alt="img" src={v.image_url}></img>
                                    </div>
                                    <div className="flex text-base justify-between">
                                        <div className="py-2 px-4 text-white bg-category">
                                            {v.categories}
                                        </div>
                                        <div className="py-2 px-4 color-title border">
                                            {v.date}
                                        </div>
                                    </div>
                                    <div className="color-title text-4xl font-bold py-4">
                                        {v.title}
                                    </div>
                                    {parse(v.description)}
                                </div>
                            )
                        }

                        return false
                    })
                }
            <ArtiketTerkait categories={Category}></ArtiketTerkait>
            </div>
        </div>
    )
}

export default ArticleContainer