export default function About(){

    function submitHandler(){
        console.log("someone sent a message")
    }

    return(
        <div>
            <div className="aboutMe">
                {/* profile pic */}
                {/* about me, and why i chose CYOA */}
                <p>Maybe this p tag will suddenly become an img tag</p>
                <p>Proin consectetur, neque venenatis commodo sagittis, diam justo tincidunt urna, sit amet tincidunt metus justo sed sem. Cras ut dolor urna. Cras ac nunc sit amet mauris feugiat luctus a eget nisl. Sed rhoncus blandit justo vitae fringilla. Sed dapibus arcu sit amet urna malesuada, quis ullamcorper sem tristique. Praesent vel metus enim. Nunc vel lorem est.</p>

            </div>
            <div className="contactMe">
                <p>Please contact me, preferrably bringing cookies</p>
                <form onSubmit={() => submitHandler}>
                    <label>Name</label>
                    <input 
                        type="text"
                        placeholder = "Enter your name"
                        required
                    ></input>
                    <textarea
                        placeholder="leave your message"
                    ></textarea>
                    <button
                        type="Submit"
                    >
                        Submit message
                    </button>
                </form>
            </div>
        </div>
    );
}