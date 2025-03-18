
const express = require('express')
import {handler3227} from "./handler3227";
const app = express()
app.get('/3227', handler3227)
app.listen(3000, () => {})
        