interface CellProps {
  onMouseOver: () => void;
  selected: boolean;
  onClick: () => void;
}

const Cell = ({ onMouseOver, selected, onClick }: CellProps) => {
  return (
    <div
      onMouseOver={onMouseOver}
      className="w-5 h-5 rounded-[4px]"
      style={{
        border: selected
          ? "1px solid hsl(var(--primary))"
          : "1px solid #737373",
        backgroundColor: selected
          ? "hsla(266, 100%, 40%, 0.271)"
          : "transparent",
      }}
      onClick={onClick}
    ></div>
  );
};

export default Cell;
