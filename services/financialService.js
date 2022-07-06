import { unprocessableEntityError } from "../middlewares/errorsMiddleware.js";
import financialRepository from "../repositories/financialRepository.js";

function financialTypes({ value, type }){
    if (!value || !type) {
       throw unprocessableEntityError();
    }
  
    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        throw unprocessableEntityError();
    }
  
    if (value < 0) {
        throw unprocessableEntityError();
    }    
}
function financialSum({ user }){
    const events = financialRepository.infoFinancialEvent(user.id);
  
    const sum = events.rows.reduce(
      (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
      0
    );
    
    return sum;
}

const financialService = {
    financialTypes,
    financialSum
};

export default financialService;