
const express = require('express')
import {handler6543} from "./handler6543";
const app = express()
app.get('/6543', handler6543)
app.listen(3000, () => {})
        