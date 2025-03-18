
const express = require('express')
import {handler6967} from "./handler6967";
const app = express()
app.get('/6967', handler6967)
app.listen(3000, () => {})
        