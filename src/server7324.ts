
const express = require('express')
import {handler7324} from "./handler7324";
const app = express()
app.get('/7324', handler7324)
app.listen(3000, () => {})
        