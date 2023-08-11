import { servicesData } from '../../data/data';
import ServiceItem from '../ServiceItem/ServiceItem';
import styles from './ServicesList.module.css'


function ServicesList(){

   
    return (
<section className={styles.container}>
    <ul className={styles.services_list}>
        {servicesData.map((elem) => <ServiceItem key={elem.id} {...elem}/>)}
    </ul>
</section>
); 
}

export default ServicesList