
const express = require('express')
import {handler456} from "./handler456";
const app = express()
app.get('/456', handler456)
app.listen(3000, () => {})
        