
const express = require('express')
import {handler6118} from "./handler6118";
const app = express()
app.get('/6118', handler6118)
app.listen(3000, () => {})
        