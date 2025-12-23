import React, { useState, useEffect } from 'react';

import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Award, ChevronDown, GraduationCap, Calendar, MapPin, Download, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Gestion des Tests - Sagemcom",
      description: "Application web complète pour la gestion et le stockage des traces des tests réalisés sur des produits électroniques avec interface intuitive",
      tech: ["Angular 17", ".NET 7", "MySQL", "TypeScript"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "FlashMind Quiz",
      description: "Plateforme de quiz interactive en temps réel similaire à Kahoot, permettant de créer et participer à des quiz multijoueurs engageants",
      tech: ["springboot", "MySQL" , "ReactJs"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "WebMaster Pro",
      description: "Outil d'analyse de sécurité web qui détecte automatiquement les vulnérabilités de sécurité des sites web et génère des rapports détaillés",
      tech: ["springboot", "MySQL" ],
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const experiences = [
    {
      title: "Stage de pefectionnement",
      company: "Sagemcom Tunisie",
      period: "Janvier 2025 - Février 2025",
      location: "Borj Ghorbel, Ben Arous",
      description: "Développement d'une application web complète pour la gestion et le stockage des traces des tests sur produits électroniques",
      achievements: [
        "Application Angular 17 et .NET 7",
        "Interface intuitive pour visualiser et organiser les données",
        "Base de données MySQL optimisée",
        "Respect des exigences de performance et sécurité"
      ]
    },
    {
      title: "Stage d'Initiation",
      company: "Tunisie Booking",
      period: "Janvier 2024 - Février 2024",
      location: "Djerba, Houmet Essouk",
      description: "Stage d'initiation au développement web et découverte du monde professionnel",
      achievements: [
        "Découverte des technologies web modernes",
        "Participation aux projets d'équipe",
        "Apprentissage des méthodologies agiles"
      ]
    }
  ];

  const education = [
    {
      degree: "Licence en Technologie de l'Informatique",
      school: "Institut Supérieur des Études Technologiques",
      period: "En cours",
      location: "Sousse, Tunisie",
      description: "Spécialité Développement de Systèmes d'Information",
      honors: "En cours de formation"
    },
    {
      degree: "Baccalauréat Mathématiques",
      school: "Lycée Ibn Arafa",
      period: "2023",
      location: "Houmet Essouk, Djerba",
      description: "Formation en sciences mathématiques",
      honors: "Mention Assez Bien"
    }
  ];

  const skills = [
    { name: "Angular 17", level: 90, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: ".NET 8", level: 88, category: "Backend" },
    { name: "Spring Boot", level: 80, category: "Backend" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "MySQL / PostgreSQL", level: 85, category: "Database" },
    { name: "Android", level: 75, category: "Mobile" },
    { name: "Symfony", level: 70, category: "Backend" }
  ];

  const certifications = [
    "Licence en Développement de Systèmes d'Information",
    "Baccalauréat Mathématiques",
    "Stage Professionnel - Sagemcom Tunisie",
    "Compétences en Travail d'Équipe"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        ></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl top-1/4 right-1/4 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl bottom-1/4 left-1/4 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Amen Allah EL AZZOUNI
          </h1>
          <div className="hidden md:flex gap-4 lg:gap-8">
            {['Accueil', 'Projets', 'Expérience', 'Éducation', 'Compétences', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-all duration-300 relative group text-sm lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-purple-400 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
        <div className="text-center relative z-10 max-w-5xl w-full">
          <div className="mb-6 sm:mb-8 relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold shadow-2xl shadow-purple-500/50 animate-pulse">
              AE
              <img src="" alt="" srcset="" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          
          <div className="mb-4">
            <span className="inline-block bg-purple-500/20 border border-purple-500/50 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
              <Rocket className="inline mr-2" size={16} />
              Disponible pour de nouvelles opportunités
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight px-4">
            Développeur Full Stack
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 font-light px-4">
            Étudiant en Informatique & Développeur Full Stack
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Passionné par le développement de solutions technologiques innovantes. Expérience pratique en Angular, .NET, React et développement mobile Android. Motivé à contribuer à des projets ambitieux et collaboratifs.
          </p>
          
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <a href="#projets" className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Briefcase size={18} />
              Mes projets
            </a>
            <a href="#contact" className="border-2 border-purple-400 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-purple-400/10 transition-all duration-300 flex items-center gap-2">
              <Mail size={18} />
              Contact
            </a>
            <a href="CV_amen_allah_el_azzouni.pdf" className="border-2 border-gray-600 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-600/10 transition-all duration-300 flex items-center gap-2">
              <Download size={18} />
              CV
            </a>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-20 animate-bounce">
            <ChevronDown className="mx-auto text-purple-400" size={32} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projets Réalisés
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Des solutions innovantes qui font la différence</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-500 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-purple-500 to-pink-500"></div>
                
                <div className={`h-32 sm:h-40 md:h-48 bg-gradient-to-br ${project.gradient} rounded-2xl mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Code size={48} className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-purple-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold group text-sm sm:text-base">
                  Voir le projet 
                  <ExternalLink size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="expérience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-900/30 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expérience Professionnelle
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Mon parcours dans le développement web</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-12 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-6 top-6 w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full border-4 border-slate-950 shadow-lg shadow-purple-500/50"></div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-purple-400">{exp.title}</h3>
                        <p className="text-lg sm:text-xl text-gray-300 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm sm:text-base">
                          <Calendar size={14} className="sm:w-4 sm:h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                          <MapPin size={14} className="sm:w-4 sm:h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">Réalisations clés:</p>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span className="text-gray-300 text-sm sm:text-base">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="éducation" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Formation Académique
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Mon parcours éducatif et certifications</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl flex-shrink-0">
                    <GraduationCap size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-1">{edu.degree}</h3>
                    <p className="text-base sm:text-lg text-gray-300 font-semibold">{edu.school}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="sm:w-4 sm:h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-3 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                
                <div className="inline-block bg-purple-500/20 border border-purple-500/50 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-purple-300">
                  {edu.honors}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-purple-400" size={24} />
              Certifications Professionnelles
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-700/30 p-3 sm:p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm sm:text-base">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compétences Techniques
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Technologies que je maîtrise</p>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-bold text-base sm:text-lg">{skill.name}</span>
                    <span className="text-xs bg-purple-500/20 px-2 sm:px-3 py-1 rounded-full text-purple-300">{skill.category}</span>
                  </div>
                  <span className="text-purple-400 font-bold text-base sm:text-lg">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-3 sm:h-4 overflow-hidden backdrop-blur-sm border border-slate-600">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-full rounded-full transition-all duration-1000 relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Travaillons Ensemble
            </h2>
            <p className="text-gray-400 text-lg">Une idée de projet ? Une opportunité ? Contactez-moi !</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20 mb-12">
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              Je suis toujours à la recherche de nouveaux défis passionnants et d'opportunités de collaboration. 
              N'hésitez pas à me contacter pour discuter de votre projet !
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:amenallahelazzouni@gmail.com" className="bg-slate-700/50 p-6 rounded-2xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 border border-purple-500/20 hover:border-purple-500">
                <Mail size={32} />
              </a>
              <a href="https://github.com/Amenallah25951" className="bg-slate-700/50 p-6 rounded-2xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 border border-purple-500/20 hover:border-purple-500">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/amen-allah-el-azzouni-9266032b5" className="bg-slate-700/50 p-6 rounded-2xl hover:bg-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 border border-purple-500/20 hover:border-purple-500">
                <Linkedin size={32} />
              </a>
            </div>
            
            <a
              href="mailto:amenallahelazzouni@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={24} />
              Envoyez-moi un message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-8 text-center text-gray-400 border-t border-purple-500/20">
        <p className="mb-2">© 2025 Amen Allah EL AZZOUNI. Conçu et développé avec passion ❤️</p>
        <p className="text-sm">Djerba, Tunisie | amenallahelazzouni@gmail.com</p>
      </footer>
    </div>
  );
}