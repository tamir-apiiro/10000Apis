
const express = require('express')
import {handler3205} from "./handler3205";
const app = express()
app.get('/3205', handler3205)
app.listen(3000, () => {})
        