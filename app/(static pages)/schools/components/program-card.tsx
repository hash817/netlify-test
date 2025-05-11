'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function ProgramCard() {
  const [showDetails, setShowDetails] = useState<string>("program-expanded-details");

  return (
    <>
      <article className="program-card">
        <div className="program-image">
          <Image
            src="/images/sp_shandong.JPG"
            alt="Singapore Polytechnic students"
            width="200"
            height="100"
          />
          <div className="program-badge">Most Popular</div>
        </div>
        <div className="program-details">
          <h3>Singapore Polytechnic Special Program</h3>
          <div className="program-meta">
            <span><i className="fas fa-calendar-alt"></i> 9 Days</span>
            <span><i className="fas fa-map-marker-alt"></i> Shandong, CHINA</span>
          </div>
          <ul className="program-features">
            <li><i className="fas fa-check-circle"></i> AI -focused industry visits</li>
            <li><i className="fas fa-check-circle"></i> University partner collaborations</li>
            <li><i className="fas fa-check-circle"></i> Innovation lab workshops</li>
            <li><i className="fas fa-check-circle"></i> Cultural exchange activities</li>
          </ul>
          <div className="program-footer">
            <div className="program-price">
              <span className="from">From</span>
              <span className="amount">$2,300</span>
              <span className="per-person">per student</span>
            </div>
            <div className="program-actions">
              <span className="details-button cursor-pointer" onClick={() => setShowDetails()}>More Details</span>
              <Link href="/itineraries/sp-program.pdf" className="download-btn">
                <i className="fas fa-file-pdf"></i> Sample Itinerary
              </Link>
            </div>
          </div>
        </div>
      </article>

      <div id="sp-details" className={showDetails}>
        <h4>Singapore Polytechnic Program Highlights</h4>
        <div className="details-grid">
          <div className="details-column">
            <h5><i className="fas fa-industry"></i> Industry Visits</h5>
            <ul>
              <li>Toyota Manufacturing Plant (Japan)</li>
              <li>Samsung Innovation Museum (Korea)</li>
              <li>Fraunhofer Institutes (Germany)</li>
            </ul>
          </div>
          <div className="details-column">
            <h5><i className="fas fa-flask"></i> Workshops</h5>
            <ul>
              <li>Robotics programming</li>
              <li>Green energy solutions</li>
              <li>3D printing applications</li>
            </ul>
          </div>
          <div className="details-column">
            <h5><i className="fas fa-graduation-cap"></i> Learning Outcomes</h5>
            <ul>
              <li>Global industry perspectives</li>
              <li>Cross-cultural teamwork</li>
              <li>Innovation methodologies</li>
            </ul>
          </div>
        </div>
        <button onClick={() => setShowDetails("program-expanded-details")} className="close-details">
          Close Details
        </button>
      </div>
    </>
  );
}