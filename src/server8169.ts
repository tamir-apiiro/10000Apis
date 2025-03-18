
const express = require('express')
import {handler8169} from "./handler8169";
const app = express()
app.get('/8169', handler8169)
app.listen(3000, () => {})
        