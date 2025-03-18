
const express = require('express')
import {handler7460} from "./handler7460";
const app = express()
app.get('/7460', handler7460)
app.listen(3000, () => {})
        