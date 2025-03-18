
const express = require('express')
import {handler1671} from "./handler1671";
const app = express()
app.get('/1671', handler1671)
app.listen(3000, () => {})
        