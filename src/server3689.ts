
const express = require('express')
import {handler3689} from "./handler3689";
const app = express()
app.get('/3689', handler3689)
app.listen(3000, () => {})
        