
export const setMinExperienceFilter = (minExperience) => {
    return {
      type: 'SET_MIN_EXPERIENCE_FILTER',
      payload: minExperience,
    };
  };
  
  // Create similar action creators for other filters
  