import "../scss/common.scss";
import Program from "./interfaces/Program";

export function RadioPrograms({p}: {p: Program}) {
    return (
        <>
            <section key={p.id} className="box">
                <div className="head">
                    <img src={p.programimage || "/logo.svg"} alt="Channel image" className="image" />
                    <h3 className="name">{p.name}</h3>
                </div>
                <p className="broadcast">{p.broadcastinfo}</p>
                <p className="tagline">{p.description}</p>
            </section>
        </>
    );
}

export default RadioPrograms;
