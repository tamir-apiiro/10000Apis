
const express = require('express')
import {handler7261} from "./handler7261";
const app = express()
app.get('/7261', handler7261)
app.listen(3000, () => {})
        