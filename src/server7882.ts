
const express = require('express')
import {handler7882} from "./handler7882";
const app = express()
app.get('/7882', handler7882)
app.listen(3000, () => {})
        