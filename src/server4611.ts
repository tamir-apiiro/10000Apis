
const express = require('express')
import {handler4611} from "./handler4611";
const app = express()
app.get('/4611', handler4611)
app.listen(3000, () => {})
        