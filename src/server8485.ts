
const express = require('express')
import {handler8485} from "./handler8485";
const app = express()
app.get('/8485', handler8485)
app.listen(3000, () => {})
        