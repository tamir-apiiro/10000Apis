
const express = require('express')
import {handler6536} from "./handler6536";
const app = express()
app.get('/6536', handler6536)
app.listen(3000, () => {})
        