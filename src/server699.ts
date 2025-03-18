
const express = require('express')
import {handler699} from "./handler699";
const app = express()
app.get('/699', handler699)
app.listen(3000, () => {})
        