
const express = require('express')
import {handler6941} from "./handler6941";
const app = express()
app.get('/6941', handler6941)
app.listen(3000, () => {})
        