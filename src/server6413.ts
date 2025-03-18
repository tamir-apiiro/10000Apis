
const express = require('express')
import {handler6413} from "./handler6413";
const app = express()
app.get('/6413', handler6413)
app.listen(3000, () => {})
        