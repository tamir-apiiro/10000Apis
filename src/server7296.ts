
const express = require('express')
import {handler7296} from "./handler7296";
const app = express()
app.get('/7296', handler7296)
app.listen(3000, () => {})
        