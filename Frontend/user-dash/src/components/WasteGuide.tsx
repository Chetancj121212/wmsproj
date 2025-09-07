'use client';

import { useState } from 'react';
import { BookOpen, Trash2, Leaf, Droplets, AlertTriangle, Lightbulb } from 'lucide-react';

interface WasteCategory {
  id: string;
  name: string;
  color: string;
  icon: any;
  description: string;
  examples: string[];
  doNotInclude: string[];
}

export default function WasteGuide() {
  const [selectedCategory, setSelectedCategory] = useState<string>('wet');

  const categories: WasteCategory[] = [
    {
      id: 'wet',
      name: 'Wet Waste',
      color: 'green',
      icon: Leaf,
      description: 'Biodegradable organic waste that can be composted',
      examples: [
        'Kitchen scraps and food waste',
        'Fruit and vegetable peels',
        'Tea bags and coffee grounds',
        'Eggshells',
        'Garden waste and leaves',
        'Paper towels (food soiled)'
      ],
      doNotInclude: [
        'Meat and bones',
        'Dairy products',
        'Oil and grease',
        'Cooked food with oil'
      ]
    },
    {
      id: 'dry',
      name: 'Dry Waste',
      color: 'blue',
      icon: Trash2,
      description: 'Non-biodegradable waste that can be recycled or reused',
      examples: [
        'Paper and cardboard',
        'Plastic bottles and containers',
        'Metal cans and containers',
        'Glass bottles and jars',
        'Cloth and textiles',
        'Electronics (small)'
      ],
      doNotInclude: [
        'Food contaminated items',
        'Wet or soiled paper',
        'Broken glass',
        'Hazardous materials'
      ]
    },
    {
      id: 'hazardous',
      name: 'Hazardous Waste',
      color: 'red',
      icon: AlertTriangle,
      description: 'Dangerous waste that requires special handling and disposal',
      examples: [
        'Batteries and cells',
        'Electronic waste',
        'Fluorescent bulbs',
        'Paint and chemicals',
        'Medical waste',
        'Pesticides and fertilizers'
      ],
      doNotInclude: [
        'Regular household waste',
        'Food waste',
        'Paper and cardboard',
        'Clean plastics'
      ]
    }
  ];

  const selectedCat = categories.find(cat => cat.id === selectedCategory);

  const getCategoryColorClasses = (categoryColor: string, isSelected: boolean) => {
    const baseClasses = 'px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2';
    
    if (isSelected) {
      switch (categoryColor) {
        case 'green': return `${baseClasses} bg-green-500 text-white`;
        case 'blue': return `${baseClasses} bg-blue-500 text-white`;
        case 'red': return `${baseClasses} bg-red-500 text-white`;
        default: return `${baseClasses} bg-gray-500 text-white`;
      }
    } else {
      return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`;
    }
  };

  const tips = [
    'Clean containers before disposing in dry waste',
    'Compost wet waste at home to reduce volume',
    'Donate usable items instead of throwing away',
    'Use separate bins for different waste types',
    'Take hazardous waste to special collection centers',
    'Reduce, reuse, recycle - in that order!'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-green-100">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            Waste Segregation Guide
          </h2>
          <p className="text-gray-600 mt-2">Learn how to properly segregate waste for better environmental impact</p>
        </div>

        <div className="p-6">
          {/* Category Buttons */}
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={getCategoryColorClasses(category.color, selectedCategory === category.id)}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Category Details */}
          {selectedCat && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <selectedCat.icon className={`w-5 h-5 text-${selectedCat.color}-600`} />
                    {selectedCat.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{selectedCat.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-green-600">✅ Include:</h4>
                  <ul className="space-y-2">
                    {selectedCat.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-red-600">❌ Do Not Include:</h4>
                <ul className="space-y-2">
                  {selectedCat.doNotInclude.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Quick Tips */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Quick Tips for Better Waste Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">💡</span>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Download Full Guide
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Schedule Training
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Share with Friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
