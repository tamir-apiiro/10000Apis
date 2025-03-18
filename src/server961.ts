
const express = require('express')
import {handler961} from "./handler961";
const app = express()
app.get('/961', handler961)
app.listen(3000, () => {})
        