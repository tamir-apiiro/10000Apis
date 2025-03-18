
const express = require('express')
import {handler7049} from "./handler7049";
const app = express()
app.get('/7049', handler7049)
app.listen(3000, () => {})
        