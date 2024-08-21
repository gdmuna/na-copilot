import React, { useState, useEffect } from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { RepeatIcon, AddIcon } from '@chakra-ui/icons';
import { Button } from "@nextui-org/react";
import PaginationComponent from '@/components/PaginationComponent'; // 导入分页组件
import InterviewersTable from '@/components/InterviewersTable'; // 导入表格组件
import ModalTwo from '@/components/ModalTwo';//导入弹窗组件
import { useDisclosure } from "@nextui-org/react";

const InterviewersPage = () => {

    const [activeTab, setActiveTab] = useState('all');
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentRoundId, setCurrentRoundId] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedRoundId, setSelectedRoundId] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const data = [
        { userId: '1', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '0' },
        { userId: '2', roundId: '0', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '3', roundId: '0', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '4', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '5', roundId: '2', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '6', roundId: '3', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '7', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '0' },
        { userId: '8', roundId: '2', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '9', roundId: '3', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '10', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '0' },
        { userId: '11', roundId: '2', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '12', roundId: '3', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '1', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '0' },
        { userId: '2', roundId: '0', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '3', roundId: '0', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '4', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '5', roundId: '2', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '6', roundId: '3', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '7', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '0' },
        { userId: '8', roundId: '2', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '9', roundId: '3', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
        { userId: '10', roundId: '0', name: '沸羊羊', department: 'BI部（NA）', score: '100', isSelected: '0' },
        { userId: '11', roundId: '2', name: '美羊羊', department: 'BI部（NA）', score: '100', isSelected: '1' },
        { userId: '12', roundId: '3', name: '喜羊羊', department: 'BI部（NA）', score: '100', isSelected: '2' },
    ];

    // 定义一个用于筛选数据的函数
    const filterData = () => {
        let result = data;

        // 如果当前轮次ID不为空，则筛选出该轮次的数据
        if (currentRoundId !== null) {
            result = result.filter(item => item.roundId === currentRoundId);
        }

        // 根据不同的标签页（如可选择、已选择）进行筛选
        switch (activeTab) {
            case 'selectable':
                result = result.filter(item => item.isSelected === '1');
                break;
            case 'selected':
                result = result.filter(item => item.isSelected === '2');
                break;
            default:
                break;
        }
        // 设置筛选后的数据
        setFilteredData(result);
    };

    // 当currentRoundId或activeTab变化时，重新筛选数据
    useEffect(() => {
        filterData();
    }, [currentRoundId, activeTab]);
    //console.log('Filtered Data:', filteredData);

    // 设置当前轮次和标签页为“所有数据”（假设此处的目的是在点击面包屑时显示所有数据）
    const setRoundTab = (roundId) => {
        setCurrentRoundId(roundId);
        setActiveTab('all');
        setSelectedRoundId(roundId); // 更新选中的轮次
    };

    // 处理全选操作
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(paginatedData().map((_, index) => index));
        } else {
            setSelectedItems([]);
        }
    };

    // 处理单行选择
    const handleSelectRow = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(item => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    };

    // 处理分页变化
    const handlePageChange = (page, itemsPerPage) => {
        if (page < 1) page = 1; // 页码不能小于 1
        if (page > Math.ceil(filteredData.length / itemsPerPage)) page = Math.ceil(filteredData.length / itemsPerPage); // 页码不能超过总页数
        setCurrentPage(page);
        setItemsPerPage(itemsPerPage);
    };

    const paginatedData = () => {
        let filtered = filteredData; // 使用过滤后的数据
        //console.log('Current Page:', currentPage);
        // console.log('Items Per Page:', itemsPerPage);
        return filtered.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    };

    // console.log('Paginated Data:', paginatedData());

    // 计算各个标签页的数量
    const allCount = data.filter(item => !currentRoundId || item.roundId === currentRoundId).length;
    const selectableCount = data.filter(item => (!currentRoundId || item.roundId === currentRoundId) && item.isSelected === '1').length;
    const selectedCount = data.filter(item => (!currentRoundId || item.roundId === currentRoundId) && item.isSelected === '2').length;

    // 获取分页后的数据
    const currentPageData = paginatedData();
    //console.log(currentPageData);

    return (
        <div className="flex flex-col h-full w-full px-4 bg-[#F9F9F9] ">
            {/* 面包屑导航 */}
            <Breadcrumbs className='ml-2 h-3 mt-1 text-[16px]'>
                <BreadcrumbItem><b className={`text-[16px] ${selectedRoundId === '0' ? 'text-gray-500' : 'text-black'}`} onClick={() => setRoundTab('0')}>开始</b></BreadcrumbItem>
                <BreadcrumbItem><b className={`text-[16px] ${selectedRoundId === '1' ? 'text-gray-500' : 'text-black'}`} onClick={() => setRoundTab('1')}>第一轮</b></BreadcrumbItem>
                <BreadcrumbItem><b className={`text-[16px] ${selectedRoundId === '2' ? 'text-gray-500' : 'text-black'}`} onClick={() => setRoundTab('2')}>第二轮</b></BreadcrumbItem>
                <BreadcrumbItem><b className='text-[16px] text-[black]'>···</b></BreadcrumbItem>
                <BreadcrumbItem><b className={`text-[16px] ${selectedRoundId === '3' ? 'text-gray-500' : 'text-black'}`} onClick={() => setRoundTab('3')}>结束</b></BreadcrumbItem>
            </Breadcrumbs>
            {/* 可以滑动 */}
            <div className="flex flex-col flex-grow mt-4 bg-white w-full shadow-md rounded-lg p-4 h-[73vh] overflow-y-auto">
                
                <div className="flex justify-between">
                {/* 全部 */}
                    <div
                        className={`relative cursor-pointer ${activeTab === 'all' ? 'text-black' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('all')}
                    >
                        <p className="text-sm px-2 py-3">全部 ({allCount})</p>
                        <div className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === 'all' ? 'bg-gray-300' : 'bg-white'}`}></div>
                    </div>
                {/* 可选择 */}
                    <div
                        className={`relative cursor-pointer ${activeTab === 'selectable' ? 'text-black' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('selectable')}
                    >
                        <p className="text-sm px-2 py-3">可选择 ({selectableCount})</p>
                        <div className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === 'selectable' ? 'bg-gray-300' : 'bg-white'}`}></div>
                    </div>
                {/* 已选择 */}
                    <div
                        className={`relative cursor-pointer ${activeTab === 'selected' ? 'text-black' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('selected')}
                    >
                        <p className="text-sm px-2 py-3">已选择 ({selectedCount})</p>
                        <div className={`absolute bottom-0 left-0 w-full h-1 ${activeTab === 'selected' ? 'bg-gray-300' : 'bg-white'}`}></div>
                    </div>

                </div>
                {/* 横线 */}
                <div className="h-[1px] w-full bg-gray-300 mb-2"></div>
                 {/* 按钮 */}
                <div className="flex justify-end space-x-2 mt-0 mr-1">
                    {/* 刷新按钮 */}
                    <Button isIconOnly size="sm" variant="faded" className='bg-white shadow-none'>
                        <RepeatIcon boxSize={4} />
                    </Button>
                    {/* 添加面试者按钮 */}
                    <Button isIconOnly size="sm" variant="faded" className='bg-white shadow-none' onPress={onOpen}>
                        <AddIcon boxSize={4} />
                    </Button>
                </div>
                {/* 表格组件 */}
                <InterviewersTable
                    data={currentPageData} //过滤后的数据
                    selectedItems={selectedItems}
                    handleSelectAll={handleSelectAll}
                    handleSelectRow={handleSelectRow}
                />
                {/* 分页组件 */}
                <PaginationComponent
                    totalItems={filteredData.length}
                    itemsPerPageOptions={[10, 5]}
                    onPageChange={handlePageChange}
                />
                {/* 弹窗组件 */}
                <ModalTwo
                    isOpen={isOpen}
                    modalPlacement='center'
                    onOpenChange={onOpenChange}
                    color="#D1F5E8"
                />
            </div>
        </div>
    );
};

export default InterviewersPage;
