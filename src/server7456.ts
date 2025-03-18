
const express = require('express')
import {handler7456} from "./handler7456";
const app = express()
app.get('/7456', handler7456)
app.listen(3000, () => {})
        