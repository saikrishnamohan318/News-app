import React, { useState } from "react";

function Blogform({ showForm }){
    const [formData,setFormData] = useState({
        name: '',
        description: '',
        url: ''
    });

    //posting data to mongodb database
    var postData = (e) => {
        e.preventDefault();
        fetch('https://guvi-backend.vercel.app/postBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                description: formData.description,
                url: formData.url
            })
        })
        alert("Created successfully");
        showForm();
    }
    
    //backbutton from blog form to news page
    var goBack = () => {
        showForm();
    }
    return(
        <div className="blogdiv">
            <h1 style={{textAlign:"center"}}>Blog form</h1>
            <form className="blogform">
                <input type="date" />
                <input type="text" placeholder="Title" onChange={e=>setFormData({...formData, name: e.target.value})} value={formData.name}/><br/>
                <textarea placeholder="Description" rows="4" cols="50" onChange={e=>setFormData({...formData, description: e.target.value})} value={formData.description}></textarea><br/>
                <input type="url" placeholder="Full article link" onChange={e=>setFormData({...formData, url: e.target.value})} value={formData.url}/><br/>
                <button onClick={postData} className="bfbtn">Create</button>
                <button className="bfbtn" onClick={goBack} style={{marginLeft:"10px"}}>Go Back</button>
            </form>
        </div>
    )
}
export default Blogform;