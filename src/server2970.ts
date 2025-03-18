
const express = require('express')
import {handler2970} from "./handler2970";
const app = express()
app.get('/2970', handler2970)
app.listen(3000, () => {})
        