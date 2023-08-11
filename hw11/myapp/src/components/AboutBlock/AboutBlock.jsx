import styles from './AboutBlock.module.css'

function AboutBlock(){

    return(
        <div>
            <div className={styles.container}>
                <p className={styles.first_text}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
                <p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
            </div>
        </div>
    )
}

export default AboutBlock