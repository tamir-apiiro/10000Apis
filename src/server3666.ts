
const express = require('express')
import {handler3666} from "./handler3666";
const app = express()
app.get('/3666', handler3666)
app.listen(3000, () => {})
        