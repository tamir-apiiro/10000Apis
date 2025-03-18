
const express = require('express')
import {handler3343} from "./handler3343";
const app = express()
app.get('/3343', handler3343)
app.listen(3000, () => {})
        