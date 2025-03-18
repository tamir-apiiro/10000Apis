
const express = require('express')
import {handler7300} from "./handler7300";
const app = express()
app.get('/7300', handler7300)
app.listen(3000, () => {})
        