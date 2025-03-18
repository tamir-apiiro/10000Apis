
const express = require('express')
import {handler7126} from "./handler7126";
const app = express()
app.get('/7126', handler7126)
app.listen(3000, () => {})
        