
const express = require('express')
import {handler7868} from "./handler7868";
const app = express()
app.get('/7868', handler7868)
app.listen(3000, () => {})
        