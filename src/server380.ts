
const express = require('express')
import {handler380} from "./handler380";
const app = express()
app.get('/380', handler380)
app.listen(3000, () => {})
        