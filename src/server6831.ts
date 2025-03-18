
const express = require('express')
import {handler6831} from "./handler6831";
const app = express()
app.get('/6831', handler6831)
app.listen(3000, () => {})
        