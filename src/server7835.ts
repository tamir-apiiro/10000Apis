
const express = require('express')
import {handler7835} from "./handler7835";
const app = express()
app.get('/7835', handler7835)
app.listen(3000, () => {})
        