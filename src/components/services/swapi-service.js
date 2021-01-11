// fetch('https://swapi.co/api/people/1/')
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body)
//     });

export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw  new Error(`Coud error ${url} end ${url.status}`)
        }

        const body = await  res.json();

        return body;
    };

    async getAllPlanets() {
        const res = await this.getResourse('/planets/');
        return res.results;
    }

    async getAllPeople() {
        const res = await this.getResourse('/people/');
        return res.results;
    }

    async getAllStarships() {
        const res = await this.getResourse('/starships/');
        return res.results;
    }

    getPlanets(id) {
        return this.getResourse(`/planets/${id}/`);
    }
    getPerson(id) {
        return this.getResourse(`/people/${id}/`);
    }
    getStarships(id) {
        return this.getResourse(`/starships/${id}/`);
    }
}

const swapi = new SwapiService();

swapi.getPerson(3).then((p) => {
    console.log(p.name)
});