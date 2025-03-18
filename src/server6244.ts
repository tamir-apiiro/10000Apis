
const express = require('express')
import {handler6244} from "./handler6244";
const app = express()
app.get('/6244', handler6244)
app.listen(3000, () => {})
        