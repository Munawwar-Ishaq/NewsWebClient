import React from 'react';
import './style.css';
import Header from '../../Common/Header';

const newsReporting = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e';
const teamCollaboration = 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6';
const globalNews = 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913';
const communityEngagement = 'https://images.unsplash.com/photo-1485988412941-77a35537dae4';
const contactUs = 'https://images.unsplash.com/photo-1521791136064-7986c2920216';

const About = () => {
  return (
    <>
      <Header tab={'about'} showtab={true} />
    <div className="about-page">
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Echo News Network (ENN) is a modern and dynamic news platform dedicated to delivering
          high-quality, reliable, and engaging news to our audience. Founded in 2024, ENN is
          committed to providing insightful analysis, breaking news, and in-depth reporting across
          a wide range of topics, including politics, technology, culture, health, and more.
        </p>
      </section>

      <img src={newsReporting} alt="News Reporting" className="image" />

      <section className="mission-values">
        <h2>Our Mission</h2>
        <p>
          To inform, inspire, and empower our audience by delivering news that matters.
        </p>
        <p>
          At ENN, we believe that news should be more than just information—it should be a catalyst
          for change. Our mission is to provide our readers with the knowledge they need to make
          informed decisions and contribute positively to society.
        </p>
      </section>

      <img src={teamCollaboration} alt="Team Collaboration" className="image" />

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity</strong>: We uphold the highest standards of journalistic ethics.</li>
          <li><strong>Accuracy</strong>: We ensure that every piece of news we report is thoroughly vetted and factual.</li>
          <li><strong>Objectivity</strong>: We present news in an unbiased manner, allowing our readers to form their own opinions.</li>
          <li><strong>Innovation</strong>: We embrace the latest technologies to enhance the news consumption experience.</li>
          <li><strong>Community</strong>: We strive to create a connected and informed global community.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>
          Echo News Network is powered by a diverse and talented team of journalists, editors, and
          digital media professionals. Our team is dedicated to uncovering the truth and delivering
          it to you with clarity and precision.
        </p>
        <div className="team-list">
          <p><strong>Jane Doe</strong> - Editor-in-Chief</p>
          <p><strong>John Smith</strong> - Senior Political Analyst</p>
          <p><strong>Emily White</strong> - Technology Correspondent</p>
          <p><strong>Michael Brown</strong> - Health and Science Reporter</p>
        </div>
      </section>

      <img src={globalNews} alt="Global News" className="image" />

      <section className="coverage">
        <h2>What We Cover</h2>
        <p>
          ENN offers comprehensive coverage on a wide range of topics:
        </p>
        <ul>
          <li><strong>Breaking News</strong>: Stay updated with the latest headlines from around the world.</li>
          <li><strong>Politics</strong>: In-depth analysis and coverage of local and global political landscapes.</li>
          <li><strong>Technology</strong>: The latest advancements and trends in the tech world.</li>
          <li><strong>Culture</strong>: Explore diverse cultural perspectives and stories.</li>
          <li><strong>Health</strong>: Up-to-date information on health trends, research, and advice.</li>
        </ul>
      </section>

      <img src={communityEngagement} alt="Community Engagement" className="image" />

      <section className="join-community">
        <h2>Join Our Community</h2>
        <p>
          At Echo News Network, we value the voices and perspectives of our readers. Join our
          community to stay informed and engaged:
        </p>
        <ul>
          <li><strong>Subscribe</strong>: Sign up for our daily newsletter to receive the latest news directly to your inbox.</li>
          <li><strong>Follow Us</strong>: Connect with us on social media for real-time updates and discussions.</li>
          <li><strong>Contribute</strong>: Share your stories and opinions with us. We welcome guest contributions and letters to the editor.</li>
        </ul>
      </section>

      <img src={contactUs} alt="Contact Us" className="image" />

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! For inquiries, feedback, or suggestions, please contact us at:
        </p>
        <ul>
          <li><strong>Email</strong>: contact@echonewsnetwork.com</li>
          <li><strong>Phone</strong>: +92-314-1304783</li>
          <li><strong>Address</strong>: Sector 11-G Godhra Colony New Karachi , Karachi, Pakistan</li>
        </ul>
      </section>
    </div>
    </>

  );
};

export default About;
