
const express = require('express')
import {handler6811} from "./handler6811";
const app = express()
app.get('/6811', handler6811)
app.listen(3000, () => {})
        