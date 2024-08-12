import React, { useEffect, useState } from "react";
import styles from "./FlashMessages.module.css";

function FlashMessages({ messages }) {
    const [visibleMessages, setVisibleMessages] = useState([]);

    useEffect(() => {
        if (messages.length > 0) {
            setVisibleMessages(messages);
            const timer = setTimeout(() => {
                setVisibleMessages([]);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [messages]);

    return (
        <div>
            {visibleMessages.map((msg, index) => (
                <div key={index} className={`${styles.alert} ${styles.show}`}>
                    {msg}
                </div>
            ))}
        </div>
    );
}

export default FlashMessages;
