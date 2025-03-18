
const express = require('express')
import {handler6245} from "./handler6245";
const app = express()
app.get('/6245', handler6245)
app.listen(3000, () => {})
        