
const express = require('express')
import {handler1699} from "./handler1699";
const app = express()
app.get('/1699', handler1699)
app.listen(3000, () => {})
        