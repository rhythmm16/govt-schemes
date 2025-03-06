document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navbar = document.getElementById("navbar")

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active")
  })

  // Page Navigation
  const navLinks = document.querySelectorAll("nav a, .footer-section a[data-page]")
  const mainContent = document.getElementById("main-content")

  // Load default page (home)
  loadPage("home")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const page = this.getAttribute("data-page")

      // Update active link
      document.querySelectorAll("nav a").forEach((navLink) => {
        navLink.classList.remove("active")
      })

      document.querySelectorAll(`nav a[data-page="${page}"]`).forEach((navLink) => {
        navLink.classList.add("active")
      })

      // Close mobile menu if open
      navbar.classList.remove("active")

      // Load page content
      loadPage(page)

      // Scroll to top
      window.scrollTo(0, 0)
    })
  })

  function loadPage(page) {
    switch (page) {
      case "home":
        loadHomePage()
        break
      case "schemes":
        loadSchemesPage()
        break
      case "resources":
        loadResourcesPage()
        break
      default:
        loadHomePage()
    }
  }

  function loadHomePage() {
    mainContent.innerHTML = `
            <section class="hero">
                <div class="hero-content">
                    <h2>Empowering Women's Health Across India</h2>
                    <p>Discover government initiatives designed to support women's healthcare needs at every stage of life.</p>
                    <a href="#" class="btn" data-page="schemes">Explore Schemes</a>
                </div>
            </section>
            
            <section class="container">
                <div class="section-title">
                    <h2>Featured Healthcare Initiatives</h2>
                </div>
                
                <div class="schemes-grid">
                    <div class="scheme-card">
                        <img src="images/11.jpeg?height=300&width=500" alt="Pradhan Mantri Matru Vandana Yojana">
                        <div class="scheme-content">
                            <h3>Pradhan Mantri Matru Vandana Yojana (PMMVY)</h3>
                            <p>A maternity benefit program providing financial assistance to pregnant women and lactating mothers.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="pmmvy">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card">
                        <img src="images/2.png?height=300&width=500" alt="Janani Suraksha Yojana">
                        <div class="scheme-content">
                            <h3>Janani Suraksha Yojana (JSY)</h3>
                            <p>A safe motherhood intervention promoting institutional delivery among poor pregnant women.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="jsy">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card">
                        <img src="images/3.png?height=300&width=500" alt="Ayushman Bharat">
                        <div class="scheme-content">
                            <h3>Ayushman Bharat - PMJAY</h3>
                            <p>Health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="pmjay">Learn More</a>
                        </div>
                    </div>
                </div>
                
                
                <div class="text-center">
                    <a href="#" class="btn btn-secondary" data-page="schemes">View All Schemes</a>
                </div>
            </section>
            
            <section class="stats-section">
                <div class="container">
                    <div class="stats-container">
                        <div class="stat-item">
                            <div class="number" data-count="50">0</div>
                            <div class="label">Healthcare Schemes</div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="number" data-count="10">0</div>
                            <div class="label">Million+ Beneficiaries</div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="number" data-count="36">0</div>
                            <div class="label">States & UTs Covered</div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="number" data-count="24">0</div>
                            <div class="label">Hours Support</div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="testimonials container">
                <div class="section-title">
                    <h2>Success Stories</h2>
                </div>
                
                <div class="testimonial-slider">
                    <div class="testimonial active">
                        <img src="images/b1.jpg?height=100&width=100" alt="Priya Sharma">
                        <p>"The Pradhan Mantri Matru Vandana Yojana provided me with financial support during my pregnancy, allowing me to focus on my health and my baby's wellbeing."</p>
                        <div class="name">Priya Sharma</div>
                        <div class="location">Delhi</div>
                    </div>
                    
                    <div class="testimonial">
                        <img src="images/b2.jpg?height=100&width=100" alt="Lakshmi Devi">
                        <p>"Thanks to Janani Suraksha Yojana, I was able to deliver my baby safely at a hospital. The financial assistance covered all my medical expenses."</p>
                        <div class="name">Lakshmi Devi</div>
                        <div class="location">Tamil Nadu</div>
                    </div>
                    
                    <div class="testimonial">
                        <img src="images/b3.jpg?height=100&width=100" alt="Fatima Begum">
                        <p>"Ayushman Bharat - PMJAY covered my cancer treatment expenses. I couldn't have afforded the treatment otherwise. I'm forever grateful."</p>
                        <div class="name">Fatima Begum</div>
                        <div class="location">Uttar Pradesh</div>
                    </div>
                    
                    <div class="slider-controls">
                        <div class="slider-dot active" data-slide="0"></div>
                        <div class="slider-dot" data-slide="1"></div>
                        <div class="slider-dot" data-slide="2"></div>
                    </div>
                </div>
            </section>
        `

    // Initialize testimonial slider
    initTestimonialSlider()

    // Initialize counter animation
    initCounterAnimation()

    // Add event listeners for scheme detail buttons
    document.querySelectorAll(".scheme-details-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault()
        const scheme = this.getAttribute("data-scheme")
        loadSchemeDetails(scheme)
        window.scrollTo(0, 0)
      })
    })

    // Add event listener for "View All Schemes" button
    document.querySelector('.btn-secondary[data-page="schemes"]').addEventListener("click", (e) => {
      e.preventDefault()
      loadPage("schemes")
    })
  }

  function loadSchemesPage() {
    mainContent.innerHTML = `
            <section class="container">
                <div class="section-title">
                    <h2>Women's Healthcare Schemes</h2>
                </div>
                
                <div class="schemes-categories">
                    <button class="category-btn active" data-category="all">All Schemes</button>
                    <button class="category-btn" data-category="maternal">Maternal Health</button>
                    <button class="category-btn" data-category="reproductive">Reproductive Health</button>
                    <button class="category-btn" data-category="general">General Healthcare</button>
                    <button class="category-btn" data-category="nutrition">Nutrition</button>
                </div>
                
                <div class="schemes-grid">
                    <div class="scheme-card" data-category="maternal">
                        <img src="images/11.jpeg?height=300&width=500" alt="Pradhan Mantri Matru Vandana Yojana">
                        <div class="scheme-content">
                            <h3>Pradhan Mantri Matru Vandana Yojana (PMMVY)</h3>
                            <p>A maternity benefit program providing financial assistance to pregnant women and lactating mothers.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="pmmvy">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="maternal">
                        <img src="images/2.png?height=300&width=500" alt="Janani Suraksha Yojana">
                        <div class="scheme-content">
                            <h3>Janani Suraksha Yojana (JSY)</h3>
                            <p>A safe motherhood intervention promoting institutional delivery among poor pregnant women.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="jsy">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="general">
                        <img src="images/3.png?height=300&width=500" alt="Ayushman Bharat">
                        <div class="scheme-content">
                            <h3>Ayushman Bharat - PMJAY</h3>
                            <p>Health insurance scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary care.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="pmjay">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="reproductive">
                        <img src="images/4.png?height=300&width=500" alt="Rashtriya Kishor Swasthya Karyakram">
                        <div class="scheme-content">
                            <h3>Rashtriya Kishor Swasthya Karyakram (RKSK)</h3>
                            <p>A health program for adolescents focusing on nutrition, reproductive health, and mental health.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="rksk">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="nutrition">
                        <img src="images/6.png?height=300&width=500" alt="POSHAN Abhiyaan">
                        <div class="scheme-content">
                            <h3>POSHAN Abhiyaan</h3>
                            <p>A multi-ministerial convergence mission with the vision to address malnutrition with a targeted approach by 2022.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="poshan">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="general">
                        <img src="images/7.jpg?height=300&width=500" alt="National Health Mission">
                        <div class="scheme-content">
                            <h3>National Health Mission (NHM)</h3>
                            <p>A flagship program providing accessible, affordable, and quality healthcare to rural and vulnerable populations.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="nhm">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="reproductive">
                        <img src="images/8.jpeg?height=300&width=500" alt="Family Planning Program">
                        <div class="scheme-content">
                            <h3>Family Planning Program</h3>
                            <p>Provides comprehensive family planning services including contraception and reproductive health education.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="fpp">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="maternal">
                        <img src="images/9.jpg?height=300&width=500" alt="LaQshya">
                        <div class="scheme-content">
                            <h3>LaQshya (Labour Room Quality Improvement Initiative)</h3>
                            <p>Aims to improve quality of care in labour room and maternity operation theatres to reduce maternal and newborn mortality.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="laqshya">Learn More</a>
                        </div>
                    </div>
                    
                    <div class="scheme-card" data-category="nutrition">
                        <img src="images/10.jpeg?height=300&width=500" alt="Anemia Mukt Bharat">
                        <div class="scheme-content">
                            <h3>Anemia Mukt Bharat</h3>
                            <p>A program to reduce the prevalence of anemia among children, adolescents and women of reproductive age.</p>
                            <a href="#" class="btn scheme-details-btn" data-scheme="amb">Learn More</a>
                        </div>
                    </div>
                    <div class="scheme-card" data-category="maternal">
    <img src="images/suman.jpeg?height=300&width=500" alt="Surakshit Matritva Aashwasan">
    <div class="scheme-content">
        <h3>Surakshit Matritva Aashwasan (SUMAN)</h3>
        <p>Aim to provide assured, dignified, and quality healthcare to pregnant women, mothers, and newborns free of cost.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="suman">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="women-empowerment">
    <img src="images/shakti.jpeg?height=300&width=500" alt="Mahila Shakti Kendra">
    <div class="scheme-content">
        <h3>Mahila Shakti Kendra (MSK)</h3>
        <p>A scheme to empower rural women through community participation and provide them with access to welfare services.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="msk">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="women-safety">
    <img src="images/onestop.jpeg?height=300&width=500" alt="One Stop Centre Scheme">
    <div class="scheme-content">
        <h3>One Stop Centre Scheme</h3>
        <p>Provides support to women facing violence, offering medical aid, police assistance, legal counseling, and shelter.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="osc">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="women-empowerment">
    <img src="images/beti.jpeg?height=300&width=500" alt="Beti Bachao Beti Padhao">
    <div class="scheme-content">
        <h3>Beti Bachao Beti Padhao (BBBP)</h3>
        <p>A national initiative to prevent female feticide, promote gender equality, and encourage the education of girls.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="bbbp">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="financial-support">
    <img src="images/sukanya.png?height=300&width=500" alt="Sukanya Samriddhi Yojana">
    <div class="scheme-content">
        <h3>Sukanya Samriddhi Yojana (SSY)</h3>
        <p>A savings scheme for the girl child with high interest rates, aimed at securing their future education and marriage expenses.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="ssy">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="women-empowerment">
    <img src="images/working.jpg?height=300&width=500" alt="Working Women Hostel Scheme">
    <div class="scheme-content">
        <h3>Working Women Hostel Scheme</h3>
        <p>Provides safe and affordable accommodation for working women and their dependent children across India.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="wwh">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="financial-support">
    <img src="images/mudra.png?height=300&width=500" alt="MUDRA Yojana for Women">
    <div class="scheme-content">
        <h3>MUDRA Yojana for Women</h3>
        <p>Provides financial support to women entrepreneurs for starting and expanding small businesses through collateral-free loans.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="mudra">Learn More</a>
    </div>
</div>

<div class="scheme-card" data-category="women-welfare">
    <img src="images/indra.png?height=300&width=500" alt="Indira Gandhi Matritva Sahyog Yojana">
    <div class="scheme-content">
        <h3>Indira Gandhi Matritva Sahyog Yojana</h3>
        <p>A conditional maternity benefit scheme providing financial assistance to pregnant and lactating women for nutrition and health.</p>
        <a href="#" class="btn scheme-details-btn" data-scheme="igmsy">Learn More</a>
    </div>
</div>

                </div>
            </section>
        `

    // Add event listeners for category buttons
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        // Update active button
        document.querySelectorAll(".category-btn").forEach((b) => {
          b.classList.remove("active")
        })
        this.classList.add("active")

        // Filter schemes
        const category = this.getAttribute("data-category")
        filterSchemes(category)
      })
    })

    // Add event listeners for scheme detail buttons
    document.querySelectorAll(".scheme-details-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault()
        const scheme = this.getAttribute("data-scheme")
        loadSchemeDetails(scheme)
        window.scrollTo(0, 0)
      })
    })
  }

  function filterSchemes(category) {
    const schemes = document.querySelectorAll(".scheme-card")

    schemes.forEach((scheme) => {
      if (category === "all" || scheme.getAttribute("data-category") === category) {
        scheme.style.display = "block"
      } else {
        scheme.style.display = "none"
      }
    })
  }

  function loadSchemeDetails(scheme) {
    // Scheme details data
    const schemeData = {
      pmmvy: {
        title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        ministry: "Ministry of Women and Child Development",
        launched: "2017",
        website: "https://wcd.delhi.gov.in/wcd/pradhan-mantri-matru-vandana-yojana-pmmvy",
        description:
          "PMMVY is a maternity benefit program implemented by the Government of India. Under this scheme, pregnant women and lactating mothers receive a cash benefit of ₹5,000 in three installments for the first living child to partly compensate for wage loss during the period of pregnancy and after the delivery.",
        eligibility: [
          "All Pregnant Women and Lactating Mothers (PW&LM), excluding those in regular employment with the Central Government or State Government or Public Sector Undertaking",
          "All eligible Pregnant Women and Lactating Mothers who have their pregnancy on or after 1st January 2017 for the first child in the family",
          "The cash transfer is for the first living child of the family",
        ],
        benefits: [
          "Cash incentive of ₹5,000 in three installments",
          "First installment of ₹1,000 on early registration of pregnancy",
          "Second installment of ₹2,000 after six months of pregnancy with at least one ante-natal check-up",
          "Third installment of ₹2,000 after child birth registration and the first cycle of immunization",
        ],
        applicationSteps: [
          "Visit the nearest Anganwadi Center or approved health facility",
          "Fill the application form (Form 1-A) for the first installment",
          "Submit required documents including MCP card, Aadhaar card, and bank account details",
          "Fill Form 1-B for the second installment after 6 months of pregnancy",
          "Fill Form 1-C for the third installment after childbirth and immunization",
        ],
      },
      jsy: {
        title: "Janani Suraksha Yojana (JSY)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2005",
        website: "https://nhm.gov.in/index1.php?lang=1&level=3&lid=309&sublinkid=841",
        description:
          "Janani Suraksha Yojana (JSY) is a safe motherhood intervention under the National Health Mission. It promotes institutional delivery among poor pregnant women by providing cash assistance to reduce maternal and neonatal mortality.",
        eligibility: [
          "All pregnant women in Low Performing States (LPS) - Uttar Pradesh, Uttarakhand, Bihar, Jharkhand, Madhya Pradesh, Chhattisgarh, Assam, Rajasthan, Odisha, and Jammu & Kashmir",
          "In High Performing States (HPS), benefits are restricted to BPL/SC/ST women",
          "Age must be 19 years or above",
          "Up to two live births",
        ],
        benefits: [
          "Cash assistance for institutional delivery: ₹1,400 in rural areas and ₹1,000 in urban areas in LPS",
          "₹700 in rural areas and ₹600 in urban areas in HPS",
          "Free ante-natal check-ups",
          "Free medications and consumables",
          "Free transport from home to institution, between facilities in case of referral and drop back home",
        ],
        applicationSteps: [
          "Register at the nearest health center during pregnancy",
          "Obtain a JSY card",
          "Undergo at least three ante-natal check-ups",
          "Deliver at a government or accredited private health facility",
          "Submit required documents including ID proof, JSY card, and bank account details after delivery to receive the cash benefit",
        ],
      },
      pmjay: {
        title: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2018",
        website: "https://nha.gov.in/PM-JAY",
        description:
          "Ayushman Bharat PMJAY is the world's largest health insurance scheme fully financed by the government. It provides a cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India.",
        eligibility: [
          "Families identified based on deprivation criteria in the SECC database",
          "All families included in the D1, D2, D3, D4, D5, and D7 deprivation categories",
          "Automatically included categories like households without shelter, manual scavenger families, primitive tribal groups, and legally released bonded labor",
          "No restrictions based on family size, age or gender",
        ],
        benefits: [
          "Health coverage up to ₹5 lakhs per family per year",
          "Covers pre and post-hospitalization expenses",
          "All pre-existing conditions covered from day one",
          "Cashless and paperless access to services",
          "Covers 3 days of pre-hospitalization and 15 days of post-hospitalization expenses",
          "1,393 procedures with all related costs like OT charges, medicine, diagnostic tests, etc.",
        ],
        applicationSteps: [
          "Check eligibility on the PMJAY website or app",
          "Visit the nearest Ayushman Bharat empaneled hospital with Aadhaar card or other ID proof",
          "Verify eligibility through biometric authentication",
          "Receive e-card for availing benefits",
          "For planned procedures, approach the hospital's PMJAY help desk for pre-authorization",
        ],
      },
      rksk: {
        title: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2014",
        website: "https://www.bing.com/ck/a?!&&p=c7063da47868537432677244bca9e7552a1f48cd577d53717a786b0a9b02a117JmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=rksk&u=a1aHR0cHM6Ly9ya3NrLmluL2hvbWU&ntb=1",
        description:
          "RKSK is a health program for adolescents in the age group of 10-19 years. It focuses on nutrition, reproductive health, mental health, substance misuse, non-communicable diseases, and gender-based violence.",
        eligibility: ["All adolescents (boys and girls) in the age group of 10-19 years"],
        benefits: [
          "Weekly Iron and Folic Acid Supplementation",
          "Adolescent-friendly health clinics",
          "Menstrual hygiene scheme",
          "Peer education program",
          "Counseling services on nutrition, sexual and reproductive health",
          "Prevention of substance abuse and mental health services",
        ],
        applicationSteps: [
          "Visit the nearest Adolescent Friendly Health Clinic (AFHC)",
          "Participate in peer education programs in schools and communities",
          "Attend health education sessions organized at schools or Anganwadi centers",
        ],
      },
      poshan: {
        title: "POSHAN Abhiyaan (National Nutrition Mission)",
        ministry: "Ministry of Women and Child Development",
        launched: "2018",
        website: "https://www.bing.com/ck/a?!&&p=81efafb86e3f620b7cc56a8b34f49db596653e7dab27cd46eb7867638aef1ccbJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=poshan+abhiyaan&u=a1aHR0cHM6Ly9wb3NoYW5hYmhpeWFhbi5nb3YuaW4v&ntb=1",
        description:
          "POSHAN Abhiyaan is India's flagship program to improve nutritional outcomes for children, adolescents, pregnant women and lactating mothers by leveraging technology, a targeted approach and convergence.",
        eligibility: ["Children under 6 years of age", "Adolescent girls", "Pregnant women", "Lactating mothers"],
        benefits: [
          "Improved monitoring and tracking of women and children",
          "Convergence of various nutrition-related schemes",
          "ICT-based real-time monitoring system",
          "Incentivizing Anganwadi Workers for using IT-based tools",
          "Eliminating registers used by Anganwadi Workers",
          "Introducing measurement of height of children at Anganwadi Centers",
          "Social audits",
          "Setting up Nutrition Resource Centers",
        ],
        applicationSteps: [
          "Visit the nearest Anganwadi Center",
          "Register with the Anganwadi Worker",
          "Participate in Village Health Sanitation and Nutrition Days",
          "Attend community-based events organized under POSHAN Abhiyaan",
        ],
      },
      nhm: {
        title: "National Health Mission (NHM)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2013",
        website: "https://nhm.gov.in/",
        description:
          "The National Health Mission (NHM) aims to provide accessible, affordable, and quality healthcare to rural and vulnerable populations, with a focus on strengthening public health systems.",
        eligibility: [
          "All citizens, especially those in rural and economically weaker sections",
          "Priority given to pregnant women, children, and those with non-communicable diseases",
        ],
        benefits: [
          "Strengthening primary, secondary, and tertiary healthcare facilities",
          "Free maternal and child healthcare services",
          "Disease control programs",
          "Financial support for healthcare infrastructure",
        ],
        applicationSteps: [
          "Visit the nearest government health facility or NHM center",
          "Enroll in specific programs based on eligibility",
          "Undergo health check-ups and avail benefits as per the scheme",
        ],
      },
      
      fpp: {
        title: "Family Planning Program",
        ministry: "Ministry of Health and Family Welfare",
        launched: "1952",
        website: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=821&lid=222",
        description:
          "India's Family Planning Program provides comprehensive services, including contraception, reproductive health education, and sterilization procedures, to help control population growth and improve maternal health.",
        eligibility: [
          "All men and women of reproductive age",
          "Special incentives for Below Poverty Line (BPL) families and women opting for sterilization",
        ],
        benefits: [
          "Free contraceptive services",
          "Monetary incentives for sterilization procedures",
          "Awareness programs on reproductive health",
          "Free maternal and child health services",
        ],
        applicationSteps: [
          "Visit a government health center or family planning clinic",
          "Consult a healthcare professional about suitable contraceptive methods",
          "Undergo necessary medical procedures if opting for sterilization",
        ],
      },
      
      laqshya: {
        title: "LaQshya (Labour Room Quality Improvement Initiative)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2017",
        website: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1307&lid=690",
        description:
          "LaQshya is a quality improvement initiative to enhance maternity care in labor rooms and maternity operation theatres to reduce maternal and newborn mortality rates.",
        eligibility: [
          "All pregnant women receiving maternity care in government hospitals",
          "Healthcare facilities providing labor room and maternity services",
        ],
        benefits: [
          "Improved maternity care standards",
          "Training programs for healthcare providers",
          "Enhanced monitoring and evaluation of labor rooms",
          "Reduced maternal and neonatal mortality rates",
        ],
        applicationSteps: [
          "Access maternity care at government hospitals enrolled under LaQshya",
          "Participate in quality monitoring programs",
          "Utilize improved healthcare facilities for safer childbirth",
        ],
      },
      
      amb: {
        title: "Anemia Mukt Bharat (AMB)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2018",
        website: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=1448&lid=797",
        description:
          "Anemia Mukt Bharat is a national campaign to reduce the prevalence of anemia among children, adolescents, and women of reproductive age by implementing preventive and curative measures.",
        eligibility: [
          "Children (6 months-19 years)",
          "Pregnant and lactating women",
          "Women of reproductive age (15-49 years)",
        ],
        benefits: [
          "Weekly Iron and Folic Acid Supplementation (WIFS) program",
          "Biannual deworming for children and adolescents",
          "Intensified anemia testing and treatment",
          "Nutritional education and awareness programs",
        ],
        applicationSteps: [
          "Visit the nearest government health center or Anganwadi",
          "Enroll in iron and folic acid supplementation programs",
          "Undergo regular anemia testing and receive treatment if necessary",
        ],
      },
      suman: {
        title: "Surakshit Matritva Aashwasan (SUMAN)",
        ministry: "Ministry of Health and Family Welfare",
        launched: "2019",
        website: "https://suman.mohfw.gov.in/",
        description:
          "SUMAN ensures quality healthcare for pregnant women, mothers, and newborns free of cost, with zero tolerance for denial of services at public health facilities.",
        eligibility: [
          "All pregnant women and newborns in public health facilities",
          "No financial barrier for accessing services",
          "Priority given to poor and high-risk cases",
        ],
        benefits: [
          "Free antenatal check-ups and delivery care",
          "Free medicines, diagnostics, and transport",
          "Zero expense access to C-sections if needed",
          "Newborn care including vaccinations and nutritional support",
        ],
        applicationSteps: [
          "Visit the nearest public health facility",
          "Register with ASHA worker or Anganwadi Center",
          "Ensure periodic antenatal check-ups for continued benefits",
        ],
      },
      msk: {
        title: "Mahila Shakti Kendra (MSK)",
        ministry: "Ministry of Women and Child Development",
        launched: "2017",
        website: "https://socialwelfare.vikaspedia.in/viewcontent/social-welfare/women-and-child-development/women-development-1/pradhan-mantri-mahila-shakti-kendra?lgn=en",
        description:
          "MSK provides community support and empowerment for rural women through access to welfare services and capacity-building initiatives.",
        eligibility: [
          "All rural women, especially those from underprivileged backgrounds",
          "Priority for self-help groups and women-led enterprises",
        ],
        benefits: [
          "Skill development and digital literacy programs",
          "Legal aid and counseling services",
          "Access to government welfare schemes",
          "Entrepreneurship support and employment training",
        ],
        applicationSteps: [
          "Visit the nearest Mahila Shakti Kendra",
          "Register with local authorities",
          "Participate in training and empowerment programs",
        ],
      },
      osc: {
        title: "One Stop Centre Scheme",
        ministry: "Ministry of Women and Child Development",
        launched: "2015",
        website: "https://www.myscheme.gov.in/schemes/osc",
        description:
          "The One Stop Centre Scheme provides integrated support for women facing violence by offering medical aid, legal assistance, and shelter services.",
        eligibility: [
          "Women affected by violence in any form",
          "No income or caste barriers",
          "Available for minors through guardians",
        ],
        benefits: [
          "Immediate medical assistance and police intervention",
          "Legal aid and case management support",
          "Counseling and mental health support",
          "Emergency shelter for women in distress",
        ],
        applicationSteps: [
          "Visit the nearest One Stop Centre or call the women's helpline (181)",
          "Receive immediate assistance and legal aid",
          "Access counseling and rehabilitation support",
        ],
      },
      bbbp: {
        title: "Beti Bachao Beti Padhao (BBBP)",
        ministry: "Ministry of Women and Child Development",
        launched: "2015",
        website: "https://www.pmindia.gov.in/hi/government_tr_rec/%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80-%E0%A4%AC%E0%A4%9A%E0%A4%BE%E0%A4%93-%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80-%E0%A4%AA%E0%A4%A2%E0%A4%BC%E0%A4%BE%E0%A4%93-%E0%A4%AC%E0%A4%BE%E0%A4%B2/#:~:text=%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80%20%E0%A4%AC%E0%A4%9A%E0%A4%BE%E0%A4%93%20%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A5%80%20%E0%A4%AA%E0%A4%A2%E0%A4%BC%E0%A4%BE%E0%A4%93%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE,%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B2%E0%A4%AF%20%E0%A4%A4%E0%A4%A5%E0%A4%BE%20%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%B5%20%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A4%BE%E0%A4%A7%E0%A4%A8%20%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%B2%E0%A4%AF%E0%A5%A4",
        description:
          "BBBP aims to prevent gender-biased sex selection and promote girl child education to ensure their survival and protection.",
        eligibility: [
          "All girl children in India",
          "Special focus on districts with low child sex ratio",
        ],
        benefits: [
          "Financial incentives for girl child education",
          "Community engagement and awareness campaigns",
          "Improved access to healthcare and nutrition",
          "Scholarship programs for meritorious girls",
        ],
        applicationSteps: [
          "Visit the nearest Anganwadi or local administration office",
          "Enroll the girl child for educational benefits",
          "Participate in awareness programs and workshops",
        ],
      },
      ssy: {
        title: "Sukanya Samriddhi Yojana (SSY)",
        ministry: "Ministry of Finance",
        launched: "2015",
        website: "https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89",
        description:
          "SSY is a savings scheme for the girl child offering high-interest rates, ensuring financial security for education and marriage.",
        eligibility: [
          "Parents/guardians of a girl child below 10 years of age",
          "One account per girl child (maximum of two accounts per family)",
        ],
        benefits: [
          "Attractive interest rate (higher than savings accounts)",
          "Tax benefits under Section 80C of the Income Tax Act",
          "Maturity after 21 years or for higher education after 18 years",
        ],
        applicationSteps: [
          "Visit a post office or authorized bank",
          "Submit KYC documents and birth certificate of the girl child",
          "Deposit an initial amount (minimum ₹250 per year)",
        ],
      },
      mudra: {
        title: "MUDRA Yojana for Women",
        ministry: "Ministry of Finance",
        launched: "2015",
        website: "https://www.mudra.org.in/mudra-kahaniyaan-v2/women.html?gclid=CjwKCAiAirb_BRBNEiwALHlnD6AEN3aP9wOlfIcLdG6pc2GRWnorlubunGGXL5iqumfMKlsVdg3xbxoCyecQAvD_BwE/page/2",
        description:
          "The MUDRA scheme provides collateral-free loans to women entrepreneurs to start or expand their businesses.",
        eligibility: [
          "Women entrepreneurs in micro and small enterprises",
          "Startups and small businesses in the service and manufacturing sector",
        ],
        benefits: [
          "Loans up to ₹10 lakhs under Shishu, Kishor, and Tarun categories",
          "No collateral required",
          "Lower interest rates for women-led businesses",
        ],
        applicationSteps: [
          "Visit a MUDRA-participating bank or NBFC",
          "Fill out the loan application with business details",
          "Submit KYC, business plan, and income proof",
        ],
      },
      working_women_hostel: {
        title: "Working Women Hostel Scheme",
        ministry: "Ministry of Women and Child Development",
        launched: "1972",
        website: "https://www.myscheme.gov.in/schemes/swwh",
        description:
          "This scheme provides safe and affordable accommodation to working women who need to live away from their families due to professional commitments.",
        eligibility: [
          "Working women whose income does not exceed a specified limit",
          "Single, divorced, widowed, or separated women",
          "Women undergoing training for employment (subject to a specific duration limit)",
        ],
        benefits: [
          "Affordable hostel accommodation",
          "Daycare facilities for children of working women",
          "Security and basic amenities",
        ],
        applicationSteps: [
          "Locate the nearest government-approved Working Women Hostel",
          "Submit application along with employment proof and income certificate",
          "Complete verification process and pay nominal hostel charges",
        ],
      },
      mudra_yojna: {
        title: "Pradhan Mantri Mudra Yojana (PMMY)",
        ministry: "Ministry of Finance",
        launched: "2015",
        website: "https://www.mudra.org.in/",
        description:
          "PMMY provides financial support to micro and small women entrepreneurs through Mudra loans for business expansion and self-employment.",
        eligibility: [
          "Women entrepreneurs running small businesses such as handicrafts, tailoring, beauty parlors, etc.",
          "Self-employed women and small business owners",
          "Women seeking to expand or start a new business",
        ],
        benefits: [
          "Loans up to ₹10 lakh without collateral",
          "Three loan categories: Shishu (up to ₹50,000), Kishor (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh)",
          "Flexible repayment options",
        ],
        applicationSteps: [
          "Visit a bank, microfinance institution, or NBFC that offers Mudra loans",
          "Fill out the Mudra loan application form",
          "Submit business plan and required documents (Aadhaar, PAN, proof of business)",
          "Loan disbursement upon approval",
        ],
      },
      indira_gandhi_matrivita: {
        title: "Indira Gandhi Matritva Sahyog Yojana (IGMSY)",
        ministry: "Ministry of Women and Child Development",
        launched: "2010",
        website: "https://pib.gov.in/newsite/PrintRelease.aspx?relid=101782",
        description:
          "IGMSY is a conditional maternity benefit scheme providing financial assistance to pregnant and lactating mothers to improve maternal health and reduce infant mortality.",
        eligibility: [
          "Pregnant and lactating women above 19 years",
          "Women who give birth to their first two live children",
          "Excludes those in regular employment of the government or public sector",
        ],
        benefits: [
          "Cash transfer of ₹6,000 per beneficiary",
          "Paid in installments linked to health and nutrition indicators",
          "Encourages institutional delivery and post-natal care",
        ],
        applicationSteps: [
          "Register with the nearest Anganwadi Center or health facility",
          "Submit pregnancy registration details",
          "Fulfill health check-ups and child immunization requirements",
          "Receive installments upon meeting eligibility criteria",
        ],
      },
    }

    // Load scheme details page
    if (schemeData[scheme]) {
      const data = schemeData[scheme]

      mainContent.innerHTML = `
                <section class="container">
                    <div class="section-title">
                        <h2>Scheme Details</h2>
                    </div>
                    
                    <div class="scheme-details">
                        <h3>${data.title}</h3>
                        
                        <div class="scheme-meta">
                            <div class="meta-item">
                                <span>Ministry:</span> ${data.ministry}
                            </div>
                            <div class="meta-item">
                                <span>Launched:</span> ${data.launched}
                            </div>
                            <div class="meta-item">
                                <span>Official Website:</span> <a href="${data.website}" target="_blank">Visit Website</a>
                            </div>
                        </div>
                        
                        <div class="scheme-description">
                            <h4>Description</h4>
                            <p>${data.description}</p>
                        </div>
                        
                        <div class="eligibility">
                            <h4>Eligibility Criteria</h4>
                            <ul class="eligibility-list">
                                ${data.eligibility.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                        
                        <div class="benefits">
                            <h4>Benefits</h4>
                            <ul class="benefits-list">
                                ${data.benefits.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                        
                        <div class="application-process">
                            <h4>How to Apply</h4>
                            <ol class="application-steps">
                                ${data.applicationSteps.map((item) => `<li>${item}</li>`).join("")}
                            </ol>
                        </div>
                        
                        <div class="text-center" style="margin-top: 30px;">
                            <a href="#" class="btn" data-page="schemes">Back to All Schemes</a>
                        </div>
                    </div>
                </section>
            `

      // Add event listener for "Back to All Schemes" button
      document.querySelector('.btn[data-page="schemes"]').addEventListener("click", (e) => {
        e.preventDefault()
        loadPage("schemes")
      })
    } else {
      // If scheme not found, redirect to schemes page
      loadPage("schemes")
    }
  }

  function loadResourcesPage() {
    mainContent.innerHTML = `
            <section class="container">
                <div class="section-title">
                    <h2>Healthcare Resources</h2>
                </div>
                
                <div class="resources-grid">
                    <div class="resource-card">
                        <img src="images/a1.png?height=300&width=500" alt="Ministry of Health and Family Welfare">
                        <div class="resource-content">
                            <h3>Ministry of Health and Family Welfare</h3>
                            <p>Official website of the Ministry of Health and Family Welfare, Government of India.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=f6da257e1af0d8a3b6f8bba7d842cd1ea99d55cafd2fc17360a7f456e8297fb1JmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=ministry+of+health+and+family+welfare&u=a1aHR0cDovL21vaGZ3Lmdvdi5pbi8&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/a2.jpeg?height=300&width=500" alt="Ministry of Women and Child Development">
                        <div class="resource-content">
                            <h3>Ministry of Women and Child Development</h3>
                            <p>Official website of the Ministry of Women and Child Development, Government of India.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=2c5ab362c9286feaedd438c259ef1241ca045702a1fcd837fc38bb240470204aJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=ministry+of+women+and+child+development&u=a1aHR0cHM6Ly93d3cuaW5kaWEuZ292LmluL29mZmljaWFsLXdlYnNpdGUtbWluaXN0cnktd29tZW4tYW5kLWNoaWxkLWRldmVsb3BtZW50LTA&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/a3.jpg?height=300&width=500" alt="National Health Portal">
                        <div class="resource-content">
                            <h3>National Health Portal</h3>
                            <p>A gateway to authentic health information for citizens of India.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=f03c77bf674eb5ad9b9ba68dc094e94fbd440aadca55a2d1178adbdeb4114dd2JmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=national+health+portal&u=a1aHR0cHM6Ly93d3cuaW5kaWEuZ292LmluL25hdGlvbmFsLWhlYWx0aC1wb3J0YWw&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/a4.jpeg?height=300&width=500" alt="National Health Mission">
                        <div class="resource-content">
                            <h3>National Health Mission</h3>
                            <p>Information about various health programs under the National Health Mission.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=7f310761c3f6401261c1cdfcdba77d4899b37fd02722f8acd2dd41f80a0eac19JmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=national+health+mission&u=a1aHR0cHM6Ly9uaG0uZ292LmluLw&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/a5.jpeg?height=300&width=500" alt="Ayushman Bharat">
                        <div class="resource-content">
                            <h3>Ayushman Bharat - PMJAY</h3>
                            <p>Official website of Pradhan Mantri Jan Arogya Yojana (PM-JAY).</p>
                            <a href="https://www.bing.com/ck/a?!&&p=8ed10faa59cd24b3cacc4a6811e50992bee12aee3a855e14ca4f51a8d48ed8bdJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=ayushman+bharat+pmjay&u=a1aHR0cHM6Ly9iZW5lZmljaWFyeS5uaGEuZ292LmluLw&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/5.jpg?height=300&width=500" alt="POSHAN Abhiyaan">
                        <div class="resource-content">
                            <h3>POSHAN Abhiyaan</h3>
                            <p>Official website of the National Nutrition Mission.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=81efafb86e3f620b7cc56a8b34f49db596653e7dab27cd46eb7867638aef1ccbJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=poshan+abhiyaan&u=a1aHR0cHM6Ly9wb3NoYW5hYmhpeWFhbi5nb3YuaW4v&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/a6.jpg?height=300&width=500" alt="National Rural Health Mission">
                        <div class="resource-content">
                            <h3>National Rural Health Mission</h3>
                            <p>Information about healthcare services in rural areas of India.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=9a18d7943f7428e3139feca1c13f2a4215bf090e9377ed8b24a441688f4ad9eaJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=national+rural+health+mission&u=a1aHR0cHM6Ly93d3cubmhtLmdvdi5pbi9pbmRleDEucGhwP2xhbmc9MSZsZXZlbD0xJnN1YmxpbmtpZD05NjkmbGlkPTQ5&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                    
                    <div class="resource-card">
                        <img src="images/a7.jpeg?height=300&width=500" alt="Indian Council of Medical Research">
                        <div class="resource-content">
                            <h3>Indian Council of Medical Research</h3>
                            <p>The apex body in India for the formulation, coordination and promotion of biomedical research.</p>
                            <a href="https://www.bing.com/ck/a?!&&p=82f0b4c3a4bf36f943b9967d31d3e2d50b71b3d96fee4423012788dcb677845cJmltdHM9MTc0MTEzMjgwMA&ptn=3&ver=2&hsh=4&fclid=1aac65f7-50c0-6838-1e0a-717451c66923&psq=indian+council+of+medical+research&u=a1aHR0cHM6Ly93d3cuaWNtci5nb3YuaW4v&ntb=1" target="_blank" class="btn">Visit Website</a>
                        </div>
                    </div>
                </div>
            </section>
        `
  }

  

  // Testimonial Slider
  function initTestimonialSlider() {
    const testimonials = document.querySelectorAll(".testimonial")
    const dots = document.querySelectorAll(".slider-dot")

    if (testimonials.length === 0 || dots.length === 0) return

    dots.forEach((dot) => {
      dot.addEventListener("click", function () {
        const slideIndex = this.getAttribute("data-slide")

        // Update active testimonial
        testimonials.forEach((testimonial) => {
          testimonial.classList.remove("active")
        })
        testimonials[slideIndex].classList.add("active")

        // Update active dot
        dots.forEach((d) => {
          d.classList.remove("active")
        })
        this.classList.add("active")
      })
    })

    // Auto slide
    let currentSlide = 0
    const autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonials.length

      // Update active testimonial
      testimonials.forEach((testimonial) => {
        testimonial.classList.remove("active")
      })
      testimonials[currentSlide].classList.add("active")

      // Update active dot
      dots.forEach((d) => {
        d.classList.remove("active")
      })
      dots[currentSlide].classList.add("active")
    }, 5000)

    // Clear interval when user interacts with slider
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        clearInterval(autoSlide)
      })
    })
  }

  // Counter Animation
  function initCounterAnimation() {
    const counters = document.querySelectorAll(".number")

    if (counters.length === 0) return

    const speed = 200

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-count"))
      let count = 0

      const updateCount = () => {
        const increment = target / speed

        if (count < target) {
          count += increment
          counter.textContent = Math.ceil(count)
          setTimeout(updateCount, 1)
        } else {
          counter.textContent = target
        }
      }

      updateCount()
    })
  }

  // Add event listeners for scheme detail buttons on page load
  document.querySelectorAll(".scheme-details-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      const scheme = this.getAttribute("data-scheme")
      loadSchemeDetails(scheme)
      window.scrollTo(0, 0)
    })
  })
})

