
const express = require('express')
import {handler8898} from "./handler8898";
const app = express()
app.get('/8898', handler8898)
app.listen(3000, () => {})
        