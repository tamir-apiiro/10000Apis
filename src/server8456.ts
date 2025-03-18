
const express = require('express')
import {handler8456} from "./handler8456";
const app = express()
app.get('/8456', handler8456)
app.listen(3000, () => {})
        