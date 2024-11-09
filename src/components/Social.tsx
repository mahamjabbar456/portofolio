import Link from "next/link";
import { ComponentType } from "react";
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";
interface link {
    icons: ComponentType;
    path:string;
}

const social:link[] = [
    {icons: FaLinkedin,
     path:"https://www.linkedin.com/in/maham-jabbar-976229294/"
    },
    {
      icons: FaGithub,
      path:"https://github.com/mahamjabbar456",
    },
    {
        icons: FaTwitter,
        path:""
    }
]

interface socialProps {
    containerStyle:string;
    iconStyle:string;
}

const Social: React.FC<socialProps> = ({containerStyle, iconStyle}) => {
    console.log();
  return (
    <div className={containerStyle}>
      {social.map((item,index)=>{
        return(
            <Link href={item.path} key={index} target="_blank" className={iconStyle}>{<item.icons />}</Link>
        )
      })}
    </div>
  )
}

export default Social
