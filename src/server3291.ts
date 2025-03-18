
const express = require('express')
import {handler3291} from "./handler3291";
const app = express()
app.get('/3291', handler3291)
app.listen(3000, () => {})
        