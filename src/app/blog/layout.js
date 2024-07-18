import styles from './blog.module.css';

export default function blogLayout({children}){
    return(
        <div className={styles.container}>
            {children}    
        </div>
    )
}