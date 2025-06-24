import React from 'react';

const Column = ({ title, color, children, isExpanded, onClick, textColor }: { title: string, color: string, children: React.ReactNode, isExpanded: boolean, onClick: () => void, textColor: string }) => {
  return (
    <div
      className={`relative h-screen transition-all duration-[500ms] delay-100 ease-in-out ${
        isExpanded ? 'flex-1' : `min-w-[60px] w-[60px] `
      } ${color} `}
      onClick={onClick}
    >
      {isExpanded ? (
        <div className="w-full h-full">{children}</div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <h2
            className={`transform rotate-270 text-black text-xl font-nova-slim font-semibold ${textColor}`}
            style={{ writingMode: 'vertical-rl' }}
          >
            {title}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Column; 