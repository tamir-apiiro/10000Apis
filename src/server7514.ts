
const express = require('express')
import {handler7514} from "./handler7514";
const app = express()
app.get('/7514', handler7514)
app.listen(3000, () => {})
        