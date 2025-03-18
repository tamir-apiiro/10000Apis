
const express = require('express')
import {handler7076} from "./handler7076";
const app = express()
app.get('/7076', handler7076)
app.listen(3000, () => {})
        