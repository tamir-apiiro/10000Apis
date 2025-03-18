
const express = require('express')
import {handler697} from "./handler697";
const app = express()
app.get('/697', handler697)
app.listen(3000, () => {})
        