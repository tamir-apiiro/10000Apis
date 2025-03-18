
const express = require('express')
import {handler7579} from "./handler7579";
const app = express()
app.get('/7579', handler7579)
app.listen(3000, () => {})
        