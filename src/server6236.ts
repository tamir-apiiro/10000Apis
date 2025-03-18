
const express = require('express')
import {handler6236} from "./handler6236";
const app = express()
app.get('/6236', handler6236)
app.listen(3000, () => {})
        