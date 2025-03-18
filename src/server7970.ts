
const express = require('express')
import {handler7970} from "./handler7970";
const app = express()
app.get('/7970', handler7970)
app.listen(3000, () => {})
        