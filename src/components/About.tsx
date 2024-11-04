const About: React.FC = () => {
  const techStack = [
    { icon: "html.svg", name: "HTML" },
    { icon: "css.svg", name: "CSS" },
    { icon: "javascript.svg", name: "JavaScript" },
    { icon: "typescript.svg", name: "TypeScript" },
    { icon: "less.svg", name: "LESS" },
    { icon: "sass.svg", name: "SCSS/SASS" },
    { icon: "react.svg", name: "React" },
    { icon: "nextjs.svg", name: "Next.js" },
    { icon: "tailwind.svg", name: "Tailwind CSS" },
    { icon: "angular.svg", name: "Angular" },
    { icon: "angular-material.svg", name: "Angular Material" },
    { icon: "bootstrap.svg", name: "Bootstrap" },
    { icon: "antdesign.svg", name: "Ant Design" },
    { icon: "mui.svg", name: "Material-UI" },
    { icon: "jquery.svg", name: "jQuery" },
    { icon: "shadcn.svg", name: "shadcn/ui" },
    { icon: "php.svg", name: "PHP" },
    { icon: "laravel.svg", name: "Laravel" },
    { icon: "java.svg", name: "Java" },
    { icon: "csharp.svg", name: "C#" },
    { icon: "mysql.svg", name: "MySQL" },
    { icon: "sqlserver.svg", name: "SQL Server" },
    { icon: "github.svg", name: "GitHub" },
    { icon: "gitlab.svg", name: "GitLab" },
    { icon: "figma.svg", name: "Figma" },
    { icon: "postman.svg", name: "Postman" },
    { icon: "unity.png", name: "Unity" },
  ];
  return (
    <section className="py-12 px-6 lg:px-12 mt-[15%] lg:mt-[5%]">
      <div className="mx-auto max-w-screen-lg px-4 lg:px-8 py-8l">
        <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2 text-shadow">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed flex-1">
            <li>
              I am a junior front-end developer with over six months of hands-on
              experience in creating responsive and user-friendly web
              applications.
            </li>
            <li>
              My analytical mindset helps me approach problems logically,
              ensuring efficient solutions and high-quality code.
            </li>
            <li>
              As a perfectionist, I pay close attention to detail, especially in
              user interface design, and I constantly analyze user behavior to
              enhance the user experience.
            </li>
            <li>
              I am open-minded and eager to learn new technologies, always
              striving to grow in this dynamic field.
            </li>
          </ul>
          <div className="flex-1 flex justify-center items-center ">
            <div className="relative shadow-[0_0_60px_#0003,0_30px_80px_#00000080] backdrop-filter-none outline outline-1 outline-offset-[-1px] outline-[#f2f2f226] bg-gradient-radial from-[#f2f2f233] to-transparent rounded-full p-2 overflow-hidden w-fit h-fit">
              <img
                src="/assets/self.png"
                alt="Me"
                className="size-64 lg:size-96 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="bg-gray-800 p-4 rounded-md mb-4">
            <h4 className="text-xl font-semibold">
              Bachelor of Software Engineering
            </h4>
            <p className="text-sm text-gray-400">FPT University, 2019 - 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                I developed strong English skills during my four years at FPT
                University in Ho Chi Minh City, Vietnam, using English
                extensively for exams, presentations, and technical
                documentation.
              </li>
              <li>
                I am proficient in writing clear, detailed reports and reading
                complex materials in English, preparing me well for professional
                written communication.
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <h4 className="text-xl font-semibold">IELTS 5.5</h4>
            <p className="text-sm text-gray-400">British Council, 2019</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                Proficient in reading and writing technical documentation.
              </li>
              <li>
                Skilled in speaking, active listening, and note-taking during
                client discussions.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <p className="text-gray-400">
            Here’s a peek into my toolbox—everything I use to craft engaging and
            responsive front-end experiences.
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`/assets/tech/${tech.icon}`}
                  alt={`${tech.name} icon`}
                  className="w-auto h-12 mb-2"
                />
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
