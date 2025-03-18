
const express = require('express')
import {handler7310} from "./handler7310";
const app = express()
app.get('/7310', handler7310)
app.listen(3000, () => {})
        