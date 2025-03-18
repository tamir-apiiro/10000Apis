
const express = require('express')
import {handler6405} from "./handler6405";
const app = express()
app.get('/6405', handler6405)
app.listen(3000, () => {})
        