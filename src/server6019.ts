
const express = require('express')
import {handler6019} from "./handler6019";
const app = express()
app.get('/6019', handler6019)
app.listen(3000, () => {})
        