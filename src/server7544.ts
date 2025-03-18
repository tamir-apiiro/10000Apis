
const express = require('express')
import {handler7544} from "./handler7544";
const app = express()
app.get('/7544', handler7544)
app.listen(3000, () => {})
        