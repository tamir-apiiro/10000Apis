
const express = require('express')
import {handler7032} from "./handler7032";
const app = express()
app.get('/7032', handler7032)
app.listen(3000, () => {})
        