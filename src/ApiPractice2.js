import React, {useState, useEffect} from 'react';

const ApiPractice2 = ()=>{
    const [websites, setWebsites] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(
        ()=>{
            const fetchWebsite = async()=>{
                try {
                    const response = await fetch("www.somethingwebsitelist.com/api/websites");
                    if(!response.ok)
                    {
                        throw new Error("Failed to fetch website");
                    }
                    const data = await response.json();
                    setWebsites(data);
                    
                } catch (error) {
                    console.log("Error in fetching website",error);
                }
                finally{
                    setLoading(false);
                }
            };
            fetchWebsite();
        },[]);

        if(loading)
        {
            <p>Loading is continue</p>
        }


    return(
        <div>
            <h1>Best Website List</h1>
            <h3>Ram bhadur is god</h3>
            <ul>
                {websites.map((website)=>(
                        <li key={website.id}>{website.title}</li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ApiPractice2;
