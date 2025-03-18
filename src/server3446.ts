
const express = require('express')
import {handler3446} from "./handler3446";
const app = express()
app.get('/3446', handler3446)
app.listen(3000, () => {})
        