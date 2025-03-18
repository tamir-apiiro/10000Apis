
const express = require('express')
import {handler7070} from "./handler7070";
const app = express()
app.get('/7070', handler7070)
app.listen(3000, () => {})
        