/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const States = () => {

    const stats = [
        { value: 100, label: "Projects Complete" },
        { value: 20, label: "Happy Clients" },
        { value: 5, label: "Years of Experience" },
        { value: 10, label: "Running Projects" },
    ];

    const [counters, setCounters] = useState(stats.map(() => 0));

    useEffect(() => {
        const timers = stats.map((stat, index) => {
            return setInterval(() => {
                setCounters(prevCounters => {
                    const newCounters = [...prevCounters];
                    if (newCounters[index] < stat.value) {
                        newCounters[index]++;
                    }
                    return newCounters;
                });
            }, 100);
        });

        // Cleanup timers when component unmounts
        return () => timers.forEach(clearInterval);
    }, [stats]);

    return (
        <div className="bg-gray-900 py-14 lg:mt-10 mt-96">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                        <h1
                            className="text-7xl font-bold text-transparent stroke"
                            style={{
                                WebkitTextStroke: "2px #20D9A1",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {counters[index]}+
                        </h1>
                        <h4 className="font-medium">{stat.label}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default States;
