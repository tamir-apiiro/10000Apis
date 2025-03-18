
const express = require('express')
import {handler7575} from "./handler7575";
const app = express()
app.get('/7575', handler7575)
app.listen(3000, () => {})
        