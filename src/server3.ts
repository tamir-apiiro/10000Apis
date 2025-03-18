
const express = require('express')
import {handler3} from "./handler3";
const app = express()
app.get('/3', handler3)
app.listen(3000, () => {})
        