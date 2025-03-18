
const express = require('express')
import {handler258} from "./handler258";
const app = express()
app.get('/258', handler258)
app.listen(3000, () => {})
        