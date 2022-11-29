import React from "react";

function NewsPageComponent({ newsData,showForm }){
    const data = newsData
    return(
        <>
        <div className="newspage mt-4">
            {data ? data.map((article,index)=>(
                <div className="card" key={index}>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{article.name}</h5>
                        <p className="card-text">{article.description}</p>
                        <a href={article.url} className="btn btn-primary" target='_blank'>Read Full article</a>
                    </div>
                </div>
            )) : <p className="dnf">Data not found</p>}
        </div>
        </>
    )
}
export default NewsPageComponent;