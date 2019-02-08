import Questions from '../data/questions.json';
import Categories from './components/Categories.jsx';
import { isArray } from 'util';

import AFD from '../data/answer_afd.json';
import CDU from '../data/answer_cdu.json';
import FDP from '../data/answer_fdp.json';
import GRUENE from '../data/answer_gruene.json';
import LINKE from '../data/answer_linke.json';

export default class Calculator {

  static sum(array) {
    return array.reduce((a, b) => a + b);
  }

  static calculateDeviation(answers_user, answers_party) {
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
      'LINKE' : Calculator.calculateDeviation(answers_user, LINKE)
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

      // Deviation in %
      deviations[party] = 100 - total_deviation / (entries.length * 4) * 100;
    }

    // Sort for best match
    return Object.entries(deviations).sort((a, b) => b[1] - a[1]);
  }

  static filterAnswers(categories, answers) {
    
    if ( !isArray(answers) ) {
      return false;
    }

    // Deep copy
    answers = Array.from(answers);

    if ( !isArray(categories) ) {
      categories = [categories];
    }

    answers.forEach((_, index) => {
      
      Questions[index]['category'].forEach(category => {

        categories.forEach(allowed_cat => {
          const name = Categories[allowed_cat];

          if ( name != category ) {
            delete answers[index];
          }
          
        });

      });
        
    });

    return answers;
  }

}