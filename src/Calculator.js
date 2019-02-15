import Questions from '../data/questions.json';
import Categories from './components/Categories.jsx';
import { isArray } from 'util';

import AFD from '../data/answer_afd.json';
import CDU from '../data/answer_cdu.json';
import FDP from '../data/answer_fdp.json';
import GRUENE from '../data/answer_gruene.json';
import SPD from '../data/answer_spd.json';
import LINKE from '../data/answer_linke.json';

export default class Calculator {

  static sum(array) {
    return array.reduce((a, b) => a + b);
  }

  static removeNonAnswers(answers) {

    answers.forEach((answer, index) => {

      if ( isNaN( answer ) ) {
        delete answers[index];
      }
 
    });

    return answers;
  }

  static calculateDeviation(answers_user, answers_party) {
    answers_user = Calculator.removeNonAnswers( answers_user );
    const result = [];
    answers_user.forEach( ( answer, index ) => {
      result[index] = Math.abs( answers_party[index] - answer );
    });
    
    return result;
  }

  static calculateAllDeviations(answers_user) {
    const deviations = {
      'AFD' : Calculator.calculateDeviation(answers_user, AFD),
      'CDU' : Calculator.calculateDeviation(answers_user, CDU),
      'FDP' : Calculator.calculateDeviation(answers_user, FDP),
      'GRÜNE' : Calculator.calculateDeviation(answers_user, GRUENE),
      'LINKE' : Calculator.calculateDeviation(answers_user, LINKE),
      'SPD' : Calculator.calculateDeviation(answers_user, SPD)
    }

    return deviations;
  }

  static calculateDeviationForParty(answers_user, party) {
    switch (party) {
      case 'AFD':
        return { 'AFD': Calculator.calculateDeviation(answers_user, AFD) };

      case 'CDU':
        return { 'CDU': Calculator.calculateDeviation(answers_user, CDU) };
      
      case 'FDP':
        return { 'FDP': Calculator.calculateDeviation(answers_user, FDP) };
      
      case 'GRÜNE':
        return { 'GRÜNE': Calculator.calculateDeviation(answers_user, GRUENE) };
      
      case 'LINKE':
        return { 'LINKE': Calculator.calculateDeviation(answers_user, LINKE) };
      
      case 'SPD':
        return { 'SPD': Calculator.calculateDeviation(answers_user, SPD) };
    }
    return false;
  }

  static deviationPercentage(result) {
    const deviations = {};

    const entries = Object.entries(result);
    for (const [party, deviation] of entries) {

      if ( deviation.length < 1 ) {
        deviations[party] = 0;
        continue;
      }

      // Sum deviation
      const total_deviation = deviation.reduce((a, b) => a + b, 0);
      const length = Calculator.countNotEmpties(deviation);

      // Deviation in %
      deviations[party] = Math.round( 100 - total_deviation / (length * 4) * 100 );
    }

    // Sort for best match
    return Object.entries(deviations).sort((a, b) => b[1] - a[1]);
  }

  static filterAnswers(allowedCats, answers) {
    
    if ( !isArray(answers) ) {
      return false;
    }

    // Deep copy
    answers = Array.from(answers);

    if ( !isArray(allowedCats) ) {
      allowedCats = [allowedCats];
    }

    answers.forEach((_, index) => {
      
      Questions[index]['category'].forEach(category => {

        if ( !allowedCats.includes(category) ) {
          delete answers[index];
        }

      });
        
    });

    return answers;
  }

  static countNotEmpties(array) {
    let i = 0;
    array.forEach(element => {
      if (!isNaN(element)) {
        ++i;
      }
    });
    return i;
  }

}