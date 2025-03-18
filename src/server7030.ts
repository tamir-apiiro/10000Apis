
const express = require('express')
import {handler7030} from "./handler7030";
const app = express()
app.get('/7030', handler7030)
app.listen(3000, () => {})
        