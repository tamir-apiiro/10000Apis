
const express = require('express')
import {handler7315} from "./handler7315";
const app = express()
app.get('/7315', handler7315)
app.listen(3000, () => {})
        