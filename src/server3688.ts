
const express = require('express')
import {handler3688} from "./handler3688";
const app = express()
app.get('/3688', handler3688)
app.listen(3000, () => {})
        