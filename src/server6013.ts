
const express = require('express')
import {handler6013} from "./handler6013";
const app = express()
app.get('/6013', handler6013)
app.listen(3000, () => {})
        