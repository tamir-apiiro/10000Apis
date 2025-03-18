
const express = require('express')
import {handler8649} from "./handler8649";
const app = express()
app.get('/8649', handler8649)
app.listen(3000, () => {})
        