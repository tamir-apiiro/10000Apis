
const express = require('express')
import {handler6318} from "./handler6318";
const app = express()
app.get('/6318', handler6318)
app.listen(3000, () => {})
        