
const express = require('express')
import {handler8352} from "./handler8352";
const app = express()
app.get('/8352', handler8352)
app.listen(3000, () => {})
        