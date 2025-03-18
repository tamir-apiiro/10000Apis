
const express = require('express')
import {handler7549} from "./handler7549";
const app = express()
app.get('/7549', handler7549)
app.listen(3000, () => {})
        