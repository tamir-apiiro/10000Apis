
const express = require('express')
import {handler7336} from "./handler7336";
const app = express()
app.get('/7336', handler7336)
app.listen(3000, () => {})
        