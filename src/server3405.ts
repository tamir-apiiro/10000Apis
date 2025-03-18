
const express = require('express')
import {handler3405} from "./handler3405";
const app = express()
app.get('/3405', handler3405)
app.listen(3000, () => {})
        