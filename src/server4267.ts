
const express = require('express')
import {handler4267} from "./handler4267";
const app = express()
app.get('/4267', handler4267)
app.listen(3000, () => {})
        