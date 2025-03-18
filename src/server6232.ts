
const express = require('express')
import {handler6232} from "./handler6232";
const app = express()
app.get('/6232', handler6232)
app.listen(3000, () => {})
        