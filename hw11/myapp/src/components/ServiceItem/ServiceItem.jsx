import styles from './ServiceItem.module.css'

function ServiceItem({title, color}){

   
    return (
<li 
className={styles.service_item}
style={{backgroundColor: color}}
>
<p>{title}</p>
</li>
);

   
}

export default ServiceItem