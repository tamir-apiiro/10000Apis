
const express = require('express')
import {handler1779} from "./handler1779";
const app = express()
app.get('/1779', handler1779)
app.listen(3000, () => {})
        