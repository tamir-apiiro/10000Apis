
const express = require('express')
import {handler402} from "./handler402";
const app = express()
app.get('/402', handler402)
app.listen(3000, () => {})
        