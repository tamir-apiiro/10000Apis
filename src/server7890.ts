
const express = require('express')
import {handler7890} from "./handler7890";
const app = express()
app.get('/7890', handler7890)
app.listen(3000, () => {})
        