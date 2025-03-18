
const express = require('express')
import {handler7327} from "./handler7327";
const app = express()
app.get('/7327', handler7327)
app.listen(3000, () => {})
        