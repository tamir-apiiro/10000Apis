
const express = require('express')
import {handler1810} from "./handler1810";
const app = express()
app.get('/1810', handler1810)
app.listen(3000, () => {})
        