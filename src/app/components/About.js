
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="p-8 bg-[#0a192f] min-h-screen flex justify-center">
        <div className="relative w-3/4">
          {/* Vertical Timeline Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-600"></div>

          {/* Timeline Items */}
          
          {/* BTech Education (2018-2022) */}
          <div className="absolute flex items-center justify-start bottom-[0%] left-0 w-full pr-12">
            <div className="w-1/2 h-[190px]  text-left bg-gray-700 p-4 rounded-md shadow-lg">
              <p className="text-white">Bachelor's of Technology in Computer Science (2018 - 2022)</p>
            </div>
          </div>

          {/* GKB Labs Work (2023) */}
          <div className="absolute flex items-center justify-end bottom-[35%] right-0 w-full pl-12">
            <div className="w-1/2 h-[60px] pl-8 text-left bg-gray-700 p-4 rounded-md shadow-lg">
              <p className="text-white">Associate Developer (2022 - 2023)</p>
            </div>
          </div>

          {/* RobotSpace Work (2023-2024) */}
          <div className="absolute flex items-center justify-start bottom-[45%] left-0 w-full pr-12">
            <div className="w-1/2 h-[90px]  text-left bg-gray-700 p-4 rounded-md shadow-lg">
              <p className="text-white">Software Development Engineer (2023 - 2024)</p>
            </div>
          </div>

          {/* Masters Education (2024-2026) */}
          <div className="absolute flex items-center justify-end bottom-[59%] right-0 w-full pl-12">
            <div className="w-1/2 h-[180px] pl-8 text-left bg-gray-700 p-4 rounded-md shadow-lg">
              <p className="text-white">Master's in Information System's (2024 - 2026)</p>
            </div>
          </div>

          {/* Master's 2 Education (2025-2027) */}
          <div className="absolute flex items-center justify-start bottom-[65%] left-0 w-full pr-12">
            <div className="w-1/2 h-[210px] pr-8 text-left bg-gray-700 p-4 rounded-md shadow-lg">
              <p className="text-white">Master's in Financial Engineering (2025 - 2027)</p>
            </div>
          </div>

          {/* Year Markers */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col h-full justify-between text-gray-200">
            <span className="text-sm">2027</span>
            <span className="text-sm">2026</span>
            <span className="text-sm">2025</span>
            <span className="text-sm">2024</span>
            <span className="text-sm">2023</span>
            <span className="text-sm">2022</span>
            <span className="text-sm">2018</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
