
const express = require('express')
import {handler2002} from "./handler2002";
const app = express()
app.get('/2002', handler2002)
app.listen(3000, () => {})
        