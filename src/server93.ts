
const express = require('express')
import {handler93} from "./handler93";
const app = express()
app.get('/93', handler93)
app.listen(3000, () => {})
        