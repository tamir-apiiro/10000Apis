
const express = require('express')
import {handler4876} from "./handler4876";
const app = express()
app.get('/4876', handler4876)
app.listen(3000, () => {})
        