
const express = require('express')
import {handler6566} from "./handler6566";
const app = express()
app.get('/6566', handler6566)
app.listen(3000, () => {})
        