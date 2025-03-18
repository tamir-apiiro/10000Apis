
const express = require('express')
import {handler1709} from "./handler1709";
const app = express()
app.get('/1709', handler1709)
app.listen(3000, () => {})
        