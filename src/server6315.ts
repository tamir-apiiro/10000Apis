
const express = require('express')
import {handler6315} from "./handler6315";
const app = express()
app.get('/6315', handler6315)
app.listen(3000, () => {})
        