
const express = require('express')
import {handler7165} from "./handler7165";
const app = express()
app.get('/7165', handler7165)
app.listen(3000, () => {})
        