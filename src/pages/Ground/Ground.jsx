import { useEffect, useRef, useState } from "react";
import { insertStone } from "../../api/user/user";

function Ground() {
    const [co, setCo] = useState([]);
    const ref = useRef([]);
    let ground = [];
    let x = [];
    const createGround = () => {
        ground = [];
        for (let i = 0; i < 19; i++) {
            x = [];
            for (let j = 0; j < 19; j++) {
                x.push(j)
            }
            ground.push(x);
        }
    }
    useEffect(() => {
        createGround();
        setCo(ground);
    }, [])

    const insert = async (idxX, idxY) => {
        const result = await insertStone({
            x: idxX,
            y: idxY,
        });
        console.log(result);
        ref.current[idxX + (idxY*18)].disabled = true;
    }

    return (
        <div>
            <table>
                <tr>
                    <td>no</td>
                    {co.map((c, idx)=>{
                        return (
                            <td key={idx}>{idx}</td>
                        );
                    })}
                </tr>
                {co.map((y, idxY) => {
                    return (
                        <tr key={idxY}>{idxY}
                            {y.map((x, idxX) => {
                                return (
                                    <td key={idxX}><button 
                                            onClick={() => insert(idxX, idxY)}
                                            ref={(el)=>{ref.current[idxX + (idxY*18)] = el;}}>O</button></td>
                                );
                            })}
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
export default Ground;