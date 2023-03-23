import React from 'react'
import "./Banner.css"
import {db} from '../../config/firebaseConfig'
//need functions from firestore
import {collection, getDocs, query, orderBy, limit} from 'firebase/firestore'



//this component will show 5 most recent articles
function Banner() {

    //create state
    const [mainArticle, setMainArticle] = React.useState('')
    const [otherArticles, setOtherArticles] = React.useState([])

    //get data when page loads
    React.useEffect(
        ()=>{
            //make a reference to articles collection
            const articleRef = collection(db, 'articles')

            //set up query to filter the data
            const q =query(articleRef, orderBy("createdAt","desc"), limit(5))

            //retrieve docs from this collection
            getDocs(q,articleRef)
            .then(res =>{
                console.log(res.docs[0].data())

                const articles = res.docs.map(item =>(
                    {
                        id: item.id,
                        ...item.data()
                    }
                ))
                console.log (articles)
                //store in state
                setMainArticle(articles[0])
                //put the rest in the otherArticles
                setOtherArticles(articles.splice(1))
            })
            .catch(err=> console.log(err))

        }, []
    )
  return (
    <div className='banner-container'>
        <div className='main-article-container'
        style={{backgroundImage:`url(${mainArticle?.imageUrl})`}}>
            <h2>{mainArticle?.title}</h2>
            <p>{mainArticle?.createdAt?.toDate().toDateString()}</p>

        </div>
        <div className='other-articles-container'>
            {
                otherArticles.map(item =>(
                    <div className="other-article-item" style={{backgroundImage:`url(${item?.imageUrl})`}}>
                        <div className='banner-info'>
                            <h3>{item?.title}</h3>
                            <small>{mainArticle?.createdAt?.toDate().toDateString()}</small>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Banner