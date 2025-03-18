
const express = require('express')
import {handler7908} from "./handler7908";
const app = express()
app.get('/7908', handler7908)
app.listen(3000, () => {})
        