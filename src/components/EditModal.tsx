import React, { useState, useEffect } from "react";

interface ModalItem {
  title?: string;
  description?: string;
  name?: string;
}

interface EditModalProps {
  item: ModalItem;
  onSave: (updatedItem: ModalItem) => void;
  onClose: () => void;
}

const EditModal = ({ item, onSave, onClose }: EditModalProps) => {
  const [editedItem, setEditedItem] = useState<ModalItem>({ ...item });

  useEffect(() => {
    setEditedItem({ ...item });
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setEditedItem((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    onSave(editedItem);
  };

  return (
    <div className="fixed  animate-fade-in  inset-0 z-50 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div className="bg-white sc:w-11/12 sm:w-5/6 tablet:w-4/6 desktop:w-3/6 p-6 rounded shadow-lg z-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Item</h2>
        <form>
          {/*  Object.entries возвращает массив пар [ключ, значение] для каждого элемента item.
           Метод map проходит по каждой паре, извлекая key (ключ свойства).*/}
          {Object.entries(item).map(([key]) =>
            // Проверка на то, является ли key title, description и тд
            key === "title" ||
            key === "description" ||
            key === "name" ||
            key === "active" ? (
              <div className="mb-4" key={key}>
                {key === "active" ? (
                  <div className="flex w-28 justify-between">
                    Выполнено
                    <input
                      type="checkbox"
                      name={key}
                      checked={!!editedItem[key as keyof ModalItem] || false}
                      onChange={handleChange}
                      className="w-4"
                    />
                  </div>
                ) : (
                  <div>
                    Название
                    <input
                      type="text"
                      name={key}
                      value={editedItem[key as keyof ModalItem] || ""}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
            ) : null
          )}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
              onClick={handleSave}
            >
              Сохранить
            </button>
            <button
              type="button"
              className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 transition-colors duration-300"
              onClick={onClose}
            >
              Назад
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
