
const express = require('express')
import {handler1926} from "./handler1926";
const app = express()
app.get('/1926', handler1926)
app.listen(3000, () => {})
        