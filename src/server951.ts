
const express = require('express')
import {handler951} from "./handler951";
const app = express()
app.get('/951', handler951)
app.listen(3000, () => {})
        