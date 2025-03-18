
const express = require('express')
import {handler1104} from "./handler1104";
const app = express()
app.get('/1104', handler1104)
app.listen(3000, () => {})
        