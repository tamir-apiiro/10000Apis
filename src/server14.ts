
const express = require('express')
import {handler14} from "./handler14";
const app = express()
app.get('/14', handler14)
app.listen(3000, () => {})
        