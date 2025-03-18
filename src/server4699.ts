
const express = require('express')
import {handler4699} from "./handler4699";
const app = express()
app.get('/4699', handler4699)
app.listen(3000, () => {})
        