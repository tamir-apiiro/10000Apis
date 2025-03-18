
const express = require('express')
import {handler639} from "./handler639";
const app = express()
app.get('/639', handler639)
app.listen(3000, () => {})
        