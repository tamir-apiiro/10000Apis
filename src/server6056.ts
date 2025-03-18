
const express = require('express')
import {handler6056} from "./handler6056";
const app = express()
app.get('/6056', handler6056)
app.listen(3000, () => {})
        