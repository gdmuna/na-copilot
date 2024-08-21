import React from 'react';
const InterviewersTable = ({ data, selectedItems, handleSelectAll, handleSelectRow }) => {
    // 名字大于三个字符添加省略号
    const truncateName = (name) => {
        return name.length > 3 ? name.slice(0, 3) + '...' : name;
    };

    // 行点击事件处理函数
    const handleRowClick = (userId) => {
        window.location.href = `/interviewer/list?userId=${userId}`; //跳转详细页
    };
    return (
        <div className="flex-grow overflow-auto mb-2">
            <table className="w-full border-collapse">
                {/* 表头部分 */}
                <thead>
                    <tr className="bg-white">
                        <th className="p-2.5 border-b text-left">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                onChange={handleSelectAll}
                            />
                            姓名
                        </th>
                        <th className="p-3 border-b text-center">意向部门</th>
                        <th className="p-3 border-b text-right">节点分数</th>
                    </tr>
                </thead>
                {/* 表体部分 */}
                <tbody>
                    {data.map((item, index) => {
                        // 根据isSelected的值设置行的样式和选中状态
                        let rowClass = '';
                        let isChecked = false;
                        let isDisabled = false;

                        switch (item.isSelected) {
                            case '0':
                                rowClass = 'bg-[#FFFACD]'; // 浅黄色背景
                                isChecked = true;
                                isDisabled = true; // 禁止取消选中
                                break;
                            case '1':
                                isChecked = selectedItems.includes(index);
                                break;
                            case '2':
                                rowClass = 'bg-[#D1F5E8]'; // 浅绿色背景
                                isChecked = true;
                                break;
                            default:
                                break;
                        }
                        
                        return (
                            <tr key={index} className={`${rowClass} ${selectedItems.includes(index) ? 'bg-[white]' : ''}`}>
                                <td className="p-2.5 border-b text-left">
                                    <input
                                        type="checkbox"
                                        className="mr-2 cursor-pointer"
                                        checked={isChecked}
                                        onChange={() => handleSelectRow(index)}
                                        disabled={isDisabled} // 禁用条件
                                    />
                                    
                                        {truncateName(item.name)}
                                </td>
                                {/* 点击部门分数会跳转到面试者详细页 */}
                                <td className="py-2 px-6 border-b text-center"  onClick={() => handleRowClick(item.userId)}>{item.department}</td>
                                <td className="py-2 px-6 border-b text-right"   onClick={() => handleRowClick(item.userId)}>{item.score}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default InterviewersTable;
