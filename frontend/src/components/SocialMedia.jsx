import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/xtech404'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/aramistaa/'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href='https://github.com/Aram-961'>
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
