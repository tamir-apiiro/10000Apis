
const express = require('express')
import {handler1903} from "./handler1903";
const app = express()
app.get('/1903', handler1903)
app.listen(3000, () => {})
        