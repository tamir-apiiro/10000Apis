
const express = require('express')
import {handler2620} from "./handler2620";
const app = express()
app.get('/2620', handler2620)
app.listen(3000, () => {})
        