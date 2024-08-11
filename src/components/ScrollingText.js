// components/ScrollingText.js
import React from 'react';

const ScrollingText = ({ text }) => {
    return (
        <div className="overflow-hidden relative  h-full flex items-center">
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(100vw);
                    }
                    100% {
                        transform: translateX(-100%); /* 动画结束位置为文本宽度的一半 */
                    }
                }

                .animate-scroll {
                    animation: scroll 10s linear infinite;
                    white-space: nowrap;
                    display: flex;
                    position: absolute;
                    color: white;
                }

                .text-container {
                    display: flex;
                }

                .text {
                    padding-right: 2rem; /* 添加间距以避免文本重叠 */
                }
            `}</style>
            <div className="animate-scroll">
                <div className="text-container">
                    <div className="text-gray-500 text">{text}</div>
                    <div className="text-gray-500 text">{text}</div>
                    <div className="text-gray-500 text">{text}</div> {/* 重复文本以实现无缝滚动 */}
                </div>
            </div>
        </div>
    );
};

export default ScrollingText;
