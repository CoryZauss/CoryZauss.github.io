import type { NextPage } from "next";
import { motion, useCycle } from "framer-motion";

const Projects: NextPage = () => {
  return (
    <>
      <div>
        <div className="mb-8 text-center ">Projects</div>

        <motion.div
          className="w-10/12 p-8 mb-16 ml-auto mr-8 border-2 sm:text-2xl rounded-3xl bg-darkfoam h-max lg:text-3xl md:text-2xl xl:text-3xl lg:mr-auto lg:w-8/12"
          whileHover={{
            position: "relative",
            zIndex: 1,
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a className="mb-3 lg:mb-10">
            Hitch: Ride-share application | Full Stack Engineer
          </a>
          <br></br>
          <a className="mb-3">
            Tech Stack: FireBase | Express | React Router| CSS | Material-UI|
            Node.js
          </a>{" "}
          <li className="mb-3">
            Incorporated React Router for navigation and data circulation
            between components Coordinated with Agile team of 4 engineers to
            communicate issues and enhance development speed
          </li>{" "}
          <li className="mb-3">
            {" "}
            Streamlined user interface and experience through integration of
            Material-UI
          </li>
          <li>
            Improved performance through analysis of google lighthouse reports
            and utilization of compression middleware, boosting score from low
            60s to mid 90s
          </li>
        </motion.div>
        <motion.div
          className="w-10/12 p-8 mb-16 ml-auto mr-8 border-2 sm:text-2xl rounded-3xl bg-darkfoam h-max lg:text-3xl md:text-2xl xl:text-3xl lg:mr-auto lg:w-8/12"
          whileHover={{
            position: "relative",
            zIndex: 1,
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a className="mb-3"></a>
          <a className="mb-3">
            Timeless: Restful API and Database for a front end shopping
            application | Systems Design Engineer{" "}
          </a>
          <br></br>
          <a className="mb-3">
            Tech Stack: Postgres | Express | Docker | AWS | Node.js{" "}
          </a>{" "}
          <li className="mb-3">
            Designed a system that successfully cleansed and loaded over 52
            million records of data into a SQL database on an EC2 instance built
            in Node.js modules and with SQL querying
          </li>
          <li className="mb-3">
            Identified slow queries and bottlenecks and improved query time from
            9 seconds down to 10ms by analyzing query plans and applying
            indexing to lookups values
          </li>
          <li className="mb-3">
            {" "}
            Engineered and dockerized a RESTful API handling up to 400 requests
            per second without a load balancer and deployed service to an EC2
            instance
          </li>
        </motion.div>
        <motion.div
          className="w-10/12 p-8 mb-10 ml-auto mr-8 border-2 sm:text-2xl rounded-3xl bg-darkfoam h-max lg:text-3xl md:text-2xl xl:text-3xl lg:mr-auto lg:w-8/12"
          whileHover={{
            position: "relative",
            zIndex: 1,
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a className="mb-3"></a>
          <a className="mb-3">
            Timeless: Front-end e-commerce application | Front-End Engineer
          </a>
          <br></br>
          <a className="mb-3">Tech Stack: React, Express</a>
          <li className="mb-3">
            Implemented a custom carousel using React with no reliance on third
            party libraries{" "}
          </li>
          <li className="mb-3">
            Designed navigational components using dom events allowing easy
            traversal of application
          </li>
          <li className="mb-3">
            Organized asynchronous RESTful api calls to facilitate initial data
            for multiple components
          </li>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
