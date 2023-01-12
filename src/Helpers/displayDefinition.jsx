const displayDefinition = (wordObj) => {
    if(wordObj){
        return(wordObj.map(word => {
            return(word.meanings.map(e => {
                return(
                    <div className='meanings'>
                        <p className='meanings__speech'>{e.partOfSpeech}</p>
                        <ul className='meanings__definitions'>
                            {e.definitions.map(f => {
                                return( 
                                    <li className='meanings_defnItem'>{f.definition}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }))
        }))
    }else{
        return(<></>)
    }
}
export default displayDefinition;