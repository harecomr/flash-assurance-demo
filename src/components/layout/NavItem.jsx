import Button from "../common/Button";
import { ChevronDown } from "lucide-react";

const NavItem = ({ title, onClick, active, hasDropdown, isOpen }) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? 'ghostActive' : 'ghost'}
      className="w-full md:w-auto justify-start md:justify-center"
    >
      <span>{title}</span>
      {hasDropdown && (
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      )}
    </Button>
  );
};

export default NavItem;