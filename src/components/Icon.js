// components/Icon.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/icon.css'; // 引入样式文件
import { menu } from '@nextui-org/react';

const iconMap = {
    choujian: 'icon-choujian',
    fenlei: 'icon-fenlei3',
    fenlei1: 'icon-fenlei',
    arrowup: 'icon-xiangshang',
    arrowdown: 'icon-xiangxia',
    searh: 'icon-sousuo',
    user: 'icon-user1',
    user1: 'icon-custom-user',
    shouye: 'icon-shouye1',
    tuijian: 'icon-shoucang',
    temperature: 'icon-wendu',
    phone: 'icon-telephone',
    position: 'icon-position',
    agency: 'icon-yifashiwu',
    naozhong: 'icon-naozhong1',
    back: 'icon-Leftxiangzuo20',
    goRight: 'icon-arrow-',
    menu: 'icon-caidan'
};

const Icon = ({ type, extraclass = '', size = '16px' }) => {
    const iconClass = iconMap[type];

    return (
        <i
            className={`iconfont ${iconClass} ${extraclass}`}
            style={{ fontSize: size }} // 使用内联样式
        ></i>
    );
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    extraclass: PropTypes.string
};

export default Icon;
