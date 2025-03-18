
const express = require('express')
import {handler4824} from "./handler4824";
const app = express()
app.get('/4824', handler4824)
app.listen(3000, () => {})
        