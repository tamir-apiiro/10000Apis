
const express = require('express')
import {handler3506} from "./handler3506";
const app = express()
app.get('/3506', handler3506)
app.listen(3000, () => {})
        