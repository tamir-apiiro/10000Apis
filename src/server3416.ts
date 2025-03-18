
const express = require('express')
import {handler3416} from "./handler3416";
const app = express()
app.get('/3416', handler3416)
app.listen(3000, () => {})
        