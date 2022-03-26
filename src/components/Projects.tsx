import type { NextPage } from "next";
import { motion } from "framer-motion";

const Projects: NextPage = () => {
  return (
    <motion.div>
      <div className="text-center">Projects</div>
      <div>
        Hitch: Ride-share application | Full Stack Engineer
        <li>
          Tech Stack: FireBase | Express | React Router| CSS | Material-UI|
          Node.js
        </li>{" "}
        <li>
          Incorporated React Router for navigation and data circulation between
          components Coordinated with Agile team of 4 engineers to communicate
          issues and enhance development speed
        </li>{" "}
        <li>
          {" "}
          Streamlined user interface and experience through integration of
          Material-UI
        </li>
        <li>
          Improved performance through analysis of google lighthouse reports and
          utilization of compression middleware, boosting score from low 60s to
          mid 90s
        </li>
      </div>
      <div>
        Timeless: Restful API and Database for a front end shopping application | Systems
        Design Engineer{" "}
        <li>Tech Stack: Postgres | Express | Docker | AWS | Node.js </li>{" "}
        <li>
          Designed a system that successfully cleansed and loaded over 52
          million records of data into a SQL database on an EC2 instance built
          in Node.js modules and with SQL querying
        </li>
        <li>
          Identified slow queries and bottlenecks and improved query time from 9
          seconds down to 10ms by analyzing query plans and applying indexing to
          lookups values
        </li>
        <li>
          {" "}
          Engineered and dockerized a RESTful API handling up to 400 requests
          per second without a load balancer and deployed service to an EC2
          instance
        </li>
      </div>
      <div>
        Timeless: Front-end e-commerce application | Front-End Engineer
        <li>Tech Stack: React, Express</li>
        <li>
          Implemented a custom carousel using React with no reliance on third
          party libraries{" "}
        </li>
        <li>
          Designed navigational components using dom events allowing easy
          traversal of application
        </li>
        <li>
          Organized asynchronous RESTful api calls to facilitate initial data
          for multiple components
        </li>
      </div>
    </motion.div>
  );
};

export default Projects;
