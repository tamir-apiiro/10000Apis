
const express = require('express')
import {handler2684} from "./handler2684";
const app = express()
app.get('/2684', handler2684)
app.listen(3000, () => {})
        