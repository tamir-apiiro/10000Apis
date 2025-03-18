
const express = require('express')
import {handler7844} from "./handler7844";
const app = express()
app.get('/7844', handler7844)
app.listen(3000, () => {})
        