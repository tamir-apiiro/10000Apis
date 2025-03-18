
const express = require('express')
import {handler3456} from "./handler3456";
const app = express()
app.get('/3456', handler3456)
app.listen(3000, () => {})
        