
const express = require('express')
import {handler786} from "./handler786";
const app = express()
app.get('/786', handler786)
app.listen(3000, () => {})
        