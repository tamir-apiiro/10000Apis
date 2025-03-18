
const express = require('express')
import {handler6033} from "./handler6033";
const app = express()
app.get('/6033', handler6033)
app.listen(3000, () => {})
        