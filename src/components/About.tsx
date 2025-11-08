import { about, testimonials } from "../data/portfolio";

export default function About() {
  return (
    <section className="min-h-screen w-full md:w-4/5 mx-auto flex items-center justify-center px-4 md:px-6 py-20">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-purple-pink mb-8 md:mb-12">
          About Me
        </h2>

        <div className="space-y-6 md:space-y-8">
          {/* Bio */}
          <div className="glass rounded-xl md:rounded-2xl p-4 md:p-8 glass-hover">
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              Hi there 👋, I’m a software engineer mainly focused on mobile
              development, especially native iOS apps. I’m a curious person who
              loves solving real-world problems and diving deep into how things
              work. Since I was a child, I’ve always been fascinated by
              technology — especially computers. I love exploring how things
              work, whether it’s on the hardware side like assembling PC
              components or the software side like writing simple programs. This
              curiosity eventually led me to pursue a career in software
              engineering.
              <br></br>
              <br></br>I began my journey at university, where I learned the
              fundamentals of computer science and programming. During my
              studies, I had the opportunity to join the Apple Developer Academy
              in Batam, where I learned a lot about iOS development using Swift
              and SwiftUI. That experience strengthened my passion for building
              iOS apps, and I decided to focus my career in this field —
              creating mobile applications that can reach millions of users.
              <br></br>
              <br></br>
              Most recently, I worked at Vidio in Jakarta for about three years.
              While it was a great experience, I eventually realized that
              Jakarta wasn’t the right place for me. So, I decided to move back
              to Batam and continue my journey as a freelance iOS developer. I’m
              currently open to remote opportunities around the world.
            </p>
          </div>

          {/* Skills */}
          <div className="glass rounded-xl md:rounded-2xl p-4 md:p-8 glass-hover">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {Object.entries(about.skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[]).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass rounded-full text-sm text-gray-300 hover:border-purple-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="glass rounded-xl md:rounded-2xl p-4 md:p-8 glass-hover">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              What People Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass rounded-lg md:rounded-xl p-4 md:p-6 hover:border-purple-500 transition-colors"
                >
                  <div className="mb-3 md:mb-4">
                    <p className="font-semibold text-white text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
