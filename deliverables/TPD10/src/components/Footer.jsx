import React from 'react'
import './footer-styles.css'

function Footer() {
  return (
    <footer id="ft" role="contentinfo">
      <div className="container">
        <div id="ft-wrapper">
          <div className="footer-container">
            <div className="span3">
              <p className="title">Colleges and Schools</p>
              <ul className="unstyled">
                <li><a href="https://sota.cofc.edu/">Arts</a></li>
                <li><a href="https://sb.cofc.edu/">Business</a></li>
                <li><a href="https://soe.cofc.edu/">Education</a></li>
                <li><a href="https://sohs.cofc.edu/">Health Sciences</a></li>
                <li><a href="https://hss.cofc.edu/">Humanities and Social Sciences</a></li>
                <li><a href="https://lcwa.cofc.edu/">Languages, Cultures, and World Affairs</a></li>
                <li><a href="https://ssme.cofc.edu/">Sciences, Mathematics, and Engineering</a></li>
                <li><a href="https://gradschool.cofc.edu/">Graduate School</a></li>
                <li><a href="https://honorscollege.cofc.edu/">Honors College</a></li>
              </ul>                   
            </div>
            <div className="span3">
              <p className="title">Information For</p>
              <ul className="unstyled">
                <li><a href="https://myportal.cofc.edu/">Current Students</a></li>
                <li><a href="https://myportal.cofc.edu/">Faculty and Staff</a></li>
                <li><a href="https://alumni.cofc.edu/">Alumni</a></li>
                <li><a href="https://cofc.edu/families/">Families/Parents</a></li>
                <li><a href="https://admissions.cofc.edu/applyingtothecollege/international-students/index.php">International Students</a></li>
                <li><a href="https://jobs.cofc.edu">Job Applicants</a></li>
              </ul>                   
            </div>
            <div className="span3">
              <p className="title">Quick Links</p>
              <ul className="unstyled">
                <li><a href="https://bookstore.cofc.edu/">Bookstore</a></li>
                <li><a href="https://cofc.edu/contact-us/">Contact Us</a></li>
                <li><a href="https://cofc.edu/visit/campusmaps.php">Campus Maps</a></li>
                <li><a href="https://help.cofc.edu/">IT Help</a></li>
                <li><a href="https://publicsafety.cofc.edu">Public Safety</a></li>
                <li><a href="https://transparency.cofc.edu/">Transparency Spending</a></li>
              </ul>                   
            </div>
            <div className="span3">
              <a href="https://cofc.edu/">
                <img width="200" height="55" src="https://cofc.edu/images/cofc-logo-2014d.png" alt="CofC Logo" pagespeed_url_hash="2729057520" />
              </a>
              <div>
                {/* <a href="https://cofc.edu"><div style={{ marginTop: '15px'}}><strong>College of Charleston</strong></div></a> */}
                <div>
                  <span>66 George Street</span><br />
                  <span>Charleston</span>,
                  <span>SC</span> 
                  <span>29424</span> 
                  <span>USA</span><br />
                  <span>843.805.5507</span>
                </div>
                {/* <ul className="footer-social-links">
                  <li className="footer-social-link"><a href="https://www.facebook.com/collegeofcharleston" className="footer-social-icon icon-facebook" title="Facebook"><span style="display:none">Facebook Page</span></a></li>
                  <li className="footer-social-link"><a href="https://www.instagram.com/collegeofcharleston/" className="footer-social-icon icon-instagram" title="Instagram"><span style="display:none">Instagram Social Media Account</span></a></li>
                  <li className="footer-social-link"><a href="https://www.linkedin.com/edu/school?id=19364" className="footer-social-icon icon-linkedin" title="LinkedIn"><span style="display:none">LinkedIn Social Media Account</span></a></li>
                  <li className="footer-social-link"><a href="https://twitter.com/CofC" className="footer-social-icon icon-twitter" title="Twitter"><span style="display:none">Twitter Social Media Account</span></a></li>
                  <li className="footer-social-link"><a href="https://www.youtube.com/user/collegeofcharleston" className="footer-social-icon icon-youtube" title="YouTube"><span style="display:none">YouTube Channel</span></a></li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">Copyright &copy; 2019 College of Charleston. All Right Reserved. | <a href="https://cofc.edu/privacypolicy/">Privacy Policy</a></div>
        {/* <div style="margin: 15px auto; font-size: 12px;text-align: center;">The College of Charleston prohibits any form of discrimination against its students, faculty, staff and applicants in its programs or for admission to or employment with the university. For more information, visit <a style="text-decoration:underline;font-size:12px;color:#fff" href="https://eop.cofc.edu/">Office of Equal Opportunity Programs (Title IX)</a>.</div> */}
      </div>
    </footer>
  )
}

export default Footer