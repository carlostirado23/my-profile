const Skills = () => {
  const skills = [
    'JavaScript',
    'React', 
    'Postgres',
    'Node.js',
    'Tailwind 4',
    'CSS',
    'HTML',
    'Git',
    'Go'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Habilidades
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-badge animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;