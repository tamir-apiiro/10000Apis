
const express = require('express')
import {handler4779} from "./handler4779";
const app = express()
app.get('/4779', handler4779)
app.listen(3000, () => {})
        