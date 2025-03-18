
const express = require('express')
import {handler3332} from "./handler3332";
const app = express()
app.get('/3332', handler3332)
app.listen(3000, () => {})
        