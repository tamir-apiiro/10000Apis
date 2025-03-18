
const express = require('express')
import {handler6807} from "./handler6807";
const app = express()
app.get('/6807', handler6807)
app.listen(3000, () => {})
        