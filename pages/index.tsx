import { useState } from 'react';
import Column from '../components/Column';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import CV from '../components/CV';
import React from 'react';
import MobileMenu from '../components/MobileMenu';

const columns = [
  { id: 'home', title: 'Home', color: 'bg-custom-white', textColor: "text-custom-black", content: <Home /> },
  { id: 'projects', title: 'Projects', color: 'bg-custom-red', textColor: "text-custom-white", content: <Projects /> },
  { id: 'about', title: 'About', color: 'bg-custom-blue', textColor: "text-custom-white", content: <About /> },
  { id: 'cv', title: 'CV', color: 'bg-custom-yellow', textColor: "text-custom-white", content: <CV /> },
];

export default function MainPage() {
  const [activeColumn, setActiveColumn] = useState('home');
  const [showContent, setShowContent] = useState(true);

  const handleColumnClick = (id: string) => {
    if (activeColumn !== id) {
      setActiveColumn(id);
      setShowContent(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }
  };

  const activeColumnData = columns.find(c => c.id === activeColumn);
  const activeContent = activeColumnData?.content;
  const activeColor = activeColumnData?.color;

  return (
    <div>
      <MobileMenu columns={columns} activeColumn={activeColumn} onColumnClick={handleColumnClick} />
      <div className="hidden md:flex w-screen h-screen">
        {columns.map(({ id, title, color, textColor, content }) => (
          <Column
            key={id}
            title={title}
            color={activeColumn === id ? (id === 'home' ? 'bg-white' : color) : color}
            isExpanded={activeColumn === id}
            textColor={textColor}
            onClick={() => handleColumnClick(id)}
          >
            {showContent && content}
          </Column>
        ))}
      </div>
      <div className={`md:hidden h-screen ${activeColumn === "home" ? "bg-white" : activeColor}`}>
        {showContent && activeContent}
      </div>
    </div>
  );
}
