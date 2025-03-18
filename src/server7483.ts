
const express = require('express')
import {handler7483} from "./handler7483";
const app = express()
app.get('/7483', handler7483)
app.listen(3000, () => {})
        