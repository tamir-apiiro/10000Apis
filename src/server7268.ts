
const express = require('express')
import {handler7268} from "./handler7268";
const app = express()
app.get('/7268', handler7268)
app.listen(3000, () => {})
        