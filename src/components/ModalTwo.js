import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const CustomModalTwo = ({ isOpen, onOpenChange, modalPlacement, color }) => {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [student, setStudent] = React.useState("");
    // 验证名字，手机号，学号格式的函数
    const validateName = (name) => name.match(/^[\u4e00-\u9fa5A-Za-z]{2,15}$/i);
    const validatePhone = (phone) => phone.match(/^1\d{10}$/i);
    const validateStudent = (student) => student.match(/^2\d{10}$/i);

    const isNameInvalid = React.useMemo(() => {
        if (name === "") return false;
        return !validateName(name);
    }, [name]);
    const isPhoneInvalid = React.useMemo(() => {
        if (phone === "") return false;
        return !validatePhone(phone);
    }, [phone]);
    const isStudentInvalid = React.useMemo(() => {
        if (student === "") return false;
        return !validateStudent(student);
    }, [student]);
    //选择器选项
    const bumengOptions = [
        { id: 1, bumeng: 'BI部（NA）' },
        { id: 2, bumeng: '宣传部（NA）' },
        { id: 3, bumeng: '学术部（NA）' },
        { id: 4, bumeng: '科研部（NA）' },
        { id: 5, bumeng: '宣传部（NA）' },
        { id: 6, bumeng: '教研部（NA）' },
        { id: 7, bumeng: '技术运维小组（NA）' },
    ];
    //按钮点击事件
    const handleClick = () => {
    };
    return (
        <Modal isOpen={isOpen} placement={modalPlacement} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} className="w-[90%]">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">添加面试者</ModalHeader>
                        <ModalBody>
                            {/* 姓名输入框 */}
                            <Input
                                value={name}
                                type="name"
                                label="请输入姓名"
                                onValueChange={setName}
                                variant="bordered"
                                isInvalid={isNameInvalid}
                                color={isNameInvalid ? "warning" : ""}
                                errorMessage="请输入2到15的姓名"
                                className="w-[100%] "
                            />
                            {/* 手机号输入框 */}
                            <Input
                                value={phone}
                                type="phone"
                                label="请输入手机号"
                                onValueChange={setPhone}
                                variant="bordered"
                                isInvalid={isPhoneInvalid}
                                color={isPhoneInvalid ? "warning" : ""}
                                errorMessage="请输入正确的手机号码"
                                className="w-[100%]"
                            />
                            {/* 学号输入框 */}
                            <Input
                                value={student}
                                type="student"
                                label="请输入学号"
                                onValueChange={setStudent}
                                variant="bordered"
                                isInvalid={isStudentInvalid}
                                color={isStudentInvalid ? "warning" : ""}
                                errorMessage="请输入正确的学号"
                                className="w-[100%]"
                            />
                            {/* 部门选择框 */}
                            <Select
                                label="请选择意向部门"
                                className="max-w-xs"
                                style={{background: "white"}}
                                variant="bordered"
                            >
                            {bumengOptions.map((option) => (
                                <SelectItem key={option.id}>
                                    {option.bumeng}
                                </SelectItem>
                            ))}
                        </Select>
                    </ModalBody>
                <ModalFooter>
                    <Button
                        className={`font-semibold text-[${color}] bg-white border border-[${color}]`}
                        onPress={onClose}
                    >
                        取消
                    </Button>
                    <Button
                        className={`font-semibold bg-[${color}] text-white`}
                        onPress={handleClick}
                    >
                        确定
                    </Button>
                </ModalFooter>
            </>
                )}
        </ModalContent>
        </Modal >
    );
};

export default CustomModalTwo;
