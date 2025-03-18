
const express = require('express')
import {handler3656} from "./handler3656";
const app = express()
app.get('/3656', handler3656)
app.listen(3000, () => {})
        