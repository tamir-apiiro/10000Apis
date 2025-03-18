
const express = require('express')
import {handler7744} from "./handler7744";
const app = express()
app.get('/7744', handler7744)
app.listen(3000, () => {})
        