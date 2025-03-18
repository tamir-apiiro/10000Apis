
const express = require('express')
import {handler3645} from "./handler3645";
const app = express()
app.get('/3645', handler3645)
app.listen(3000, () => {})
        