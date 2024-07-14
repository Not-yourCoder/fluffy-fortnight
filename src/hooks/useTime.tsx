import React from 'react';

export const useTime = (speed: number) => {
    const [hour, setHour] = React.useState(0);
    const [minute, setMinute] = React.useState(0);
    const [second, setSecond] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();

            const hourDegrees = ((hours % 12) + minutes / 60) * 30;
            const minuteDegrees = (minutes / 60) * 360;
            const secondDegrees = (seconds / 60) * 360;

            setHour(hourDegrees);
            setMinute(minuteDegrees);
            setSecond(secondDegrees);
        }, 1000 / speed);

        return () => {
            clearInterval(interval);
        };
    }, [speed]);

    return { hour, minute, second };
};
