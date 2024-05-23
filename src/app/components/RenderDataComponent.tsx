"use client";

import React, { useState } from "react";
import { DataProps } from "@/lib/interfaces/data.interface";
import Table from "./Table";
import EditModal from "./EditModal";

interface RenderDataComponentProps {
  items: DataProps[];
}

const RenderDataComponent = ({ items }: RenderDataComponentProps) => {
  const [data, setData] = useState<DataProps[]>(items);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const handleEdit = (item: any) => {
    setEditingItem(item);
  };

  const handleSave = (updatedItem: any) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  return (
    <div>
      <Table data={data} onEdit={handleEdit} />
      {editingItem && (
        <EditModal
          item={editingItem}
          onSave={handleSave}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};

export default RenderDataComponent;
