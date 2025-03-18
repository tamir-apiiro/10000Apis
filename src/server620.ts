
const express = require('express')
import {handler620} from "./handler620";
const app = express()
app.get('/620', handler620)
app.listen(3000, () => {})
        