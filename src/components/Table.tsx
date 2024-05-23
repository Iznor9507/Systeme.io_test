"use client";

import useResizableRows from "@/lib/hooks/useResizableRows";
import { DataProps } from "@/lib/interfaces/data.interface";
import SwitchByStatus from "@/shared/icons/SwitchByStatus";
import React, { useEffect, useState } from "react";

interface TableProps {
  data: DataProps[];
  onEdit: (item: DataProps) => void;
}

const Table = ({ data, onEdit }: TableProps) => {
  const { rowHeights, handleMouseDown } = useResizableRows(data.length);
  const [statusSortOrder, setStatusSortOrder] = useState<"asc" | "desc">("asc");
  const [dateSortOrder, setDateSortOrder] = useState<"asc" | "desc">("asc");
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSortByStatus = () => {
    const newSortOrder = statusSortOrder === "asc" ? "desc" : "asc";
    setStatusSortOrder(newSortOrder);

    const sorted = [...data].sort((a, b) => {
      if (a.active === b.active) return 0;
      if (newSortOrder === "asc") {
        return a.active ? -1 : 1;
      } else {
        return a.active ? 1 : -1;
      }
    });
    setSortedData(sorted);
  };

  const handleSortByDate = () => {
    const newSortOrder = dateSortOrder === "asc" ? "desc" : "asc";
    setDateSortOrder(newSortOrder);

    const sorted = [...data].sort((a, b) => {
      const dateA = new Date(a.createdAt || a.publishedAt || "").getTime();
      const dateB = new Date(b.createdAt || b.publishedAt || "").getTime();
      if (dateA === dateB) return 0;
      if (newSortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setSortedData(sorted);
  };

  // функция форматирования даты
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    //показывает первым делом год
    return date.toLocaleDateString("en-CA");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            {/* Вместо ключей объекта отрисовал статические данные заголовка,
             так как бывают проблемы с функциями сортировки */}
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Название</th>
              <th
                onClick={handleSortByStatus}
                className="py-5 cursor-pointer px-6 text-left flex items-center"
              >
                Статус
                <SwitchByStatus onClick={handleSortByStatus} />
              </th>

              <th
                onClick={handleSortByDate}
                className="py-3 cursor-pointer px-6 text-left"
              >
                Дата создания
              </th>
              <th className="py-3 px-6 text-center">Действия</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {sortedData.map((item, index) => (
              <tr
                onMouseDown={(e) => handleMouseDown(index, e)}
                key={item.id}
                className="border-b  cursor-row-resize border-gray-200 h-12  hover:bg-gray-100"
                style={{ height: rowHeights[index] }}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap ">
                  {item.id}
                </td>
                <td className="py-3 h-12 sm:w-3/6 px-6 text-left">
                  <div className="scrollbar-hide h-full overflow-y-auto">
                    {item.name || item.description || item.title}
                  </div>
                </td>
                <td
                  className={`py-3 px-6 text-left ${
                    item.active ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.active ? "Активно" : "Закрыто"}
                </td>
                <td className="py-3 px-6 text-left">
                  {formatDate(item.createdAt) ||
                    formatDate(item.publishedAt || item.publishedAt)}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-indigo-600 hover:text-indigo-900 transition-colors duration-300"
                  >
                    Изменить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
