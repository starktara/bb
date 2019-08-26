export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const Menu =  [
    {
      id: 0,
      title: 'Price - Low to High',
      selected: false,
      key: 'location'
  },
  {
    id: 1,
    title: 'Price - High to Low',
    selected: false,
    key: 'location'
  },
  {
    id: 2,
    title: 'Distance from My Location - Low to High',
    selected: false,
    key: 'location'
  },
  {
    id: 3,
    title: 'Manufacturing Year - Low to High',
    selected: false,
    key: 'location'
  },
  {
    id: 4,
    title: 'Manufacturing Year - High to Low',
    selected: false,
    key: 'location'
  },
  {
    id: 5,
    title: 'Kilometer - Low to High',
    selected: false,
    key: 'location'
  }
  ];