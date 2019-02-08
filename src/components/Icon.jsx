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

const Icon = ({name}) => {
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
  }

  return (
    <div data-tooltip={Categories[name]} id={name} className={"result-icon " + name}>
      <SVG width='100' height='100' svg={icon} />
    </div>
  );
}

export default Icon