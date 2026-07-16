import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { profileData } from '../../data/profile';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">CM</h3>
            <p className="text-gray-400 leading-relaxed">
              用设计塑造环境，用艺术点亮空间。<br />
              专注于环境艺术设计，创造美好空间。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">联系方式</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <FiMail className="mr-3 text-accent-primary" />
                <a href={`mailto:${profileData.email}`} className="hover:text-accent-primary transition-colors">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <FiPhone className="mr-3 text-accent-primary" />
                <a href={`tel:${profileData.phone}`} className="hover:text-accent-primary transition-colors">
                  {profileData.phone}
                </a>
              </div>
              <div className="flex items-start text-gray-400">
                <FiMapPin className="mr-3 text-accent-primary mt-1" />
                <span className="text-sm">{profileData.education.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">关注我</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 hover:bg-accent-primary flex items-center justify-center transition-all duration-300 group">
                <FiGithub className="text-gray-400 group-hover:text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 hover:bg-accent-primary flex items-center justify-center transition-all duration-300 group">
                <FiLinkedin className="text-gray-400 group-hover:text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 hover:bg-accent-primary flex items-center justify-center transition-all duration-300 group">
                <FiInstagram className="text-gray-400 group-hover:text-white" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;