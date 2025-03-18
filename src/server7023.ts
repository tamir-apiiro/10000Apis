
const express = require('express')
import {handler7023} from "./handler7023";
const app = express()
app.get('/7023', handler7023)
app.listen(3000, () => {})
        