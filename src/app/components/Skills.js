import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostgresql, SiOracle, SiRedis, SiApachekafka, SiTailwindcss, SiDjango, SiFlask, SiSpring, SiLaravel, SiFigma, SiAngular, SiVueDotJs, SiNextdotjs, SiSvelte, SiJquery, SiRabbitmq, SiPostman, SiSelenium, SiJira, SiDocker } from 'react-icons/si';
import { MdOutlineApi } from 'react-icons/md';

const Skills = () => {
  const skillSections = [
    {
      category: 'Programming',
      skills: [
        { name: 'Python', icon: <FaPython className="w-20 h-20 mx-auto text-blue-500" /> },
        { name: 'Java', icon: <FaJava className="w-20 h-20 mx-auto text-red-500" /> },
        { name: 'C++', icon: <FaJsSquare className="w-20 h-20 mx-auto text-blue-400" /> },
        { name: 'PHP', icon: <FaPhp className="w-20 h-20 mx-auto text-purple-500" /> },
      ],
    },
    {
      category: 'Web & Front-End',
      skills: [
        { name: 'JavaScript', icon: <FaJsSquare className="w-20 h-20 mx-auto text-yellow-500" /> },
        { name: 'TypeScript', icon: <FaJsSquare className="w-20 h-20 mx-auto text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-20 h-20 mx-auto text-green-500" /> },
        { name: 'React.js', icon: <FaReact className="w-20 h-20 mx-auto text-blue-300" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-20 h-20 mx-auto text-gray-300" /> },
        { name: 'RESTful APIs', icon: <MdOutlineApi className="w-20 h-20 mx-auto text-green-400" /> },
        { name: 'jQuery', icon: <SiJquery className="w-20 h-20 mx-auto text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-20 h-20 mx-auto text-blue-400" /> },
        { name: 'HTML5', icon: <FaHtml5 className="w-20 h-20 mx-auto text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="w-20 h-20 mx-auto text-blue-500" /> },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="w-20 h-20 mx-auto text-blue-500" /> },
        { name: 'Oracle SQL', icon: <SiOracle className="w-20 h-20 mx-auto text-red-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-20 h-20 mx-auto text-blue-400" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-20 h-20 mx-auto text-green-600" /> },
        { name: 'Redis', icon: <SiRedis className="w-20 h-20 mx-auto text-red-500" /> },
        { name: 'Apache Spark', icon: <SiApachekafka className="w-20 h-20 mx-auto text-orange-500" /> },
      ],
    },
    {
      category: 'Software and Tools',
      skills: [
        { name: 'RabbitMQ', icon: <SiRabbitmq className="w-20 h-20 mx-auto text-orange-500" /> },
        { name: 'Postman API', icon: <SiPostman className="w-20 h-20 mx-auto text-orange-400" /> },
        { name: 'Selenium', icon: <SiSelenium className="w-20 h-20 mx-auto text-green-400" /> },
        { name: 'Docker', icon: <SiDocker className="w-20 h-20 mx-auto text-blue-500" /> },
        { name: 'Jira', icon: <SiJira className="w-20 h-20 mx-auto text-blue-400" /> },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'Angular', icon: <SiAngular className="w-20 h-20 mx-auto text-red-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-20 h-20 mx-auto text-gray-300" /> },
        { name: 'Django', icon: <SiDjango className="w-20 h-20 mx-auto text-green-500" /> },
        { name: 'Flask', icon: <SiFlask className="w-20 h-20 mx-auto text-gray-400" /> },
        { name: 'React Native', icon: <FaReact className="w-20 h-20 mx-auto text-blue-300" /> },
        { name: 'Svelte', icon: <SiSvelte className="w-20 h-20 mx-auto text-orange-500" /> },
        { name: 'Express', icon: <FaNodeJs className="w-20 h-20 mx-auto text-green-500" /> },
        { name: 'Spring', icon: <SiSpring className="w-20 h-20 mx-auto text-green-400" /> },
        { name: 'Laravel', icon: <SiLaravel className="w-20 h-20 mx-auto text-red-500" /> },
        { name: 'Figma', icon: <SiFigma className="w-20 h-20 mx-auto text-purple-500" /> },
      ],
    },
  ];

  return (
    <div name='skills' className='px-56 h-auto bg-[#0a192f] text-gray-300'>
      <div className='py-20 px-10 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        {skillSections.map((section, index) => (
          <div key={index} className='my-8'>
            <h3 className='text-2xl font-bold mb-4'>{section.category}</h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
              {section.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                >
                  {skill.icon}
                  <p className='my-4'>{skill.name.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
