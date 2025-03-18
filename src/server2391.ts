
const express = require('express')
import {handler2391} from "./handler2391";
const app = express()
app.get('/2391', handler2391)
app.listen(3000, () => {})
        