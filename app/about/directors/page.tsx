import styles from './page.module.css';

export default function BoardOfDirectors() {
  const boardMembers = [
     {
      name: "Mr. Pandit Sawant",
      designation: "Chairman",
      image: "/16.jpg"
    },
     {
      name: "Mr. Dilip Chavan",
      designation: "Vice Chairman",
      image: "/6.jpg"
    },
    {
      name: "Mr. Kiran Rane (CA)",
      designation: "Director",
      image: "/12.jpg"
    },
     {
      name: "Mrs. Sudha Sawant",
      designation: "Director",
      image: "/17.jpg"
    },
     {
      name: "Mr. Manish Sawant",
      designation: "Director",
      image: "/8.jpg"
    },
     {
      name: "Dr. Bhakti Gupta",
      designation: "Director",
      image: "/10.jpg"
    },
      {
      name: "Mr. Chandrakant Chavan",
      designation: "Director",
      image: "/5.jpg"
    },
    {
      name: "Adv. Amol Sawant",
      designation: "Director",
      image: "/1.jpg"
    },
    {
      name: "Adv. Sachin Mhatre ",
      designation: "Director",
      image: "/2.jpg"
    },
     {
      name: "Smt. Sumedha Sawant",
      designation: "Director",
      image: "/19.jpg"
    },
     {
      name: "Mrs. Dipali Chavan",
      designation: "Director",
      image: "/7.jpg"
    },
     {
      name: "Mr. Narayan Gaikwad",
      designation: "Director",
      image: "/11.jpg"
    },
     {
      name: "Mr. Dilip Gore",
      designation: "Director",
      image: "/9.jpg"
    },
     {
      name: "Mr. Shridhar Kadam",
      designation: "Expert Director",
      image: "/15.jpg"
    },
     {
      name: "Mr. Litesh Gada (CA)",
      designation: "Expert Director",
      image: "/expert director.jpg"
    },
    
   
    // {
    //   name: "Mr. Ajay Sawant",
    //   designation: "Head of Loan and Advance",
    //   image: "/4.jpg"
    // },
   
   
   
   
   
   
   
   
    
   
   
   
   
   
   
    
   
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Board of Directors</h1>
          <p className={styles.subtitle}>Leadership that drives our vision forward</p>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Board Meeting"
            className={styles.mainImage}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>Our Distinguished Board</h2>
          <p>
            The Board of Directors of Model Co-op Bank Ltd. comprises experienced professionals 
            from diverse backgrounds who bring valuable expertise in banking, finance, and 
            cooperative management. Their collective wisdom guides our strategic direction 
            and ensures sound governance practices.
          </p>
        </div>

        <div className={styles.membersGrid}>
          {boardMembers.map((member, index) => (
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