
const express = require('express')
import {handler3076} from "./handler3076";
const app = express()
app.get('/3076', handler3076)
app.listen(3000, () => {})
        