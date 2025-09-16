import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAuth = async (event) => {
        event.preventDefault();
        setError('');

        const endpoint = isLogin ? '/api/login' : '/api/register';
        const payload = isLogin ? { email, password } : { name, email, password, password_confirmation: password };

        try {
            const response = await axios.post(`http://127.0.0.1:8000${endpoint}`, payload);
            localStorage.setItem('token', response.data.access_token);
            alert('Akses berhasil! Token disimpan.');
            navigate('/dashboard'); // Navigasi ke halaman dashboard
        } catch (err) {
            setError('Autentikasi gagal. Silakan coba lagi.');
            console.error(err.response ? err.response.data : err.message);
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Daftar'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleAuth}>
                {!isLogin && (
                    <div>
                        <label>Nama:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Daftar'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Login'}
            </button>
        </div>
    );
}

export default AuthPage;