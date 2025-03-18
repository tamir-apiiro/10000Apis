
const express = require('express')
import {handler7570} from "./handler7570";
const app = express()
app.get('/7570', handler7570)
app.listen(3000, () => {})
        