"use client";
import styles from "./page.module.css";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function RecurringDeposit() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "monthly-savings",
      title: "MONTHLY RECURRING PLAN",
      description:
        "Deposit a fixed amount every month and accumulate wealth with attractive interest rates.",
    },
    {
      id: "quarterly-savings",
      title: "QUARTERLY RECURRING PLAN",
      description:
        "Deposit once in three months and enjoy disciplined savings with steady growth.",
    },
    {
      id: "long-term-savings",
      title: "LONG TERM RECURRING PLAN",
      description:
        "Commit to a longer tenure for higher returns and maximize your savings.",
    },
    {
      id: "flexi-recurring",
      title: "FLEXI RECURRING DEPOSITS",
      description:
        "Deposit flexible amounts at different times, perfect for varying income patterns.",
    },
  ];

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero */}
          <div className={styles.heroWrapper}>
            <img
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg"
                alt="Recurring Deposit"
                className={styles.navImage}
              />
          </div>

          <h1 className={styles.title}>Recurring Deposits</h1>

          {/* Plans */}
          <div className={styles.plansGrid}>
            {plans.map((plan) => (
              <div key={plan.id} className={styles.planCard}>
                <button
                  onClick={() => togglePlan(plan.id)}
                  className={styles.planButton}
                >
                  <span className={styles.planTitle}>{plan.title}</span>
                  {expandedPlan === plan.id ? (
                    <ChevronUp className={styles.icon} />
                  ) : (
                    <ChevronDown className={styles.icon} />
                  )}
                </button>
                {expandedPlan === plan.id && (
                  <div className={styles.planDescriptionWrapper}>
                    <p className={styles.planDescription}>
                      {plan.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interest Rates (Same table as FD) */}
          <div className={styles.ratesWrapper}>
            <h2 className={styles.ratesTitle}>
              Recurring Deposit Interest Rates (w.e.f 01.02.2025)
            </h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Sr. No</th>
                    <th className={styles.th}>Period</th>
                    <th className={styles.th}>General Public</th>
                    <th className={styles.th}>Senior Citizens (60+ YRS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.td}>1</td>
                    <td className={styles.td}>15 to 25 Days</td>
                    <td className={styles.td}>4.00%</td>
                    <td className={styles.td}>--</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>2</td>
                    <td className={styles.td}>46 to 90 Days</td>
                    <td className={styles.td}>5.00%</td>
                    <td className={styles.td}>--</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>3</td>
                    <td className={styles.td}>91 to 180 Days</td>
                    <td className={styles.td}>6.00%</td>
                    <td className={styles.td}>--</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>4</td>
                    <td className={styles.td}>181 to 364 Days</td>
                    <td className={styles.td}>6.25%</td>
                    <td className={styles.td}></td>
                  </tr>
                  <tr>
                    <td className={styles.td}>5</td>
                    <td className={styles.td}>1 YEAR TO LESS 2 YEAR</td>
                    <td className={styles.td}>6.75%</td>
                    <td className={styles.td}>7.00%</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>6</td>
                    <td className={styles.td}>2 YEAR TO LESS 5 YEAR</td>
                    <td className={styles.td}>7.25%</td>
                    <td className={styles.td}>7.50%</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>7</td>
                    <td className={styles.td}>5 YEAR AND ABOVE</td>
                    <td className={styles.td}>7.00%</td>
                    <td className={styles.td}>7.25%</td>
                  </tr>
                  <tr>
                    <td className={styles.td}>8</td>
                    <td className={styles.td}>SAVING BANK ACCOUNT</td>
                    <td className={styles.td}>2.50%</td>
                    <td className={styles.td}>2.50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Diwali Scheme (same as FD) */}
          <div className={styles.millionaireWrapper}>
            <h3 className={styles.millionaireTitle}>DIWALI DHAMAKA</h3>
            <div className={styles.millionaireGrid}>
              <div className={styles.millionaireCard}>
                <h4 className={styles.millionaireCardTitle}>
                  General Public - 7.25%
                </h4>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.1,00,000/ - Maturity Amount – Rs.1,07,471/
                </p>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.5,00,000/ - Maturity Amount – Rs.5,37,357/-
                </p>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.10,00,000/ - Maturity Amount – Rs.10,74,713/-
                </p>
              </div>
              <div className={styles.millionaireCard}>
                <h4 className={styles.millionaireCardTitle}>
                  Senior Citizens - 7.75%
                </h4>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.1,00,000/ -- Maturity Amount – Rs.1,08,003/
                </p>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.5,00,000/ -- Maturity Amount – Rs.5,40,015/
                </p>
                <p className={styles.millionaireDetails}>
                  Instalment – Rs.10,00,000/ -- Maturity Amount – Rs.10,80,029/
                </p>
              </div>
            </div>
          </div>


          {/* Navigation */}
          <div className={styles.navWrapper}>
            <Link href="/deposits/fixed" className={styles.navCard}>
             <img
              src="/pixels.jpg"
              alt="Fixed Deposit Investment"
              className={styles.heroImage}
            />
              <h3 className={styles.navTitle}>Explore Fixed Deposits</h3>
              <p className={styles.navDescription}>
                Secure your money with higher returns and flexible tenures
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
