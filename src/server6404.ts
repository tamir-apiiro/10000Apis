
const express = require('express')
import {handler6404} from "./handler6404";
const app = express()
app.get('/6404', handler6404)
app.listen(3000, () => {})
        