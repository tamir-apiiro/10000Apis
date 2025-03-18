
const express = require('express')
import {handler742} from "./handler742";
const app = express()
app.get('/742', handler742)
app.listen(3000, () => {})
        