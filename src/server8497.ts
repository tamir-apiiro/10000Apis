
const express = require('express')
import {handler8497} from "./handler8497";
const app = express()
app.get('/8497', handler8497)
app.listen(3000, () => {})
        