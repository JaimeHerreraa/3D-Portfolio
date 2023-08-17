import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { courses } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Featuring Enrolled courses</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {courses.map((course, index) => {
            return <CerticateCard key={index} course={course} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

const CerticateCard = ({ course }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={course.date}
      iconStyle={{ background: course.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={course.icon}
            alt={course.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <a
          href={course.course_link}
          target="_blank"
          className="text-white text-[24px] font-bold hover:underline"
        >
          {course.title}
        </a>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {course.company_name}
        </p>
        <p className="text-white-100 text-[14px] pl-1 tracking-wider">
          {course.description}
        </p>
        <p className="text-secondary">
          Credential ID:&nbsp;{course.credentialID}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export default SectionWrapper(Certificate, "certificate");
