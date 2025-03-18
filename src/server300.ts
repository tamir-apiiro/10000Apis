
const express = require('express')
import {handler300} from "./handler300";
const app = express()
app.get('/300', handler300)
app.listen(3000, () => {})
        