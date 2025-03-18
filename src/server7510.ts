
const express = require('express')
import {handler7510} from "./handler7510";
const app = express()
app.get('/7510', handler7510)
app.listen(3000, () => {})
        