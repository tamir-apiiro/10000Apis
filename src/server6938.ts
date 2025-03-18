
const express = require('express')
import {handler6938} from "./handler6938";
const app = express()
app.get('/6938', handler6938)
app.listen(3000, () => {})
        