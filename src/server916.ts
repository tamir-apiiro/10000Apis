
const express = require('express')
import {handler916} from "./handler916";
const app = express()
app.get('/916', handler916)
app.listen(3000, () => {})
        