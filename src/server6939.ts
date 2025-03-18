
const express = require('express')
import {handler6939} from "./handler6939";
const app = express()
app.get('/6939', handler6939)
app.listen(3000, () => {})
        