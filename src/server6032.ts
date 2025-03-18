
const express = require('express')
import {handler6032} from "./handler6032";
const app = express()
app.get('/6032', handler6032)
app.listen(3000, () => {})
        