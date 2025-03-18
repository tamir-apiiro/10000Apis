
const express = require('express')
import {handler6544} from "./handler6544";
const app = express()
app.get('/6544', handler6544)
app.listen(3000, () => {})
        