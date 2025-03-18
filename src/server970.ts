
const express = require('express')
import {handler970} from "./handler970";
const app = express()
app.get('/970', handler970)
app.listen(3000, () => {})
        