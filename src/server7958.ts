
const express = require('express')
import {handler7958} from "./handler7958";
const app = express()
app.get('/7958', handler7958)
app.listen(3000, () => {})
        