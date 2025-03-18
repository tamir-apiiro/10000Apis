
const express = require('express')
import {handler2605} from "./handler2605";
const app = express()
app.get('/2605', handler2605)
app.listen(3000, () => {})
        