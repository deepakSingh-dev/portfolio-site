const Home = () => {
  return (
    <div
      name="home"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.png')" }} // Background image
    >
      {/* Left Side Text */}
      <div className="flex flex-col text-center md:text-left justify-center items-start w-full h-full px-60">
        <h1
          className="text-4xl sm:text-6xl font-bold text-[#52e0ff]"
          style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.8)" }}
        >
          Deepak Singh
        </h1>
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#52e0ff] mt-2"
          style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.6)" }}
        >
          New York, USA
        </h2>
        <p
          className="text-[#b0eaff] py-4 max-w-[700px] text-base sm:text-lg mx-auto md:mx-0"
          style={{ textShadow: "0 0 6px rgba(0, 255, 255, 0.6)" }}
        >
          Master's in Information Systems @ Stevens Institute of Technology
          <br />
          Master's in Financial Engineering @ WorldQuant University
          <br />
          Ex - Software Development Engineer @ RobotSpace
          <br />
          Ex - Associate Software Developer @ GKB Labs
          <br />
          Bachelor's in Computer Science Engineering
        </p>
      </div>

      {/* Right Side Image */}
      <div className="absolute bottom-0 right-0 w-full md:w-auto h-auto flex justify-end items-end">
        <img
          src="/me.png"
          alt="Profile"
          className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-cover shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
