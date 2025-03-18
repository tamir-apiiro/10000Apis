
const express = require('express')
import {handler6416} from "./handler6416";
const app = express()
app.get('/6416', handler6416)
app.listen(3000, () => {})
        