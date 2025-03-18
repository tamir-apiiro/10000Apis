
const express = require('express')
import {handler2337} from "./handler2337";
const app = express()
app.get('/2337', handler2337)
app.listen(3000, () => {})
        