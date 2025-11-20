
import React, { useState, useCallback } from 'react';
import { generateRandomNumbers } from '../services/NumberGenerator';
import { GenerationOptions } from '../types';

const RNGTool: React.FC = () => {
    const [options, setOptions] = useState<GenerationOptions>({
        min: 1,
        max: 100,
        quantity: 10,
        allowDecimals: false,
        secure: true,
    });
    const [results, setResults] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [copyStatus, setCopyStatus] = useState('Copy List');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setOptions(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : Number(value),
        }));
    };

    const handleGenerate = useCallback(() => {
        setError(null);
        setIsGenerating(true);
        setResults([]);
        
        setTimeout(() => {
            try {
                if (options.max <= options.min) {
                  throw new Error("Maximum value must be greater than minimum value.");
                }
                if (options.quantity > 10000) {
                  throw new Error("Quantity cannot exceed 10,000 for performance reasons.");
                }
                const numbers = generateRandomNumbers(options);
                setResults(numbers);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setIsGenerating(false);
            }
        }, 50); // Small timeout to allow UI update before generation
    }, [options]);
    
    const handleCopy = () => {
        if (results.length > 0) {
            navigator.clipboard.writeText(results.join('\n')).then(() => {
                setCopyStatus('Copied!');
                setTimeout(() => setCopyStatus('Copy List'), 2000);
            });
        }
    };
    
    return (
        <div className="w-full max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/20 p-6 sm:p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Random Number Generator
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Inputs */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="min" className="block text-sm font-medium text-gray-300 mb-1">Minimum Value</label>
                        <input type="number" name="min" id="min" value={options.min} onChange={handleInputChange} className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
                    </div>
                    <div>
                        <label htmlFor="max" className="block text-sm font-medium text-gray-300 mb-1">Maximum Value</label>
                        <input type="number" name="max" id="max" value={options.max} onChange={handleInputChange} className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">Quantity</label>
                        <input type="number" name="quantity" id="quantity" value={options.quantity} onChange={handleInputChange} className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
                    </div>
                </div>

                {/* Options */}
                <div className="space-y-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2 mb-3">Options</h3>
                     <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" name="allowDecimals" checked={options.allowDecimals} onChange={handleInputChange} className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500"/>
                        <span className="text-gray-300">Include Decimals</span>
                    </label>
                     <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" name="secure" checked={options.secure} onChange={handleInputChange} className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500"/>
                        <span className="text-gray-300">Cryptographic Security</span>
                    </label>
                    <p className="text-xs text-gray-500 pt-2">
                        Uses `crypto.getRandomValues` for higher security, suitable for cryptographic purposes. Uncheck for standard `Math.random()`.
                    </p>
                </div>
            </div>
            
            {error && <div className="text-center text-red-400 mb-4 p-3 bg-red-900/50 border border-red-500/50 rounded-md">{error}</div>}

            <button onClick={handleGenerate} disabled={isGenerating} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                {isGenerating ? 'Generating...' : 'Generate Random Numbers'}
            </button>

            {/* Output */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Generated Numbers</h3>
                    <button onClick={handleCopy} disabled={results.length === 0} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md text-sm transition disabled:opacity-50 disabled:cursor-not-allowed">
                        {copyStatus}
                    </button>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 h-64 overflow-y-auto font-mono text-gray-300">
                    {results.length > 0 ? (
                      results.map((num, index) => <div key={index}>{num}</div>)
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        Your generated numbers will appear here.
                      </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RNGTool;
