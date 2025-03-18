
const express = require('express')
import {handler3887} from "./handler3887";
const app = express()
app.get('/3887', handler3887)
app.listen(3000, () => {})
        