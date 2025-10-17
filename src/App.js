import React, { useState } from "react";
import MahasiswaForm from "./components/MahasiswaForm";
import MahasiswaList from "./components/MahasiswaList";
import { HashRouter as Router } from "react-router-dom";


function App() {
  const [mahasiswaList, setMahasiswaList] = useState([]);

  // Tambah data mahasiswa
  const handleAdd = (data) => {
    setMahasiswaList([...mahasiswaList, { ...data, id: Date.now() }]);
  };

  // Hapus data
  const handleDelete = (id) => {
    setMahasiswaList(mahasiswaList.filter((mhs) => mhs.id !== id));
  };

  // Update data
  const handleUpdate = (id, updatedData) => {
    setMahasiswaList(
      mahasiswaList.map((mhs) => (mhs.id === id ? updatedData : mhs))
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#0055ff" }}>
  Manajemen Data Mahasiswa
</h1>

      <MahasiswaForm onAdd={handleAdd} />
      <MahasiswaList
        data={mahasiswaList}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
