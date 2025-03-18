
const express = require('express')
import {handler6946} from "./handler6946";
const app = express()
app.get('/6946', handler6946)
app.listen(3000, () => {})
        