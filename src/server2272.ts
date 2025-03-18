
const express = require('express')
import {handler2272} from "./handler2272";
const app = express()
app.get('/2272', handler2272)
app.listen(3000, () => {})
        