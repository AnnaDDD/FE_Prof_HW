import styles from './InfoBlock.module.css'

function InfoBlock({info}){


   const {title, description, image, alt, color, style_title, style_text, img_style} = info

    return (
        <div style={{backgroundColor: color}}>
     <div 
     className={styles.offerBlock_container}
     style={{backgroundColor: color}}
     >
        <div className={styles.text_container}>
            <h2 style={{...style_title}}>{title} </h2>
            <p 
            style={{...style_text}}
            className={styles.text}
            >
            {description}
            </p>
        </div>
            <img
            style={{...img_style}}
             src={image} alt={alt} />
            
    </div>

    </div>
);

   
}

export default InfoBlock