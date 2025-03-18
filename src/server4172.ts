
const express = require('express')
import {handler4172} from "./handler4172";
const app = express()
app.get('/4172', handler4172)
app.listen(3000, () => {})
        