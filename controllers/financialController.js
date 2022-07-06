import financialRepository from "../repositories/financialRepository.js";
import financialService from "../services/financialService.js";

async function postFinancialEvents(req, res){
  user = res.locals.user;
  const { value, type } = req.body;

  await financialService.financialTypes({ value, type });
  await financialRepository.insertFinancialEvent(user.id, value, type);
  
  return res.sendStatus(201);
}

async function getFinancialEvents(req, res){
  user = res.locals.user;
  
  const events = await financialRepository.infoFinancialEvent(user.id);
  
  return res.send(events.rows);
}

async function sumFinancialEvents (req, res){
  user = res.locals.user;

  const events = await financialRepository.infoFinancialEvent(user.id);
  const sum = await financialService.financialSum({ user });
  
  return res.send({ sum });
}

export { 
    postFinancialEvents,
    getFinancialEvents,
    sumFinancialEvents
}