import React, { useState, useEffect } from 'react';

const PaginationComponent = ({ totalItems, itemsPerPageOptions, onPageChange }) => {
    // 当前页面显示的条数
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
    // 当前页码
    const [currentPage, setCurrentPage] = useState(1);

    // 计算总页数，确保至少为1页
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);

    // 使用副作用钩子来处理页面变化的逻辑
    useEffect(() => {
        // 确保没有数据时，currentPage 为 1
        if (totalItems === 0) {
            setCurrentPage(1);
        } else if (currentPage > totalPages) {
            // 如果当前页码大于总页数，重置为最后一页
            setCurrentPage(totalPages);
        }
    
        // 触发页面变化
        onPageChange(currentPage, itemsPerPage);
    }, [totalItems, itemsPerPage, currentPage, onPageChange, totalPages]);
    
    
    //  处理每页显示条数变化的事件
    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value);
        setItemsPerPage(newItemsPerPage);
    };

    //处理页面变化的事件
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            onPageChange(page, itemsPerPage);
        }
    };

    //处理页码输入框变化的事件
    const handlePageInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 1) {
            setCurrentPage(1);
            onPageChange(1, itemsPerPage);
        } else if (value > totalPages) {
            setCurrentPage(totalPages);
            onPageChange(totalPages, itemsPerPage);
        } else {
            setCurrentPage(value);
            onPageChange(value, itemsPerPage);
        }
    };

    return (
        <div className="flex items-center space-x-2 text-[13px]">
            {/* 每页显示条目数下拉框 */}
            <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="p-1 border rounded-lg size-sm h-8 bg-[#D1F5E8]"
            >
                {itemsPerPageOptions.map(option => (
                    <option key={option} value={option}>
                        {option} 条/页
                    </option>
                ))}
            </select>

            {/* 前一页按钮 */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 disabled:opacity-50"
            >
                &lt;
            </button>

            {/* 跳转到页码输入框 */}
            <div className="flex items-center space-x-1 h-7 rounded-lg px-6 bg-[#D1F5E8] text-[13px]">
                <span>跳至</span>
                <input
                    type="number"
                    value={currentPage}
                    onChange={handlePageInputChange}
                    className="w-16 h-3 p-1 py-2 text-center border rounded"
                    min={1}
                    max={totalPages}
                />
                <span>/{totalPages}页</span>
            </div>

            {/* 后一页按钮 */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 disabled:opacity-50"
            >
                &gt;
            </button>
        </div>
    );
};

// 导出分页组件
export default PaginationComponent;