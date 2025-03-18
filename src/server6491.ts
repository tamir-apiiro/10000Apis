
const express = require('express')
import {handler6491} from "./handler6491";
const app = express()
app.get('/6491', handler6491)
app.listen(3000, () => {})
        