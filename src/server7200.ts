
const express = require('express')
import {handler7200} from "./handler7200";
const app = express()
app.get('/7200', handler7200)
app.listen(3000, () => {})
        