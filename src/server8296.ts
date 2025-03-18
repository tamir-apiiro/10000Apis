
const express = require('express')
import {handler8296} from "./handler8296";
const app = express()
app.get('/8296', handler8296)
app.listen(3000, () => {})
        