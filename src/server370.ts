
const express = require('express')
import {handler370} from "./handler370";
const app = express()
app.get('/370', handler370)
app.listen(3000, () => {})
        