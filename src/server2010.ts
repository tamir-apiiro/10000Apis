
const express = require('express')
import {handler2010} from "./handler2010";
const app = express()
app.get('/2010', handler2010)
app.listen(3000, () => {})
        