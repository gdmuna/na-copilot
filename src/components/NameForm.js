'use client';
import { useState } from 'react';

function NameForm() {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null); // 用于存储错误信息

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // 清空错误信息

        try {
            const response = await fetch(`/api/user?name=${encodeURIComponent(name)}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong'); // 抛出错误以便捕获
            }

            setUsers(data); // 确保 data 是数组
        } catch (error) {
            setError(error.message); // 记录错误信息
            setUsers([]); // 清空用户列表
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <button type="submit">Search</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* 显示错误信息 */}
            <ul>
                {Array.isArray(users) &&
                    users.map(
                        (
                            user // 确保 users 是数组
                        ) => <li key={user.id}>{user.name}</li>
                    )}
            </ul>
        </div>
    );
}

export default NameForm;
