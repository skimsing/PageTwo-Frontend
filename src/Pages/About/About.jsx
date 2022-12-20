import './About.scss';

export default function About(){

    function submitHandler(){
        console.log("someone sent a message")
    }

    return(
        <div>
            <div className="aboutMe">
                <h2>About PageTwo</h2>
                <p>Proin consectetur, neque venenatis commodo sagittis, diam justo tincidunt urna, sit amet tincidunt metus justo sed sem. Cras ut dolor urna. Cras ac nunc sit amet mauris feugiat luctus a eget nisl. Sed rhoncus blandit justo vitae fringilla. Sed dapibus arcu sit amet urna malesuada, quis ullamcorper sem tristique. Praesent vel metus enim. Nunc vel lorem est.</p>
            </div>
            <div className="addComment__FormLabel">
                <h3>Please contact me, preferrably bringing cookies</h3>
                <form className="addComment__form"
                    onSubmit={() => submitHandler}
                    >
                    <label className="addComment__nameLabel">
                        Name
                        </label>
                    <input className="addComment__commentName"
                        type="text"
                        placeholder = "Enter your name"
                        required
                    ></input>
                    <label className="addComment__boxLabel"
                    >
                        Leave a message:
                    </label>
                    <textarea className="addComment__commentBox"
                        placeholder="leave your message"
                        required
                    ></textarea>
                    <button className="addComment__btn"
                        type="Submit"
                    >
                        Submit message
                    </button>
                </form>
            </div>
        </div>
    );
}