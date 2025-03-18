
const express = require('express')
import {handler3549} from "./handler3549";
const app = express()
app.get('/3549', handler3549)
app.listen(3000, () => {})
        