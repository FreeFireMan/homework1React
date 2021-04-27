import './component2.css'

function Films(props) {
    let cls;
    if (props.title === 'Shameless') cls = 'shame';
    if (props.title === 'Chilling Adventures of Sabrina') cls = 'sabrina';
    if (props.title === 'The 100') cls = 'the100'
    return <div className={cls}>
        <h1>
            {props.title}
        </h1>
        <div>
            <div>
            <img src={props.image} alt=""/>
        </div>
            <p>
                {props.description}
            </p>


        </div>
    </div>
}

export default Films;