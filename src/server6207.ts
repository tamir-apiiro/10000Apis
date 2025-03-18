
const express = require('express')
import {handler6207} from "./handler6207";
const app = express()
app.get('/6207', handler6207)
app.listen(3000, () => {})
        