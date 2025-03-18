
const express = require('express')
import {handler7272} from "./handler7272";
const app = express()
app.get('/7272', handler7272)
app.listen(3000, () => {})
        