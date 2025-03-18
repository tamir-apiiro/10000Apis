
const express = require('express')
import {handler7402} from "./handler7402";
const app = express()
app.get('/7402', handler7402)
app.listen(3000, () => {})
        