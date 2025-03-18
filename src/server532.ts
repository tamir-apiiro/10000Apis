
const express = require('express')
import {handler532} from "./handler532";
const app = express()
app.get('/532', handler532)
app.listen(3000, () => {})
        