const apiUrl = process.env.NEXT_PUBLIC_API_URL; // 后端 API 地址

// 封装常规请求函数
const request = {
    // 封装 fetch 作为基础请求函数
    fetch: async (url, options) => {
        try {
            const res = await fetch(`${apiUrl}${url}`, options);
            if (!res.ok) {
                console.error('Request error:', res.statusText);
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return await res.json(); // 直接返回完整的 JSON 对象
        } catch (error) {
            console.error('Request error:', error);
            throw error; // 抛出错误以便在调用时处理
        }
    },

    // 封装 GET 请求
    get: (url, data) => {
        const queryString = new URLSearchParams(data);
        return request.fetch(`${url}?${queryString.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    },

    // 封装 POST 请求
    post: (url, data) => {
        return request.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
    },

    // 封装 PUT 请求
    put: (url, data) => {
        return request.fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
    },

    // 封装 DELETE 请求
    delete: (url, data) => {
        return request.fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });
    }
};

export default request;
