
const express = require('express')
import {handler6150} from "./handler6150";
const app = express()
app.get('/6150', handler6150)
app.listen(3000, () => {})
        