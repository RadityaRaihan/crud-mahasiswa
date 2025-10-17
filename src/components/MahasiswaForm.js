import React, { useState } from "react";
import "./MahasiswaForm.css"; // ⬅️ kita akan buat file CSS terpisah

function MahasiswaForm({ onAdd }) {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !nim || !jurusan) {
      alert("⚠️ Semua data harus diisi!");
      return;
    }

    onAdd({ nama, nim, jurusan });
    setNama("");
    setNim("");
    setJurusan("");
  };

  return (
    <div className="form-container">
      <h2>Tambah Mahasiswa</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nama:</label>
          <input
            type="text"
            placeholder="Masukkan nama mahasiswa"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>NIM:</label>
          <input
            type="text"
            placeholder="Masukkan NIM"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Jurusan:</label>
          <input
            type="text"
            placeholder="Masukkan jurusan"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">
          ➕ Tambah Data
        </button>
      </form>
    </div>
  );
}

export default MahasiswaForm;
