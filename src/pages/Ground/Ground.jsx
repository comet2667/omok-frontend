import { useEffect } from "react";

function Ground() {

    const xy = {
        x: 0,
        y: 0
    }
    const ground = [];

    const createGround = () => {
        for (let i = 1; i <= 19; i++) {
            for (let j = 1; j <= 19; j++) {
                xy.x = i;
                xy.y = j;
                ground.push({ ...xy });
            }
        }
    }
    useEffect(()=>{
       createGround(); 
       console.log(ground);
    },[])

    return (
        <div>
            <table>
                <thead>
                {ground['x'].map((g, idx)=>{
                    <tr key={idx}>
                        {g}
                        하잉
                    </tr>
                })}
                </thead>
            </table>
        </div>
    );
}
export default Ground;