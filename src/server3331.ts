
const express = require('express')
import {handler3331} from "./handler3331";
const app = express()
app.get('/3331', handler3331)
app.listen(3000, () => {})
        