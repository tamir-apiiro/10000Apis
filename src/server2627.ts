
const express = require('express')
import {handler2627} from "./handler2627";
const app = express()
app.get('/2627', handler2627)
app.listen(3000, () => {})
        