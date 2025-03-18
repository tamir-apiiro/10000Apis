
const express = require('express')
import {handler7697} from "./handler7697";
const app = express()
app.get('/7697', handler7697)
app.listen(3000, () => {})
        