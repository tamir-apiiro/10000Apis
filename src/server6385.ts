
const express = require('express')
import {handler6385} from "./handler6385";
const app = express()
app.get('/6385', handler6385)
app.listen(3000, () => {})
        