import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation'; 
// placement弹出位置
// auto 自动
// top 顶部
// bottom 底部
// center 中间
// top-center 顶部中间
// bottom-center 底部中间
const CustomModal = ({ title, text, isOpen, onOpenChange, modalPlacement, color, route }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(route); // 跳转到指定的路由
    };
    return (
        <Modal isOpen={isOpen} placement={modalPlacement} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody>
                            {text}
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
        </Modal>
    );
};

export default CustomModal;
