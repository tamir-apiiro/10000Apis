
const express = require('express')
import {handler1917} from "./handler1917";
const app = express()
app.get('/1917', handler1917)
app.listen(3000, () => {})
        