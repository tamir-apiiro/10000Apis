
const express = require('express')
import {handler1778} from "./handler1778";
const app = express()
app.get('/1778', handler1778)
app.listen(3000, () => {})
        