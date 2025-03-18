
const express = require('express')
import {handler6467} from "./handler6467";
const app = express()
app.get('/6467', handler6467)
app.listen(3000, () => {})
        