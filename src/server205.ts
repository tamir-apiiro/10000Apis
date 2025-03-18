
const express = require('express')
import {handler205} from "./handler205";
const app = express()
app.get('/205', handler205)
app.listen(3000, () => {})
        