
const express = require('express')
import {handler7124} from "./handler7124";
const app = express()
app.get('/7124', handler7124)
app.listen(3000, () => {})
        