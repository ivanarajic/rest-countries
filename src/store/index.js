import { makeAutoObservable, flow } from 'mobx';

class Store {
  data = [];

  constructor() {
    makeAutoObservable(this, {
      fetchCountries: flow,
    });
  }

  filterCountries(status) {
    switch (status) {
      case 'Americas':
        return this.data.filter((data) => data.region === 'Americas');
      case 'Europe':
        return this.data.filter((data) => data.region === 'Europe');
      case 'Africa':
        return this.data.filter((data) => data.region === 'Africa');
      case 'Oceania':
        return this.data.filter((data) => data.region === 'Oceania');
      case 'Asia':
        return this.data.filter((data) => data.region === 'Asia');
      case status:
        return this.data.filter((country) =>
          country.name.toLowerCase().includes(status.toLowerCase().trim())
        );
      default:
        return this.data;
    }
  }

  *fetchCountries() {
    try {
      const res = yield fetch('../../data.json');
      const countries = yield res.json();
      return this.data.push(...countries);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Store;
