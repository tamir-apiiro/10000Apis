
const express = require('express')
import {handler2332} from "./handler2332";
const app = express()
app.get('/2332', handler2332)
app.listen(3000, () => {})
        