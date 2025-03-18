
const express = require('express')
import {handler6249} from "./handler6249";
const app = express()
app.get('/6249', handler6249)
app.listen(3000, () => {})
        