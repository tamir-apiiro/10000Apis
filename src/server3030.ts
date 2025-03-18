
const express = require('express')
import {handler3030} from "./handler3030";
const app = express()
app.get('/3030', handler3030)
app.listen(3000, () => {})
        