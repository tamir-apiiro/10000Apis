
const express = require('express')
import {handler6560} from "./handler6560";
const app = express()
app.get('/6560', handler6560)
app.listen(3000, () => {})
        