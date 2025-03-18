
const express = require('express')
import {handler3016} from "./handler3016";
const app = express()
app.get('/3016', handler3016)
app.listen(3000, () => {})
        