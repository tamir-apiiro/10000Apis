
const express = require('express')
import {handler3949} from "./handler3949";
const app = express()
app.get('/3949', handler3949)
app.listen(3000, () => {})
        