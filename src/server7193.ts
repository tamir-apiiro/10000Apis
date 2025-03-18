
const express = require('express')
import {handler7193} from "./handler7193";
const app = express()
app.get('/7193', handler7193)
app.listen(3000, () => {})
        