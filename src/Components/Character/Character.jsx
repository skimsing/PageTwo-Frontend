import character from '../../assets/character.png';

export default function Character(){
    return(
        <div>
            <img className={`spritesheet`}
                src={character} 
                alt="character"
                // style={{animation}}
            />
        </div>
    )
}