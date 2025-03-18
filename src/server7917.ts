
const express = require('express')
import {handler7917} from "./handler7917";
const app = express()
app.get('/7917', handler7917)
app.listen(3000, () => {})
        