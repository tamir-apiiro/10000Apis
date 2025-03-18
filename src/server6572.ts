
const express = require('express')
import {handler6572} from "./handler6572";
const app = express()
app.get('/6572', handler6572)
app.listen(3000, () => {})
        