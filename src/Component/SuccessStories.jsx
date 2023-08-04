
import React from 'react';
import SuccessStory from './SuccessStory';

const SuccessStories = () => {
  const successStoriesData = [
    {
      name: 'John',
      age: 28,
      location: 'New York',
      story: 'I met my soulmate on this app but if everyone wants to join, everyone is welcome',
      image : 'https://media.gettyimages.com/id/125141451/fr/photo/grand-dadais-en-donnant-une-fleur.jpg?s=612x612&w=0&k=20&c=6kRaCDLMue4VCUVZAo_ZCKdXy60tuVX-59HzoL1NXyY='
    },
    {
      name: 'Emily',
      age: 75,
      location: 'Los Angeles',
      story: 'I find someone that cannot swimm very well, but iam still happy, thank you!',
      image: 'https://c8.alamy.com/comp/E24WHH/israeli-model-bar-refaeli-presents-we-love-for-spanish-clothing-company-E24WHH.jpg'
    },
 
  ];

  return (
    <div className="success-stories">
      
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Success Stories of LOVE IS IN THE AIR</h1>
      {successStoriesData.map((story, index) => (
        <SuccessStory
          key={index}
          name={story.name}
          age={story.age}
          location={story.location}
          story={story.story}
          image={story.image}
        />
      ))}
    </div>
  );
};

export default SuccessStories;