import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [prioritasFilter, setPrioritasFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [tanggalDeadline, setTanggalDeadline] = useState('');
    const [prioritas, setPrioritas] = useState('rendah');
    const navigate = useNavigate();

    const fetchTasks = async () => {
        try {
            const token = localStorage.getItem('token');
            const params = {};
            if (prioritasFilter) {
                params.prioritas = prioritasFilter;
            }
            if (statusFilter) {
                params.selesai = statusFilter;
            }

            const response = await axios.get('http://127.0.0.1:8000/api/tasks', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: params
            });

            setTasks(response.data);
        } catch (error) {
            console.error('Gagal mengambil task:', error.response ? error.response.data : error.message);
            if (error.response && error.response.status === 401) {
                navigate('/');
            }
        }
    };
    
    useEffect(() => {
        fetchTasks();
    }, [prioritasFilter, statusFilter]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleAddTask = async (event) => {
        event.preventDefault();

        const formattedDate = format(new Date(tanggalDeadline), 'dd/MM/yyyy');

        const newTask = {
            judul,
            deskripsi,
            tanggal_deadline: formattedDate,
            prioritas
        };

        try {
            const token = localStorage.getItem('token');
            await axios.post('http://127.0.0.1:8000/api/tasks', newTask, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            fetchTasks();

            setJudul('');
            setDeskripsi('');
            setTanggalDeadline('');
            setPrioritas('rendah');
            
        } catch (error) {
            console.error('Gagal menambah task:', error.response ? error.response.data : error.message);
            alert('Gagal menambah task. Pastikan semua field terisi dengan benar.');
        }
    };

    const handleCompleteTask = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://127.0.0.1:8000/api/tasks/${id}/selesaikan`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            fetchTasks();

        } catch (error) {
            console.error('Gagal menandai task sebagai selesai:', error.response ? error.response.data : error.message);
            alert('Gagal menandai task sebagai selesai.');
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            setTasks(tasks.filter(task => task.id !== id));

        } catch (error) {
            console.error('Gagal menghapus task:', error.response ? error.response.data : error.message);
            alert('Gagal menghapus task.');
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Halaman Dashboard</h1>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
            
            <h3>Filter Task</h3>
            <div style={{ marginBottom: '20px' }}>
                <label>Prioritas:</label>
                <select value={prioritasFilter} onChange={(e) => setPrioritasFilter(e.target.value)}>
                    <option value="">Semua</option>
                    <option value="rendah">Rendah</option>
                    <option value="sedang">Sedang</option>
                    <option value="tinggi">Tinggi</option>
                </select>
                <label style={{ marginLeft: '10px' }}>Status:</label>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="">Semua</option>
                    <option value="0">Belum Selesai</option>
                    <option value="1">Selesai</option>
                </select>
            </div>

            <hr />

            <h3>Tambah Task Baru</h3>
            <form onSubmit={handleAddTask}>
                <div>
                    <label>Judul:</label>
                    <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} required />
                </div>
                <div>
                    <label>Deskripsi:</label>
                    <textarea value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Tanggal Deadline:</label>
                    <input type="date" value={tanggalDeadline} onChange={(e) => setTanggalDeadline(e.target.value)} required />
                </div>
                <div>
                    <label>Prioritas:</label>
                    <select value={prioritas} onChange={(e) => setPrioritas(e.target.value)}>
                        <option value="rendah">Rendah</option>
                        <option value="sedang">Sedang</option>
                        <option value="tinggi">Tinggi</option>
                    </select>
                </div>
                <button type="submit" className="add-task-btn">Tambah Task</button>
            </form>

            <hr />

            <h3>Daftar Task</h3>
            {tasks.length === 0 ? (
                <p>Belum ada task. Silakan tambahkan task baru.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className={task.selesai ? 'completed-task' : ''}>
                            <strong>{task.judul}</strong> ({task.prioritas}) - Deadline: {task.tanggal_deadline}
                            <p>{task.deskripsi}</p>
                            <div className="task-buttons">
                                {task.selesai ? (
                                    <span className="completed-text">Selesai</span>
                                ) : (
                                    <button onClick={() => handleCompleteTask(task.id)} className="selesai-btn">Selesai</button>
                                )}
                                <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">Hapus</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dashboard;