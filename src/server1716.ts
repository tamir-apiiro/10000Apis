
const express = require('express')
import {handler1716} from "./handler1716";
const app = express()
app.get('/1716', handler1716)
app.listen(3000, () => {})
        