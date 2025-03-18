
const express = require('express')
import {handler6449} from "./handler6449";
const app = express()
app.get('/6449', handler6449)
app.listen(3000, () => {})
        