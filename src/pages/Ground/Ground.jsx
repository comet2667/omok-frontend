import { useEffect, useState } from "react";
import { insertStone } from "../../api/user/user";

function Ground() {
    const [co, setCo] = useState([]);
    const ground = [];
    let x = [];
    const createGround = () => {
        for (let i = 0; i < 19; i++) {
            x = [];
            for (let j = 0; j < 19; j++) {
                x.push(j)
            }
            ground.push(x);
        }
        setCo(ground);
    }
    useEffect(() => {
        createGround();
    }, [])

    const onClickStone = async (x, y)=>{
        const result = await insertStone({
            x:x,
            y:y,
        });
        console.log(result);
    }

    return (
        <div>
            <table>
                {co.map((y, idxY) => {
                    return (
                        <tr key={idxY}>
                            {y.map((x, idxX)=>{
                                return(
                                <td key={idxX}><button onClick={()=>onClickStone(idxX, idxY)}>O</button></td>
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