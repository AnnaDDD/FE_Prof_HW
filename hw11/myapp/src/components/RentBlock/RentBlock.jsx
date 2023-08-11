import styles from './RentBlock.module.css'

function RentBlock(){

   
    return (

        <div className={styles.rent_container}>
            <img src="images/velo2.png" alt="Dino" />
        <div className={styles.text_wrapper}>
            <h2>Прокат велосипедов</h2>
            <p>
            У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. 
            Как раз мы находимся в прекрасном парке!
            </p>
        </div>
        
    </div>
);

   
}

export default RentBlock