
const express = require('express')
import {handler4300} from "./handler4300";
const app = express()
app.get('/4300', handler4300)
app.listen(3000, () => {})
        