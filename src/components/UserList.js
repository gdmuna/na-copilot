'use client';

import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import user from '@/app/api/user/user';

const UserList = () => {
    const [rows, setRows] = useState([]); // 使用状态来存储获取到的数据
    const [keyword, setKeyword] = useState(''); // 用于存储输入的关键字
    const [wobject, setWobject] = useState('name'); // 假设默认选择字段为 name
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;

    const handleClick = async () => {
        console.log(wobject.currentKey, keyword); // 打印选择的字段和关键字

        // 发送 POST 请求
        const response = await user.getUserList({ wobject: wobject.currentKey, keyword }); // 传入 wobject 和 keyword

        const data = await response;
        console.log(data);

        // 根据返回的数据更新 rows 的状态
        const formattedData = data.map((user) => ({
            key: user.id, // 使用用户的 id 作为 key
            name: user.name,
            professional: user.professional, // 假设 role 是 professional
            school: user.school // 假设 city 是 school
        }));

        setRows(formattedData); // 更新 rows
    };

    const pages = Math.ceil(rows.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return rows.slice(start, end);
    }, [page, rows]);

    const columns = [
        {
            key: 'name',
            label: '名字'
        },
        {
            key: 'professional',
            label: '行业'
        },
        {
            key: 'school',
            label: '城市'
        }
    ];

    return (
        <div className="w-full flex flex-col place-items-center">
            <h2>The User List</h2>
            <div className="w-full mb-2 mt-2 flex place-items-center gap-3">
                <Select label="选择列" className=" w-1/2" selectedKeys={wobject} onSelectionChange={setWobject}>
                    {columns.map((column) => (
                        <SelectItem key={column.key}>{column.label}</SelectItem>
                    ))}
                </Select>
                <Input
                    type="text"
                    label="输入关键字"
                    value={keyword} // 绑定输入框的值
                    onChange={(e) => setKeyword(e.target.value)} // 更新关键字
                />
                <Button size="lg" color="secondary" onClick={handleClick} variant="shadow">
                    Get Data
                </Button>
            </div>
            <div className="w-full flex place-content-center">
                <Table
                    className="w-full"
                    aria-label="Example table with client side pagination"
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination isCompact showControls showShadow color="secondary" page={page} total={pages} onChange={(page) => setPage(page)} />
                        </div>
                    }
                    classNames={{
                        wrapper: 'min-h-[222px]'
                    }}>
                    <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
                    <TableBody items={items} emptyContent={'没数据老弟，搜索一下'}>
                        {(item) => <TableRow key={item.key}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default UserList;
