
const express = require('express')
import {handler2120} from "./handler2120";
const app = express()
app.get('/2120', handler2120)
app.listen(3000, () => {})
        