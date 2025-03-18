
const express = require('express')
import {handler77} from "./handler77";
const app = express()
app.get('/77', handler77)
app.listen(3000, () => {})
        