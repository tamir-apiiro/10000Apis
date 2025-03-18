
const express = require('express')
import {handler2005} from "./handler2005";
const app = express()
app.get('/2005', handler2005)
app.listen(3000, () => {})
        