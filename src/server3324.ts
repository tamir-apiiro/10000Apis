
const express = require('express')
import {handler3324} from "./handler3324";
const app = express()
app.get('/3324', handler3324)
app.listen(3000, () => {})
        