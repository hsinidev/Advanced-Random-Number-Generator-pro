import React, { useState } from 'react';

const Star = () => {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 2 + 1}px`,
    height: `${Math.random() * 2 + 1}px`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${Math.random() * 2}s`,
    opacity: Math.random(),
  };
  return <div className="absolute bg-white rounded-full animate-pulse" style={style}></div>;
};

const GalaxyBackground = () => {
    const stars = Array.from({ length: 150 }).map((_, i) => <Star key={i} />);
    return (
        <>
        <style>
            {`
            @keyframes nebula-move {
                0% { transform: translate(0, 0) scale(1); filter: hue-rotate(0deg); }
                50% { transform: translate(-2%, 2%) scale(1.1); filter: hue-rotate(15deg); }
                100% { transform: translate(0, 0) scale(1); filter: hue-rotate(0deg); }
            }
            @keyframes drift {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
            }
            .nebula-layer {
                animation: nebula-move 20s ease-in-out infinite;
            }
            `}
        </style>
        <div className="fixed inset-0 -z-10 bg-[#0f0c29] overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"></div>
            
            {/* Nebula Clouds */}
            <div className="nebula-layer absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.4),transparent_50%)] blur-3xl mix-blend-screen"></div>
            <div className="nebula-layer absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)] blur-3xl mix-blend-screen" style={{ animationDelay: '-5s' }}></div>
            <div className="nebula-layer absolute top-[20%] right-[20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.2),transparent_50%)] blur-3xl mix-blend-screen" style={{ animationDelay: '-10s' }}></div>
            
            {/* Stars */}
            <div className="absolute inset-0">
                {stars}
            </div>
            
            {/* Noise Texture Overlay for realism */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
        </>
    );
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-900 border border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-500/20 w-full max-w-3xl max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-gray-900/95 backdrop-blur rounded-t-2xl p-6 border-b border-gray-800 flex justify-between items-center z-10">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto text-gray-300 leading-relaxed space-y-4 custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<string | null>(null);

    const handleNavClick = (content: string) => {
        if (content === 'Guide') {
            document.getElementById('seo-article-section')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setModalContent(content);
        }
    };
    
    const closeModal = () => setModalContent(null);
    
    const getModalContent = () => {
        switch(modalContent) {
            case 'About': 
                return (
                    <div className="space-y-4">
                        <p>Welcome to the <strong>Advanced Random Number Generator</strong>, a premier utility designed for developers, statisticians, gamers, and security professionals. Our mission is to provide a reliable, transparent, and aesthetically pleasing tool for generating randomness in a digital world.</p>
                        <p>Unlike standard tools that rely solely on basic algorithms, we offer a dual-mode system allowing users to switch between high-performance pseudo-random generation and cryptographically secure randomness derived from entropy sources in your device's hardware.</p>
                        <p>This project is open-source and built with modern web technologies to ensure speed, privacy, and offline capability.</p>
                    </div>
                );
            case 'Contact': 
                return (
                    <div className="space-y-6">
                        <p>We value your feedback and are here to assist with any inquiries regarding the Advanced Random Number Generator.</p>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
                            <h3 className="text-white font-bold text-lg mb-4">Contact Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="text-purple-400 w-24 font-semibold">Email:</span>
                                    <a href="mailto:hsini.web@gmail.com" className="text-gray-200 hover:text-white underline decoration-purple-500">hsini.web@gmail.com</a>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-purple-400 w-24 font-semibold">Website:</span>
                                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white underline decoration-purple-500">doodax.com</a>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm text-gray-500">Response time is typically within 24-48 hours.</p>
                    </div>
                );
            case 'Privacy Policy': 
                return (
                    <div className="space-y-4 text-sm">
                        <h3 className="text-white font-bold text-lg">Privacy Policy</h3>
                        <p><strong>Last Updated: October 2023</strong></p>
                        <p>At Advanced Random Number Generator (accessible via doodax.com), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
                        
                        <h4 className="text-white font-bold">1. Information Collection</h4>
                        <p>We operate on a strictly client-side basis for core functionality. When you generate numbers using our tool, the process happens entirely within your browser using JavaScript. <strong>We do not transmit, store, or analyze the numbers you generate on our servers.</strong></p>

                        <h4 className="text-white font-bold">2. Log Files</h4>
                        <p>Like many other Web sites, we make use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>
                        
                        <h4 className="text-white font-bold">3. Cookies and Web Beacons</h4>
                        <p>We may use cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>

                        <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at hsini.web@gmail.com.</p>
                    </div>
                );
            case 'Terms of Service': 
                return (
                    <div className="space-y-4 text-sm">
                        <h3 className="text-white font-bold text-lg">Terms of Service</h3>
                        <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Advanced Random Number Generator's website if you do not accept all of the terms and conditions stated on this page.</p>
                        
                        <h4 className="text-white font-bold">1. License</h4>
                        <p>Unless otherwise stated, Advanced Random Number Generator and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the site for your own personal use subject to restrictions set in these terms and conditions.</p>

                        <h4 className="text-white font-bold">2. Disclaimer</h4>
                        <p>The materials on Advanced Random Number Generator's website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        
                        <h4 className="text-white font-bold">3. Limitations</h4>
                        <p>In no event shall Advanced Random Number Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on this Internet site.</p>
                    </div>
                );
            case 'DMCA': 
                return (
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">DMCA Notice</h3>
                        <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.</p>
                        <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <strong>hsini.web@gmail.com</strong>, with the subject line: "Copyright Infringement" and include in your claim a detailed description of the alleged Infringement as detailed below, under "DMCA Notice and Procedure for Copyright Infringement Claims".</p>
                        <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.</p>
                    </div>
                );
            default: return null;
        }
    };

    const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

    return (
        <>
            <GalaxyBackground />
            <div className="relative min-h-screen flex flex-col text-white font-sans selection:bg-purple-500 selection:text-white">
                <header className="sticky top-0 z-40 py-4 px-4 sm:px-8 bg-gray-900/40 backdrop-blur-md border-b border-white/5 shadow-lg">
                    <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
                        <div className="flex items-center space-x-2">
                             <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                             </div>
                             <h1 className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                               Advanced RNG
                             </h1>
                        </div>
                        <div className="hidden lg:flex space-x-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                            {navLinks.map(link => (
                                <button 
                                    key={link} 
                                    onClick={() => handleNavClick(link)} 
                                    className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                        <div className="lg:hidden">
                            <select 
                                onChange={(e) => handleNavClick(e.target.value)} 
                                className="bg-gray-800/80 backdrop-blur border border-gray-600 rounded-lg py-2 px-3 text-sm text-white focus:ring-2 focus:ring-purple-500 outline-none"
                                defaultValue="Menu"
                            >
                                <option disabled>Menu</option>
                                {navLinks.map(link => <option key={link} value={link}>{link}</option>)}
                            </select>
                        </div>
                    </nav>
                </header>

                <main className="flex-grow flex items-center justify-center p-4 sm:p-8 relative z-10">
                    {children}
                </main>

                <footer className="py-8 px-8 bg-black/20 backdrop-blur-md border-t border-white/5 mt-auto">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm font-medium">
                            &copy; {new Date().getFullYear()} Doodax. All rights reserved.
                        </p>
                        
                        <div className="flex flex-col items-center md:items-end">
                            <p className="text-gray-300 text-sm mb-2 flex items-center gap-2">
                                Powered by 
                                <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1 group">
                                    HSINI MOHAMED
                                    <svg className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </p>
                            <div className="flex gap-4 text-xs text-gray-500">
                                <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">doodax.com</a>
                                <span>|</span>
                                <a href="mailto:hsini.web@gmail.com" className="hover:text-purple-400 transition-colors">hsini.web@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </footer>

                <Modal isOpen={!!modalContent} onClose={closeModal} title={modalContent || ''}>
                    {getModalContent()}
                </Modal>
            </div>
        </>
    );
};

export default Layout;