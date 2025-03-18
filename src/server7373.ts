
const express = require('express')
import {handler7373} from "./handler7373";
const app = express()
app.get('/7373', handler7373)
app.listen(3000, () => {})
        