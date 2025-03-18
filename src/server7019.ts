
const express = require('express')
import {handler7019} from "./handler7019";
const app = express()
app.get('/7019', handler7019)
app.listen(3000, () => {})
        