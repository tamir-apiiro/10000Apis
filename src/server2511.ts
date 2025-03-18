
const express = require('express')
import {handler2511} from "./handler2511";
const app = express()
app.get('/2511', handler2511)
app.listen(3000, () => {})
        