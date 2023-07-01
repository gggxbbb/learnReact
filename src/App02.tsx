import {useEffect, useRef, useState} from "react";

function App02() {
    return (
        <div>
            <CountDown targetYear={2025} targetMonth={6} targetDay={6} targetHour={0} targetMinute={0} targetSecond={0}/>
        </div>
    )
}

interface CountDownProps {
    targetYear: number,
    targetMonth: number,
    targetDay: number,
    targetHour: number,
    targetMinute: number,
    targetSecond: number,
}

function CountDown({targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSecond}:CountDownProps) {

    const [time, setTime] = useState("");
    const timer = useRef<any>(undefined)
    
    function countDown() {
        const now = new Date();
        const target = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSecond);
        const diff = target.getTime() - now.getTime();
        const diffDate = new Date(diff);
        const diffYear = diffDate.getFullYear() - 1970;
        const diffMonth = diffDate.getMonth();
        const diffDay = diffDate.getDate() - 1;
        const diffHour = diffDate.getHours();
        const diffMinute = diffDate.getMinutes();
        const diffSecond = diffDate.getSeconds();
        setTime(`${diffYear}年${diffMonth}月${diffDay}日${diffHour}时${diffMinute}分${diffSecond}秒`);
        timer.current = setTimeout(countDown, 1000);
    }
    
    useEffect(() => {
        countDown();
        return () => {
            clearTimeout(timer.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <p>{time}</p>
        </div>
    )

}

export default App02;