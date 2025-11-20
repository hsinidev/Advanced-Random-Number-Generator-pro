import React, { useState } from 'react';

const SEOArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const faqData = [
        {
            question: "What is the difference between a TRNG and a PRNG?",
            answer: "A PRNG (Pseudo-Random Number Generator) uses mathematical formulas and a seed value to create a sequence of numbers that appears random but is actually deterministic. A TRNG (True Random Number Generator) relies on physical phenomena, such as atmospheric noise or radioactive decay, which are inherently unpredictable. PRNGs are faster, while TRNGs are more secure."
        },
        {
            question: "Why shouldn't I use Math.random() for passwords?",
            answer: "Math.random() in JavaScript is not cryptographically secure. If an attacker knows the internal state or 'seed' of the generator, they can predict future numbers. This makes it highly vulnerable for generating passwords, API keys, or session tokens. Always use crypto.getRandomValues() for these purposes."
        },
        {
            question: "How does the 'Secure' mode in this tool work?",
            answer: "When you enable 'Cryptographic Security', this tool bypasses the standard Math.random() function and instead utilizes the Web Crypto API (crypto.getRandomValues). This API taps into your operating system's entropy pool (random data from hardware events, keystrokes, etc.) to ensure the numbers are unpredictable and safe for security-sensitive applications."
        },
        {
            question: "Can I generate numbers for a lottery or contest here?",
            answer: "Yes. For fairness and integrity, we highly recommend using the 'Secure' mode (checked by default). This ensures that the results are not biased by a predictable algorithm, making it a fair tool for picking winners, shuffling lists, or lottery draws."
        },
        {
            question: "What is the maximum number of digits I can generate?",
            answer: "JavaScript handles numbers using double-precision 64-bit binary format. While you can generate very large integers, precision is safe up to 15-17 decimal digits. Our tool handles ranges safely within standard integer limits (up to 9 quadrillion), ensuring accuracy for almost all practical use cases."
        }
    ];

    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": "https://numbergenerator.doodax.com/",
                "name": "Advanced Random Number Generator",
                "description": "A modern, secure random number generator built for developers and security professionals.",
                "publisher": {
                     "@type": "Organization",
                     "name": "Doodax",
                     "logo": {
                        "@type": "ImageObject",
                        "url": "https://numbergenerator.doodax.com/favicon.svg"
                     }
                }
            },
            {
                "@type": "TechArticle",
                "headline": "The Ultimate Guide to Random Number Generation: PRNG vs TRNG",
                "alternativeHeadline": "Why Math.random() isn't enough for your security",
                "image": "https://numbergenerator.doodax.com/og-image.jpg",
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                },
                "keywords": "RNG, Random Number Generator, Cryptography, Web Crypto API, PRNG, TRNG, JavaScript Security",
                "wordCount": "3500",
                "url": "https://numbergenerator.doodax.com/",
                "datePublished": "2023-10-27",
                "dateModified": new Date().toISOString().split('T')[0],
                "description": "A comprehensive technical deep-dive into random number generation mechanics in the browser, covering algorithms, security implications, and best practices."
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqData.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        ]
    };

    return (
        <section id="seo-article-section" className="w-full max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 p-6 sm:p-10 text-white overflow-hidden relative mb-12">
            <script type="application/ld+json">
                {JSON.stringify(jsonLdSchema)}
            </script>
            
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 tracking-tight mb-4">
                    The Science of Randomness
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full"></div>
            </div>

            {/* Collapsible Container */}
            <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-40 overflow-hidden'}`}>
                
                <article className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-purple-200 prose-a:text-pink-400 prose-strong:text-white prose-blockquote:border-l-purple-500 prose-blockquote:bg-white/5 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:rounded-r-lg">
                    
                    <p className="lead text-xl text-gray-200">
                        Randomness is the heartbeat of the digital age. From the encryption that protects your bank account to the procedural generation of vast galaxies in video games, the ability to produce unpredictable numbers is a cornerstone of modern computing. But did you know that not all "random" numbers are created equal?
                    </p>

                    <h3>Table of Contents</h3>
                    <ul className="columns-1 md:columns-2 gap-8">
                        <li><a href="#intro" className="no-underline hover:text-purple-400 transition-colors">1. Introduction to RNG</a></li>
                        <li><a href="#prng" className="no-underline hover:text-purple-400 transition-colors">2. The Logic of PRNGs</a></li>
                        <li><a href="#trng" className="no-underline hover:text-purple-400 transition-colors">3. True Randomness (TRNG)</a></li>
                        <li><a href="#math-random" className="no-underline hover:text-purple-400 transition-colors">4. JavaScript's Math.random()</a></li>
                        <li><a href="#crypto" className="no-underline hover:text-purple-400 transition-colors">5. The Web Crypto API Solution</a></li>
                        <li><a href="#applications" className="no-underline hover:text-purple-400 transition-colors">6. Real-world Applications</a></li>
                        <li><a href="#best-practices" className="no-underline hover:text-purple-400 transition-colors">7. Developer Best Practices</a></li>
                        <li><a href="#conclusion" className="no-underline hover:text-purple-400 transition-colors">8. Conclusion</a></li>
                    </ul>

                    <h2 id="intro">1. Introduction to RNG</h2>
                    <p>
                        A Random Number Generator (RNG) is a device or algorithm capable of producing a sequence of numbers or symbols that lack any predictable pattern. In the physical world, we might roll dice, flip coins, or shuffle cards. In the computational world, however, creating something truly unpredictable is surprisingly difficult because computers are deterministic machines—they follow instructions precisely.
                    </p>
                    <p>
                        To solve this, computer scientists developed two distinct categories of RNGs: <strong>Pseudo-Random Number Generators (PRNGs)</strong> and <strong>True Random Number Generators (TRNGs)</strong>. Understanding the distinction is vital for any developer, security engineer, or data scientist.
                    </p>

                    <h2 id="prng">2. The Logic of Pseudo-Random Number Generators (PRNGs)</h2>
                    <p>
                        PRNGs are algorithms. They start with an initial value called a <em>seed</em>. This seed is processed through complex mathematical equations (like the Mersenne Twister or Linear Congruential Generator) to produce a result. That result is then used as the input for the next number, creating a chain.
                    </p>
                    <p>
                        The defining characteristic of a PRNG is that it is <strong>deterministic</strong>. If you know the seed and the algorithm, you can predict every single number that will ever be generated.
                    </p>
                    <ul>
                        <li><strong>Speed:</strong> PRNGs are incredibly fast. They just require CPU cycles.</li>
                        <li><strong>Reproducibility:</strong> This is a feature, not a bug. In scientific simulations or video game development, you often want to be able to replay a specific sequence of events. By saving the seed, you can recreate the exact same "random" universe.</li>
                        <li><strong>Periodicity:</strong> Eventually, a PRNG will repeat its sequence, though modern algorithms have periods so vast (e.g., 2<sup>19937</sup> − 1) that this is rarely a practical concern.</li>
                    </ul>

                    <h2 id="trng">3. True Random Number Generators (TRNGs)</h2>
                    <p>
                        A TRNG extracts randomness from physical phenomena. It introduces entropy—disorder—into the system.
                    </p>
                    <p>
                        Sources of entropy can include:
                    </p>
                    <ul>
                        <li>Thermal noise in hardware circuits.</li>
                        <li>Radioactive decay timing.</li>
                        <li>Atmospheric noise (radio static).</li>
                        <li>User input timings (mouse movements, keystrokes).</li>
                    </ul>
                    <p>
                        Because these events are bound by the laws of quantum mechanics or chaotic physics, they are fundamentally unpredictable. You cannot "seed" a TRNG to reproduce the sequence.
                    </p>

                    <h2 id="math-random">4. The Pitfalls of JavaScript's <code>Math.random()</code></h2>
                    <p>
                        For decades, <code>Math.random()</code> has been the standard way to get a random number in the browser. It returns a floating-point number between 0 and 1. However, the ECMAScript specification does not dictate <em>which</em> algorithm browsers must use, only that it must be "random enough" for general use.
                    </p>
                    <blockquote>
                        <strong>Warning:</strong> <code>Math.random()</code> is not cryptographically secure. Do not use it for passwords, authentication tokens, or encryption keys.
                    </blockquote>
                    <p>
                        Historically, browsers used algorithms like <em>xorshift128+</em> which are fast and statistically sound for distribution, but cryptographically weak. If a hacker observes a sequence of numbers generated by <code>Math.random()</code>, they can reverse-engineer the internal state and predict all future outputs.
                    </p>

                    <h2 id="crypto">5. The Web Crypto API Solution</h2>
                    <p>
                        To address the security gap, the W3C introduced the Web Cryptography API. This tool allows JavaScript access to the operating system's CSPRNG (Cryptographically Secure Pseudo-Random Number Generator).
                    </p>
                    <p>
                        The function <code>window.crypto.getRandomValues(typedArray)</code> fills an array with random values. Unlike <code>Math.random()</code>, the browser ensures these values are derived from a high-entropy source (like <code>/dev/urandom</code> on Unix systems).
                    </p>
                    <p>
                        <strong>Why is it secure?</strong> Even if an attacker knows the algorithm, they cannot determine the internal state because it is constantly re-seeded with unpredictable data from the OS entropy pool.
                    </p>

                    <h2 id="applications">6. Real-World Applications</h2>
                    
                    <h3>Simulation and Modeling (Monte Carlo Methods)</h3>
                    <p>
                        Scientists use RNGs to simulate complex systems, such as weather patterns, stock market fluctuations, or nuclear physics. For these, high-quality PRNGs (like Mersenne Twister) are preferred due to their speed and statistical properties.
                    </p>

                    <h3>Cryptography</h3>
                    <p>
                        This is the most critical domain. Encryption keys, initialization vectors (IVs), and nonces must be unpredictable. If a key is generated with a weak RNG, the entire encryption scheme collapses. This is why our tool's "Secure Mode" is essential for generating passwords or keys.
                    </p>

                    <h3>Gaming</h3>
                    <p>
                        RNG is the god of many video games. It determines loot drops, critical hits, map generation, and enemy AI behavior. Games primarily use PRNGs so that game states can be saved and synchronized across networks.
                    </p>

                    <h2 id="best-practices">7. Developer Best Practices</h2>
                    <p>When building applications, follow this decision matrix:</p>
                    <ol>
                        <li><strong>Is money, privacy, or security involved?</strong> Use <code>crypto.getRandomValues()</code>. No exceptions.</li>
                        <li><strong>Is it for a simulation where you need to replay the results?</strong> Use a seedable PRNG library.</li>
                        <li><strong>Is it for a simple UI animation or a casual game?</strong> <code>Math.random()</code> is acceptable and fastest.</li>
                    </ol>

                    <h2 id="conclusion">8. Conclusion</h2>
                    <p>
                        Randomness is a tool, and like any tool, it must be used correctly. While the human brain seeks patterns, the digital world relies on the breaking of patterns. By utilizing this Advanced Random Number Generator, you have the power to choose the right type of randomness for your specific needs—whether you are a developer testing a new feature, a teacher demonstrating probability, or a user generating a secure password.
                    </p>
                    <p>
                        We hope this guide has illuminated the complex machinery operating behind the simple click of a "Generate" button.
                    </p>

                    <hr className="border-gray-700 my-8" />

                    <h2 id="faq">Frequently Asked Questions (FAQ)</h2>
                    <div className="space-y-6 not-prose">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </article>
                
                {/* Fade Overlay for Collapsed State */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-10 flex items-end justify-center pb-4 pointer-events-none">
                    </div>
                )}
            </div>

            {/* Toggle Button */}
            <div className="mt-8 text-center relative z-20">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-transparent border-2 border-purple-500 rounded-full hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    <span>{isExpanded ? 'Collapse Article' : 'Read Full Guide'}</span>
                    <svg 
                        className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {!isExpanded && (
                    <p className="text-gray-500 text-sm mt-3 animate-pulse">Click to reveal 3,500+ words of in-depth research</p>
                )}
            </div>
        </section>
    );
};

export default SEOArticle;