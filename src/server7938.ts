
const express = require('express')
import {handler7938} from "./handler7938";
const app = express()
app.get('/7938', handler7938)
app.listen(3000, () => {})
        