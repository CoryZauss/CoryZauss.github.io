import type { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <>
      <div>
        <div className="mb-5 text-4xl text-center">TECHNICAL SKILLS</div>
        <div className="mb-2 lg:mb-4">
          <a className="text-white">Front End |</a>
          <a className="text-foam">
            {" "}
            JavaScript (ES5/ES6), React.js, HTML5, CSS3, jQuery, React-router,
            Material-UI, AJAX, Next.js
          </a>
        </div>
        <div className="mb-2 lg:mb-4">
          <a> Back End | </a>
          <a className="text-miami">
            Node.js, Express, MongoDB, MySQL, PostgreSQL
          </a>
        </div>
        <div className="mb-2 lg:mb-4">
          <a className="text-white"> Testing/Deployment | </a>
          <a className="text-foam">
            {" "}
            AWS, Docker, Jest, Mocha, Chai, Lighthouse
          </a>
        </div>
        <div className="mb-2 lg:mb-4">
          <a className="text-white">Developer Tools |</a>
          <a className="text-miami"> Git, npm, Webpack, Babel, Postman</a>
        </div>
      </div>
    </>
  );
};

export default Resume;
