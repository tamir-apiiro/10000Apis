
const express = require('express')
import {handler7281} from "./handler7281";
const app = express()
app.get('/7281', handler7281)
app.listen(3000, () => {})
        