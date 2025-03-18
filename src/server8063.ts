
const express = require('express')
import {handler8063} from "./handler8063";
const app = express()
app.get('/8063', handler8063)
app.listen(3000, () => {})
        