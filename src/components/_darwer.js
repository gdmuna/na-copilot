'use client';
import { useDisclosure } from '@chakra-ui/react';
import { Button } from '@nextui-org/button';
import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';

const MyDrawer = ({ openOk }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const [openLast, setOpenLast] = useState(openOk); // 使用状态来控制 Drawer 的打开状态

    // 监视 openOk 的变化，当 openOk 为 true 时，打开 Drawer
    React.useEffect(() => {
        if(openLast != openOk) {
            onOpen();
            setOpenLast(openOk);
        }
    }, [openOk, onOpen]); // 添加 onOpen 依赖

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    {/* Drawer 内容可以放在这里 */}
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default MyDrawer;
