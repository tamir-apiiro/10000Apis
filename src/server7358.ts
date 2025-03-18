
const express = require('express')
import {handler7358} from "./handler7358";
const app = express()
app.get('/7358', handler7358)
app.listen(3000, () => {})
        