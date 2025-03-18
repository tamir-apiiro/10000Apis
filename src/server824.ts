
const express = require('express')
import {handler824} from "./handler824";
const app = express()
app.get('/824', handler824)
app.listen(3000, () => {})
        