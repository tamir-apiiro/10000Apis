
const express = require('express')
import {handler6422} from "./handler6422";
const app = express()
app.get('/6422', handler6422)
app.listen(3000, () => {})
        