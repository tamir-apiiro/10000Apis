
const express = require('express')
import {handler1955} from "./handler1955";
const app = express()
app.get('/1955', handler1955)
app.listen(3000, () => {})
        