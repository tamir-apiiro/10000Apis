
const express = require('express')
import {handler779} from "./handler779";
const app = express()
app.get('/779', handler779)
app.listen(3000, () => {})
        