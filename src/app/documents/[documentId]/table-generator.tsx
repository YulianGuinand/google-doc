"use client";
import { useEditorStore } from "@/store/use-editor-store";
import { useState } from "react";
import Cell from "./cell";

const MIN_ROWS = 2;
const MIN_COLS = 2;
const MAX_ROWS = 10;
const MAX_COLS = 10;

export const TableGenerator = () => {
  const { editor } = useEditorStore();
  const [rows, setRows] = useState<number>(4);
  const [cols, setCols] = useState<number>(6);
  const matrice: Array<Array<number>> = [];
  for (let r: number = 0; r < rows; r++) {
    const row: Array<number> = [];
    for (let c: number = 0; c < cols; c++) {
      row.push(c);
    }

    matrice.push(row);
  }
  const [selected, setSelected] = useState<Array<number>>([MIN_ROWS, MIN_COLS]);

  const handleCellHover = (i: number, j: number) => {
    setSelected([i + 1, j + 1]);

    if (matrice.length - i === 1 && matrice.length < MAX_ROWS) {
      setRows(rows + 1);
    } else if (matrice.length - i >= 3 && matrice.length > 4) {
      setRows(rows - 1);
    }

    if (matrice[0].length - j === 1 && matrice[0].length < MAX_COLS) {
      setCols(cols + 1);
    } else if (matrice[0].length - j >= 3 && matrice[0].length > 6) {
      setCols(cols - 1);
    }
  };

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    console.log(rows, cols);
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };
  return (
    <div className="min-w-[150px] min-h-[100px] flex flex-col gap-[2px] items-center justify-center">
      {matrice.map((rows, i) => {
        return (
          <div
            key={i}
            className="w-full h-full flex justify-between items-center gap-[2px]"
          >
            {rows.map((_, j) => {
              return (
                <Cell
                  onMouseOver={() => handleCellHover(i, j)}
                  key={`${i}-${j}`}
                  selected={i <= selected[0] - 1 && j <= selected[1] - 1}
                  onClick={() => insertTable({ rows: i + 1, cols: j + 1 })}
                />
              );
            })}
          </div>
        );
      })}

      <p className="text-center">
        {selected[0]} x {selected[1]}
      </p>
    </div>
  );
};
