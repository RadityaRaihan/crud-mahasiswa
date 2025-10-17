import React, { useState } from "react";

function MahasiswaList({ data, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (mhs) => {
    setEditId(mhs.id);
    setEditData({ ...mhs });
  };

  const handleSave = (id) => {
    onUpdate(id, editData);
    setEditId(null);
  };

  return (
    <div>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jurusan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" align="center">
                Belum ada data
              </td>
            </tr>
          ) : (
            data.map((mhs) => (
              <tr key={mhs.id}>
                <td>
                  {editId === mhs.id ? (
                    <input
                      value={editData.nama}
                      onChange={(e) =>
                        setEditData({ ...editData, nama: e.target.value })
                      }
                    />
                  ) : (
                    mhs.nama
                  )}
                </td>
                <td>
                  {editId === mhs.id ? (
                    <input
                      value={editData.nim}
                      onChange={(e) =>
                        setEditData({ ...editData, nim: e.target.value })
                      }
                    />
                  ) : (
                    mhs.nim
                  )}
                </td>
                <td>
                  {editId === mhs.id ? (
                    <input
                      value={editData.jurusan}
                      onChange={(e) =>
                        setEditData({ ...editData, jurusan: e.target.value })
                      }
                    />
                  ) : (
                    mhs.jurusan
                  )}
                </td>
                <td>
                  {editId === mhs.id ? (
                    <>
                      <button onClick={() => handleSave(mhs.id)}>Simpan</button>
                      <button onClick={() => setEditId(null)}>Batal</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(mhs)}>Edit</button>
                      <button onClick={() => onDelete(mhs.id)}>Hapus</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MahasiswaList;
