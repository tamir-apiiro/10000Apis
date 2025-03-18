
const express = require('express')
import {handler7838} from "./handler7838";
const app = express()
app.get('/7838', handler7838)
app.listen(3000, () => {})
        