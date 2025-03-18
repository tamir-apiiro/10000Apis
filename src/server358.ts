
const express = require('express')
import {handler358} from "./handler358";
const app = express()
app.get('/358', handler358)
app.listen(3000, () => {})
        