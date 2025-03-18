
const express = require('express')
import {handler3153} from "./handler3153";
const app = express()
app.get('/3153', handler3153)
app.listen(3000, () => {})
        