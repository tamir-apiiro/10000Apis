
const express = require('express')
import {handler8545} from "./handler8545";
const app = express()
app.get('/8545', handler8545)
app.listen(3000, () => {})
        