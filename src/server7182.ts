
const express = require('express')
import {handler7182} from "./handler7182";
const app = express()
app.get('/7182', handler7182)
app.listen(3000, () => {})
        