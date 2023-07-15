const linkedin = require( "../assets/linkedin.png");
const git = require( "../assets/git.png");
const instagram = require( "../assets/instagram.png");
const twitter =require( "../assets/twitter.png");
const SocialMediaIcons =()=>{
return(
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/sanjay-kumar1999"
        target="_blank"
        rel="noreferrer"
        >
            <img src={linkedin} alt="linkedin-link" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
        href="https://github.com/sanjay94871"
        target="_blank"
        rel="noreferrer"
        >
            <img src={git} alt="git-link" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/s.a_n_j_a.y"
        target="_blank"
        rel="noreferrer"
        >
            <img src={instagram} alt="instagram-link" />

        </a>

        <a className="hover:opacity-50 transition duration-500"
        href=""
        target="_blank"
        rel="noreferrer"
        >
            <img src={twitter} alt="twitter-link" />

        </a>

    </div>
)
}

export default SocialMediaIcons;
