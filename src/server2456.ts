
const express = require('express')
import {handler2456} from "./handler2456";
const app = express()
app.get('/2456', handler2456)
app.listen(3000, () => {})
        