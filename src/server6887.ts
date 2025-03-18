
const express = require('express')
import {handler6887} from "./handler6887";
const app = express()
app.get('/6887', handler6887)
app.listen(3000, () => {})
        