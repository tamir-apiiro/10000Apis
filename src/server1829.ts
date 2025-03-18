
const express = require('express')
import {handler1829} from "./handler1829";
const app = express()
app.get('/1829', handler1829)
app.listen(3000, () => {})
        