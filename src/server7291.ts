
const express = require('express')
import {handler7291} from "./handler7291";
const app = express()
app.get('/7291', handler7291)
app.listen(3000, () => {})
        