import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Calendar from 'react-calendar';
import StyledRowTable from "./StyledRowTable";

const Main = () => {
    const [value, onChange] = useState(new Date());

    return (
        <main>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
            <StyledRowTable
                label={[
                    { text: "title", width: 150 },
                    { text: "content", width: 350 },
                    { text: "startDate", width: 200 },
                    { text: "endDate", width: 200 },
                    { text: "importance", width: 100 },
                ]}
            />
        </main>
    )
}

export default Main;