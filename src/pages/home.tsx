import {Link} from "react-router-dom"

export default function Home() {

const links:string[]=["hooks","optimization","modules","components","routing"];



  return (
    <>
    <div>
      <p>
        This is a simple home page nothing fancy nothing too much just having
        links
      </p>
      <p>Below we have the topic of links we know and we studied</p>
      <code>
        Note:
        <b>
          We are not focusing on the designing css/tailwind part just learning
          react
        </b>
      </code></div>
      <div>
       {links.map((link,id)=>{
        <Link key={id} to={`/${link}`}>{link}</Link>
       })}

      </div>

    </>
  );
}
