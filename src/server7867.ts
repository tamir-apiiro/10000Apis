
const express = require('express')
import {handler7867} from "./handler7867";
const app = express()
app.get('/7867', handler7867)
app.listen(3000, () => {})
        