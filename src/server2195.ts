
const express = require('express')
import {handler2195} from "./handler2195";
const app = express()
app.get('/2195', handler2195)
app.listen(3000, () => {})
        