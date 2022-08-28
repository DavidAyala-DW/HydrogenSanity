import client from "../lib/sanity-client";
import {useQuery} from '@shopify/hydrogen';


export default function Index(props) {  

  const {data} = useQuery(['unique', 'key'], async () => {

    const request = await fetch("https://f4obnjkf.api.sanity.io/v2022-06-29/data/query/production",{
      method: 'POST',

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `*[_type == 'post']`
      })
    })

    const response = request.json();
    console.log(data);
    return await response;
  });

  // const actualPet = data.some( pet => pet?.name?.toLowerCase() == props?.params?.handle);

  return (
    <div>
      <h1>{props.params.handle}</h1>
      <div>
        
      </div>
    </div>    

  );
}
