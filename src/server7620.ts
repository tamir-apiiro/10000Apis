
const express = require('express')
import {handler7620} from "./handler7620";
const app = express()
app.get('/7620', handler7620)
app.listen(3000, () => {})
        