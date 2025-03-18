
const express = require('express')
import {handler7012} from "./handler7012";
const app = express()
app.get('/7012', handler7012)
app.listen(3000, () => {})
        