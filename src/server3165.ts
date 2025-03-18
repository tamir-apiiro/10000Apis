
const express = require('express')
import {handler3165} from "./handler3165";
const app = express()
app.get('/3165', handler3165)
app.listen(3000, () => {})
        