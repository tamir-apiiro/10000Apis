
const express = require('express')
import {handler7157} from "./handler7157";
const app = express()
app.get('/7157', handler7157)
app.listen(3000, () => {})
        