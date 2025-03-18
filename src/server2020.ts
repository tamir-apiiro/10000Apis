
const express = require('express')
import {handler2020} from "./handler2020";
const app = express()
app.get('/2020', handler2020)
app.listen(3000, () => {})
        