import axios from 'axios';

// Ganti dengan token yang valid dari user yang sudah login
const authToken = '4|swFh3MZFBdzINHy7VUaJCiDHyppM3YS2DOfbidkmc3020848'; 

const getReminders = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks/reminder', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });

        const tasks = response.data;

        if (tasks.length === 0) {
            console.log("Tidak ada task yang jatuh tempo besok.");
            return;
        }

        console.log("=== Task dengan Deadline Besok ===");
        tasks.forEach(task => {
            const output = `- [${task.prioritas}] ${task.judul} (${task.tanggal_deadline})`;
            
            // Cek bonus: Tampilkan log merah jika butuh perhatian
            if (task.butuh_perhatian) {
                console.log('\x1b[31m%s\x1b[0m', `PERHATIAN: ${task.judul} - Deadline Besok`);
            } else {
                console.log(output);
            }
        });

    } catch (error) {
        console.error("Gagal mengambil reminder:", error.response ? error.response.data : error.message);
    }
};

getReminders();