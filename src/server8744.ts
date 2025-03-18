
const express = require('express')
import {handler8744} from "./handler8744";
const app = express()
app.get('/8744', handler8744)
app.listen(3000, () => {})
        