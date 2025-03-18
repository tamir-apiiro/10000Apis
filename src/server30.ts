
const express = require('express')
import {handler30} from "./handler30";
const app = express()
app.get('/30', handler30)
app.listen(3000, () => {})
        