
const express = require('express')
import {handler8410} from "./handler8410";
const app = express()
app.get('/8410', handler8410)
app.listen(3000, () => {})
        