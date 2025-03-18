
const express = require('express')
import {handler3432} from "./handler3432";
const app = express()
app.get('/3432', handler3432)
app.listen(3000, () => {})
        