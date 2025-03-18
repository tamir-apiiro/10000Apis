
const express = require('express')
import {handler6145} from "./handler6145";
const app = express()
app.get('/6145', handler6145)
app.listen(3000, () => {})
        