
const express = require('express')
import {handler4102} from "./handler4102";
const app = express()
app.get('/4102', handler4102)
app.listen(3000, () => {})
        