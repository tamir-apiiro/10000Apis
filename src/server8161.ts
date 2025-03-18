
const express = require('express')
import {handler8161} from "./handler8161";
const app = express()
app.get('/8161', handler8161)
app.listen(3000, () => {})
        