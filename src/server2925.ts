
const express = require('express')
import {handler2925} from "./handler2925";
const app = express()
app.get('/2925', handler2925)
app.listen(3000, () => {})
        