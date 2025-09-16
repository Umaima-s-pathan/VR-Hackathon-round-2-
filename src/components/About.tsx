import React from 'react';
import { Brain, Globe, Laptop } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About the VR 180° Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">What is VR 180°?</h3>
              <p className="text-gray-300 leading-relaxed">
                VR 180° represents the evolution of immersive content creation, capturing experiences in a 180-degree field of view with stereoscopic depth. 
                Unlike traditional flat videos, VR 180° content places you directly in the scene, allowing you to look around naturally and feel truly present 
                in the moment. This technology bridges the gap between conventional media and full 360° VR, offering the perfect balance of immersion and comfort.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Transforming Industries</h3>
              <p className="text-gray-300 leading-relaxed">
                From revolutionizing education with virtual field trips to transforming tourism by letting people explore destinations from home, 
                VR 180° is reshaping how we learn, work, and play. Training simulations become more effective, entertainment becomes more engaging, 
                and storytelling reaches new heights of emotional connection. This technology democratizes extraordinary experiences, making them 
                accessible to anyone with a compatible device.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Enhanced Learning</h4>
                <p className="text-gray-300">
                  Immersive educational experiences that increase retention and engagement through spatial learning.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Virtual Tourism</h4>
                <p className="text-gray-300">
                  Explore distant locations and cultural landmarks without leaving your home, reducing travel barriers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Laptop className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Professional Training</h4>
                <p className="text-gray-300">
                  Safe, repeatable training environments for high-risk professions and complex procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;