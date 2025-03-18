
const express = require('express')
import {handler8723} from "./handler8723";
const app = express()
app.get('/8723', handler8723)
app.listen(3000, () => {})
        