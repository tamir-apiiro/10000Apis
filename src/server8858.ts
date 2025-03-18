
const express = require('express')
import {handler8858} from "./handler8858";
const app = express()
app.get('/8858', handler8858)
app.listen(3000, () => {})
        