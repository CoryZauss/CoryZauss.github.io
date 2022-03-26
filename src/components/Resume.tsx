import type { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <>
      <div>
        <div className="mb-5 text-4xl text-center lg:text-6xl">
          TECHNICAL SKILLS
        </div>
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
        <div className="mt-8 mb-4 text-4xl text-center lg:text-6xl">
          Education / Training
        </div>
        <p>
          In 2021 I attended the advanced software engineering immersive program
          called Hack Reactor to accelerate my learning and get a jump on my
          path to becoming a full stack developer.
          <br></br>
          <br></br>
          <p>
            The program was intense, 6 days a week from 9am to 8pm for 14 weeks.
            I learned so much about the engineering world, myself, and how to be
            an autonomous learner and developer. I seek to continue to learn and
            grow my skills over my career and hope to meet some great people
            along the way.
          </p>
        </p>
      </div>
    </>
  );
};

export default Resume;
