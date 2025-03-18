
const express = require('express')
import {handler7205} from "./handler7205";
const app = express()
app.get('/7205', handler7205)
app.listen(3000, () => {})
        