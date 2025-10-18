import styles from './page.module.css';

export default function ManagementTeam() {
  const managementMembers = [
     {
      name: "Mr. Sanjay Nikam",
      designation: "CEO",
      image: "/20.jpg"
    },
     {
      name: "Mr. Sambhaji Chavan",
      designation: "Manager",
      image: "/14.jpg"
    },
    {
      name: "Mr. Chandrakant Mandave ",
      designation: "Head of IT",
      image: "/head of it.jpg"
    },
    
    {
      name: "Mr. Ankush Sawant",
      designation: "Head of Loan and Advance",
      image: "/head of loan and advance.jpg"
    },
    {
      name: "Mr. Sanjay  Sawant",
      designation: "Head of Deposit",
      image: "/head of deposit.jpg"
    },
    
    
   
    
    //   name: "Mr. Manoj Tiwari",
    //   designation: "Head of Credit",
    //   image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    // },
    // {
    //   name: "Mrs. Rekha Jain",
    //   designation: "Head of Marketing",
    //   image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    // },
    // {
    //   name: "Mr. Sanjay Yadav",
    //   designation: "Head of IT",
    //   image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    // }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Management Team</h1>
          <p className={styles.subtitle}>Experienced professionals driving operational excellence</p>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Management Team"
            className={styles.mainImage}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>Our Executive Leadership</h2>
          <p>
            Our management team consists of seasoned banking professionals with extensive 
            experience in cooperative banking, financial services, and business management. 
            They are committed to delivering exceptional service while maintaining the highest 
            standards of integrity and operational excellence.
          </p>
        </div>

        <div className={styles.membersGrid}>
          {managementMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberDesignation}>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}