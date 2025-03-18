
const express = require('express')
import {handler6520} from "./handler6520";
const app = express()
app.get('/6520', handler6520)
app.listen(3000, () => {})
        