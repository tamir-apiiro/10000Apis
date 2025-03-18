
const express = require('express')
import {handler3276} from "./handler3276";
const app = express()
app.get('/3276', handler3276)
app.listen(3000, () => {})
        