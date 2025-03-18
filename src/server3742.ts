
const express = require('express')
import {handler3742} from "./handler3742";
const app = express()
app.get('/3742', handler3742)
app.listen(3000, () => {})
        