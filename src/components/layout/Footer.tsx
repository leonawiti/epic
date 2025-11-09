import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';


interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#001829] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68852dbea4a63d4bcec921eb_1762670515043_22236cad.png" 
              alt="EPIC Business Intelligence" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Automation That Moves Business Forward.
            </p>
          </div>


          <div>
            <h4 className="font-semibold mb-4 text-[#3AF2FF]">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {['Financial', 'Project Management', 'Customer Service', 'Marketing'].map(item => (
                <li key={item}>
                  <button onClick={() => onNavigate('Solutions')} className="text-gray-400 hover:text-[#3AF2FF] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#3AF2FF]">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Contact'].map(item => (
                <li key={item}>
                  <button onClick={() => onNavigate(item)} className="text-gray-400 hover:text-[#3AF2FF] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#3AF2FF]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:requests@epicbizintel.com" className="hover:text-[#3AF2FF] transition-colors">
                  requests@epicbizintel.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+13149136311" className="hover:text-[#3AF2FF] transition-colors">
                  (314) 913-6311
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Fenton, MO</span>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © EPIC Business Intelligence — All Rights Reserved
          </p>
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <a 
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A108687439&keywords=epic%20business%20intelligence&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=10e91d00-724f-4dd5-a7fb-ef69fa6bbdc2&sid=eGg&spellCorrectionEnabled=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3AF2FF] hover:text-[#013A63] transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
