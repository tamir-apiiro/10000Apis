
const express = require('express')
import {handler7684} from "./handler7684";
const app = express()
app.get('/7684', handler7684)
app.listen(3000, () => {})
        