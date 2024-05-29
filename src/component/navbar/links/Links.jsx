'use client';
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const Links = () => {
    
    const links = [
        {
            title: "HomePage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ];

    const [open, setOpen] = useState(false)

    const session = true
    const isAdmin = true

  return (
    <div>
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink key={link.title} item={link} />
            ))}{
                session ? (
                    <>
                        {isAdmin && ( <NavLink item={{title: "Admin", path: "/admin"}} />)}
                        <button className={styles.logout}>Logout</button>
                    </>
                    
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
            }
        </div>
        <button className={styles.menuBtn}onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {
            open && (<div className={styles.mobileLink}>
                {links.map((link) => (
                    <NavLink key={link.title} item={link} />
                ))}
            </div>
            )
        }
    </div>
    
  )
}

export default Links