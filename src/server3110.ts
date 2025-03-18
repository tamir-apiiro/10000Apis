
const express = require('express')
import {handler3110} from "./handler3110";
const app = express()
app.get('/3110', handler3110)
app.listen(3000, () => {})
        