
const express = require('express')
import {handler7361} from "./handler7361";
const app = express()
app.get('/7361', handler7361)
app.listen(3000, () => {})
        