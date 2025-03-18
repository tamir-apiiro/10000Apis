
const express = require('express')
import {handler1421} from "./handler1421";
const app = express()
app.get('/1421', handler1421)
app.listen(3000, () => {})
        