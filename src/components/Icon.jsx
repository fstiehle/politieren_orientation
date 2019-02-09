import React from "react";
import SVG from "react-svg-inline"
import Categories from './Categories.jsx';

import soziales from '../svg/cat-icon-arbeit.svg';
import aussen from '../svg/cat-icon-aussenpolitik.svg';
import bildung from '../svg/cat-icon-bildung.svg';
import digitales from '../svg/cat-icon-digitales.svg';
import einwanderung from '../svg/cat-icon-einwanderung.svg';
import gesellschaft from '../svg/cat-icon-familie.svg';
import gesundheit from '../svg/cat-icon-gesundheit.svg';
import infrastruktur from '../svg/cat-icon-infrastruktur.svg';
import inneres from '../svg/cat-icon-inneres.svg';
import sicherheit from '../svg/cat-icon-sicherheit.svg';
import umwelt from '../svg/cat-icon-umwelt.svg';
import wirtschaft from '../svg/cat-icon-wirtschaft.svg';

import afd from '../svg/logo-afd-c.svg';
import cdu from '../svg/logo-cducsu-c.svg';
import fdp from '../svg/logo-fdp-c.svg';
import gruene from '../svg/logo-gruene-c.svg';
import linke from '../svg/logo-linke-c.svg';
import spd from '../svg/logo-spd-c.svg';

const Icon = ({name, tooltip}) => {
  let icon;
  switch (name) {
    case 'soziales':
      icon = soziales;
      break;
    case 'aussen':
      icon = aussen;
      break;
    case 'bildung':
      icon = bildung;
      break;
    case 'digitales':
      icon = digitales;
      break;
    case 'einwanderung':
      icon = einwanderung;
      break;
    case 'gesellschaft':
      icon = gesellschaft;
      break;
    case 'gesundheit':
      icon = gesundheit;
      break;
    case 'infrastruktur':
      icon = infrastruktur;
      break;
    case 'inneres':
      icon = inneres;
      break;
    case 'sicherheit':
      icon = sicherheit;
      break;
    case 'umwelt':
      icon = umwelt;
      break;
    case 'wirtschaft':
      icon = wirtschaft;
      break;

    case 'AFD':
      icon = afd;
      break;
    case 'CDU':
      icon = cdu;
      break;
    case 'FDP':
      icon = fdp;
      break;
    case 'GRÜNE':
      icon = gruene;
      break;
    case 'LINKE':
      icon = linke;
      break;
    case 'SPD':
      icon = spd;
      break;
  }

  return (
    <div data-tooltip={tooltip} id={name} className={"result-icon " + name}>
      <SVG width='100' height='100' svg={icon} />
    </div>
  );
}

export default Icon