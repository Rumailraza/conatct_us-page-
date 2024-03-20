import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
   <nav className={`${styles.navigation} container`}>
    <div className="logo">
        <h5>RUMAIL <span>RAZA</span></h5>
    </div>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
</ul>
    




   </nav>
  )
}

export default Navigation;