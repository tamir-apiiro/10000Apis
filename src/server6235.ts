
const express = require('express')
import {handler6235} from "./handler6235";
const app = express()
app.get('/6235', handler6235)
app.listen(3000, () => {})
        