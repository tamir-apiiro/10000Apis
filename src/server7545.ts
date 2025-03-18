
const express = require('express')
import {handler7545} from "./handler7545";
const app = express()
app.get('/7545', handler7545)
app.listen(3000, () => {})
        