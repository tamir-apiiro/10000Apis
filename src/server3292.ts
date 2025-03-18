
const express = require('express')
import {handler3292} from "./handler3292";
const app = express()
app.get('/3292', handler3292)
app.listen(3000, () => {})
        