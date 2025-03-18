
const express = require('express')
import {handler7415} from "./handler7415";
const app = express()
app.get('/7415', handler7415)
app.listen(3000, () => {})
        