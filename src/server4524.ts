
const express = require('express')
import {handler4524} from "./handler4524";
const app = express()
app.get('/4524', handler4524)
app.listen(3000, () => {})
        