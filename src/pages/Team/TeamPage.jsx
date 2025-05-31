import React from 'react';
import styles from "./TeamPage.module.scss";
import instLogo from "../../static/socials/inst.svg";
import githubLogo from "../../static/socials/github.svg";
import linkedinLogo from "../../static/socials/linkedin.svg";
import emailLogo from "../../static/socials/email.svg";
import teamMember1 from "../../static/teamMembers/teamMember1.png";
import ButtonHome from "../../components/ButtonHome/ButtonHome";
import { useEffect, useState } from "react";

const TeamPage = function () {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.headingSecondary}>who we are</h2>
        <h1 className={styles.headingPrimary}>Meet our team</h1>
        <p className={styles.description}>
          – the team of web developers. Every one has own role and is
          responsible for for certain unique domain of web development
        </p>
      </header>
      <div className={styles.figures}>
        <figure className={styles.figure}>
          <img
            alt="team member"
            className={styles.figurePhoto}
            src={teamMember1}
          />
          <div className={styles.figureInfo}>
            <h3 className={styles.figureName}>Anton Solianyk</h3>
            <p className={styles.figureSkills}>Frontend, Design</p>
          </div>
          <div className={styles.figureSocials}>
            <a
              href="https://www.linkedin.com/in/anton-solianyk-906453221/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinLogo}
                className={styles.linkedinLogo}
                alt="linkedin logo"
              />
            </a>
            <a
              href="https://github.com/antonio-backnotfront"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github logo" />
            </a>
            <a
              href="https://www.instagram.com/anton_solyanik/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instLogo} alt="inst logo" />
            </a>
            <a href="mailto: solyanicks@gmail.com">
              <img src={emailLogo} alt="email logo" />
            </a>
          </div>
        </figure>
        <figure className={styles.figure}>
          <img
            alt="team member"
            className={styles.figurePhoto}
            src={teamMember1}
          />
          <div className={styles.figureInfo}>
            <h3 className={styles.figureName}>Ihor Yakibiuk</h3>
            <p className={styles.figureSkills}>Frontend developer</p>
          </div>
          <div className={styles.figureSocials}>
            <a
              href="https://www.linkedin.com/in/ihor-yakibiuk-bb751522b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinLogo}
                className={styles.linkedinLogo}
                alt="linkedin logo"
              />
            </a>
            <a
              href="https://github.com/Igoryakib"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github logo" />
            </a>
            <a
              href="https://www.instagram.com/ihoryakib/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instLogo} alt="inst logo" />
            </a>
            <a href="mailto: solyanicks@gmail.com">
              <img src={emailLogo} alt="email logo" />
            </a>
          </div>
        </figure>
      </div>
      <ButtonHome />
    </section> 
    
  );
    
};

export default TeamPage;
