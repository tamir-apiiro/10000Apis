
const express = require('express')
import {handler7842} from "./handler7842";
const app = express()
app.get('/7842', handler7842)
app.listen(3000, () => {})
        