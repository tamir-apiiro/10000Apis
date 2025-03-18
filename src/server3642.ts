
const express = require('express')
import {handler3642} from "./handler3642";
const app = express()
app.get('/3642', handler3642)
app.listen(3000, () => {})
        