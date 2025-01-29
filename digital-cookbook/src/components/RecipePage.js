import React from 'react';

const RecipePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Gochujang Sticky Wings</h1>
        
        <div className="mb-6 text-gray-600">
          <p>Prep Time: 15 minutes</p>
          <p>Cook Time: 45 minutes</p>
          <p>Servings: 4-6</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>2 lbs chicken wings, split at joints, tips removed</li>
            <li>3 tablespoons gochujang (Korean red chili paste)</li>
            <li>2 tablespoons soy sauce</li>
            <li>2 tablespoons honey</li>
            <li>1 tablespoon rice vinegar</li>
            <li>3 cloves garlic, minced</li>
            <li>1 tablespoon ginger, grated</li>
            <li>1 tablespoon sesame oil</li>
            <li>Sesame seeds and green onions for garnish</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>Preheat oven to 400°F (200°C). Line a baking sheet with foil and place a wire rack on top.</li>
            <li>Pat chicken wings dry with paper towels and place on the prepared rack.</li>
            <li>Bake wings for 45-50 minutes until crispy and cooked through, flipping halfway.</li>
            <li>While wings are cooking, whisk together gochujang, soy sauce, honey, rice vinegar, garlic, ginger, and sesame oil.</li>
            <li>When wings are done, transfer to a large bowl and toss with sauce until well coated.</li>
            <li>Return wings to the rack and broil for 2-3 minutes until sticky and caramelized.</li>
            <li>Garnish with sesame seeds and green onions before serving.</li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>For extra crispy wings, pat them very dry and refrigerate uncovered for 2-4 hours before cooking.</li>
            <li>Adjust the amount of gochujang to control the spice level.</li>
            <li>Serve immediately while hot for the best texture.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;