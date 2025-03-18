
const express = require('express')
import {handler3033} from "./handler3033";
const app = express()
app.get('/3033', handler3033)
app.listen(3000, () => {})
        