
const express = require('express')
import {handler3870} from "./handler3870";
const app = express()
app.get('/3870', handler3870)
app.listen(3000, () => {})
        