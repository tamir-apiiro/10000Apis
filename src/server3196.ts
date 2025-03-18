
const express = require('express')
import {handler3196} from "./handler3196";
const app = express()
app.get('/3196', handler3196)
app.listen(3000, () => {})
        