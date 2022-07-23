import Star from "./Star";
import shortid from "shortid";

export default function Stars(props) {
    const { count } = props;
    let arrStarsId = [];

    function addArrStarsId() {
        for (let i = 0; i < count; i++) {
            arrStarsId.push({ id: shortid.generate() })
        }
    }

    function checkCorrectCount() {
        if (Number.isInteger(count) && count >= 1 && count <= 5) {
            addArrStarsId();
            return true;
        } else {
            return null;
        }
    }

    return (
        checkCorrectCount() &&
        <ul className="card-body-stars u-clearfix">
            {arrStarsId.map(item => <li key={item.id}><Star /></li>)}
        </ul>
    )
}