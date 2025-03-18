
const express = require('express')
import {handler3167} from "./handler3167";
const app = express()
app.get('/3167', handler3167)
app.listen(3000, () => {})
        