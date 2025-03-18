
const express = require('express')
import {handler4203} from "./handler4203";
const app = express()
app.get('/4203', handler4203)
app.listen(3000, () => {})
        