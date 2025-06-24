import React from 'react';

interface ColumnData {
  id: string;
  title: string;
}

interface MobileMenuProps {
  columns: ColumnData[];
  activeColumn: string;
  onColumnClick: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ columns, activeColumn, onColumnClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden fixed top-4 right-4 z-20 p-2 rounded-full bg-white/50 backdrop-blur-sm">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white z-10">
          <ul className="flex flex-col items-center justify-center h-full">
            {columns.map((col) => (
              <li key={col.id} className="my-4">
                <a
                  href="#"
                  className={`text-2xl ${
                    activeColumn === col.id ? 'font-bold' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onColumnClick(col.id);
                    setIsOpen(false);
                  }}
                >
                  {col.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu; 