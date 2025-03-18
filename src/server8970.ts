
const express = require('express')
import {handler8970} from "./handler8970";
const app = express()
app.get('/8970', handler8970)
app.listen(3000, () => {})
        