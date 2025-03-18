
const express = require('express')
import {handler3832} from "./handler3832";
const app = express()
app.get('/3832', handler3832)
app.listen(3000, () => {})
        