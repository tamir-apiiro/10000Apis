
const express = require('express')
import {handler7381} from "./handler7381";
const app = express()
app.get('/7381', handler7381)
app.listen(3000, () => {})
        