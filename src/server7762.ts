
const express = require('express')
import {handler7762} from "./handler7762";
const app = express()
app.get('/7762', handler7762)
app.listen(3000, () => {})
        