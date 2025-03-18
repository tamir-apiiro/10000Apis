
const express = require('express')
import {handler7550} from "./handler7550";
const app = express()
app.get('/7550', handler7550)
app.listen(3000, () => {})
        