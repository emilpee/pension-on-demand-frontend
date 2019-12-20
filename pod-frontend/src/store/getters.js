import data from '../data/data.json';

export default {
    getTotalDebts: state => {
        return data.map(asset => {
            let total;

            asset.debts.forEach(item => total = state.totalDebts += Number(item.value));
            state.totalDebts = total;

            return state.totalDebts;
        })
    },
    filterTypes: state => {
        return state.choices.map(choice => choice.type);
    },
    getPensionValues: state => {
        return state.userData.pension.map(val => val.value);
    }
}