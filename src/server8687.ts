
const express = require('express')
import {handler8687} from "./handler8687";
const app = express()
app.get('/8687', handler8687)
app.listen(3000, () => {})
        